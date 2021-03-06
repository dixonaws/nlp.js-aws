#!/bin/bash

# publish the source files in dist/ to S3
# this script should be run from the root of the repository

NLPSRCBUCKET="s3://dixonaws-solutions-us-west-2"

# deploy dist to s3 (make available to Lambda custom-resource helper function)
echo "Publishing source files to $NLPSRCBUCKET... "
aws s3 cp dist/lambda_function.zip $NLPSRCBUCKET/nlpjs/v1.0/lambda_function.zip
aws s3 cp dist/nlpjs-trainingapp.zip $NLPSRCBUCKET/nlpjs/v1.0/nlpjs-trainingapp.zip
echo "done."
