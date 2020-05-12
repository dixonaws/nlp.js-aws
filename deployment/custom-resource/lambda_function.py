import json
import boto3
import os
import sys
from subprocess import call
import requests
from botocore.exceptions import ClientError

s3_client=boto3.client("s3")
s3_resource=boto3.resource("s3")
cfn_client=boto3.client("cloudformation")

def lambda_handler(event, context):
    print("Received event: " + json.dumps(event, indent=2))

    print("Received event/ResourceProperties: " + json.dumps(event["ResourceProperties"], indent=2))

    if(event["RequestType"]=="Delete"):
        cleanup_delete_stack(event, context)

    bucket=str(event["ResourceProperties"]["SrcBucket"])
    key=str(event["ResourceProperties"]["SrcPath"]) + "/" + str(event["ResourceProperties"]["TrainingAppPackage"])

    str_dest_local_tmp_file="/tmp/TrainingAppPackage.zip"
    str_swagger2_file = "/tmp/public/swagger2.json"
    str_config_file="/tmp/public/config.json"
    str_new_basepath=event["ResourceProperties"]["NewBaseApiPath"]
    str_training_app_deployment_bucket=event["ResourceProperties"]["DestBucket"]
    str_new_signin_url=event["ResourceProperties"]["SigninUrl"]
    str_os = os.name

    print("OS is " + str_os)

    # clean /tmp on the lambda function
    lst_tmp_dir_listing = os.listdir("/tmp")

    # clean /tmp/public
    remove_directory("/tmp/public")

    # download training app from S3 bucket to /tmp on the lambda function
    try:
        print("Downloading " + key + "... ", end="")
        s3_resource.Bucket(bucket).download_file(key, str_dest_local_tmp_file)
        print(" done.")
    except Exception as e:
        print(e)
        print("Error getting object {} from bucket {}. Make sure they exist and your bucket is in the same region as this function.".format(key, bucket))
        raise e

    print("Extracting " + key + "... ", end="")
    # extract TrainingAppPackage.zip to /tmp/public
    try:
        retcode = call("unzip" + " /tmp/TrainingAppPackage.zip -d /tmp/", shell=True)
        if retcode < 0:
            print("Child was terminated by signal", -retcode, file=sys.stderr)
        else:
            print("Child returned", retcode, file=sys.stderr)
    except OSError as e:
        print("Execution failed:", e, file=sys.stderr)

    print(" done.")

    # adjust /tmp/public/swagger2.json with the API endpoint
    with open(str_swagger2_file, 'r') as swagger_file:
        dict_swagger_data=json.load(swagger_file)
        print("Current basePath in swagger2.json is: " + str(dict_swagger_data["basePath"]))
        dict_swagger_data["basePath"]=str_new_basepath

    with open(str_swagger2_file, 'w') as swagger_file:
        print("Writing new swagger2.json file with " + str_new_basepath + "...", end="")
        json.dump(dict_swagger_data, swagger_file)
        print(" done.")

    # adjust /tmp/public/.env with the SigninUrl
    with open(str_config_file, 'r') as config_file:
        dict_config_data = json.load(config_file)
        print("Current SIGNIN_URL in config is: " + str(dict_config_data["signin_url"]))
        dict_config_data["signin_url"] = str_new_signin_url

    with open(str_config_file, 'w') as config_file:
        print("Writing new config file with " + str_config_file + "...", end="")
        json.dump(dict_config_data, config_file)
        print(" done.")


    # upload /tmp/public to training app bucket
    deploy_training_app("/tmp/public", str_training_app_deployment_bucket)

    # delete /tmp/public
    remove_directory("/tmp/public")

    # how to return success to the cloudformation stack?
    # https://aws.amazon.com/premiumsupport/knowledge-center/cloudformation-lambda-resource-delete/
    send_response_cloudformation(event)

    return

def send_response_cloudformation(event):
    dict_response_signal = {}
    dict_response_signal["Status"] = "SUCCESS"
    dict_response_signal["PhysicalResourceId"] = "success" + str(event["RequestId"])
    dict_response_signal["StackId"] = event["StackId"]
    dict_response_signal["RequestId"] = event["RequestId"]
    dict_response_signal["LogicalResourceId"] = event["LogicalResourceId"]

    dict_response_signal["StackName"] = event["StackId"]
    dict_response_signal["UniqueId"] = event["StackId"]

    print("Sending SUCCESS signal back to Cloudformation... ")
    response = requests.put(event["ResponseURL"], data=json.dumps(dict_response_signal))
    print(" done.")

def cleanup_delete_stack(event, context):
    # send SUCCESS to the custom resource invoker so that it can be deleted
    send_response_cloudformation(event)
    remove_s3_bucket(event)

def remove_s3_bucket(event):
    bucket=s3_resource.Bucket(event["ResourceProperties"]["SrcBucket"])

    # empty the bucket
    print("Emptying old S3 bucket... " + event["ResourceProperties"]["SrcBucket"])
    response=bucket.objects.all().delete()
    print(response)

    # delete the bucket
    print("Deleting old S3 bucket... " + event["ResourceProperties"]["SrcBucket"])
    response=s3_client.delete_bucket(Bucket=event["ResourceProperties"]["SrcBucket"])
    print(response)

def remove_directory(str_directory_path):
    # todo: check to see if the directory exists
    # clean /tmp/public on the lambda function; if /tmp/public doesnt exist, then just skip
    try:
        lst_tmp_dir_listing = os.listdir(str_directory_path)
        print("Removing files in " + str_directory_path + "... ", end="")
        for file in lst_tmp_dir_listing:
            str_filename = str_directory_path + "/" + file
            try:
                os.remove(str_filename)
            except PermissionError:
                print("(permissions error, skipping " + file + ")")
                pass
            except FileNotFoundError:
                pass

        print(" done.")
        print("Removing " + str_directory_path + "... ", end="")
        os.rmdir(str_directory_path)
        print(" done.")

    except FileNotFoundError:
        print(str_directory_path + " doesn't exist, skipping...")
        pass

def guess_content_type(filename):
    str_content_type = "text/html" # default to text/html
    lst_filename_parts = filename.split(".")
    str_file_extension = lst_filename_parts[len(lst_filename_parts) - 1]

    if (str_file_extension == "htm"):
        str_content_type = "text/html"
    elif (str_file_extension == "html"):
        str_content_type = "text/html"
    elif (str_file_extension == "js"):
        str_content_type = "text/javascript"
    elif (str_file_extension == "svg"):
        str_content_type = "image/svg+xml"
    elif (str_file_extension == "json"):
        str_content_type = "application/json"
    elif (str_file_extension == "ico"):
        str_content_type = "image/x-icon"

    return(str_content_type)

def deploy_training_app(str_src_directory, str_dest_bucket):
    print("*** deploying training app to s3://" + str_dest_bucket)

    for filename in os.listdir(str_src_directory):
        # determine the content type of the file based on the extension
        str_content_type=guess_content_type(filename)
        print('Uploading %s to Amazon S3 bucket %s, (content type: %s)' % (filename, str_dest_bucket, str_content_type))

        try:
            response=s3_client.upload_file("/tmp/public/" + filename, str_dest_bucket, filename, ExtraArgs={'ContentType': str_content_type})
        except ClientError as e:
            print(e)
            return

    print("*** done deploying training app.")

