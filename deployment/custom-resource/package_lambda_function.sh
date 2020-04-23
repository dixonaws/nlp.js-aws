#!/bin/bash

# package the python code in a format suitable for Lambda
# run this command from the directory that contains lambda_function.py
cd .venv3/lib/python3.7/site-packages
zip -r9 ${OLDPWD}/lambda_function.zip .
cd ${OLDPWD}
zip -g lambda_function.zip lambda_function.py
zip -g lambda_function.zip requirements.txt

# deploy it to S3
aws s3 cp lambda_function.zip s3://dixonaws-solutions-us-east-1/nlpjs/v1.0/lambda_function.zip
