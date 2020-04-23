#!/bin/bash

# package the python code in a format suitable for Lambda
cd venv3/lib/python3.7/site-packages
zip -r9 ${OLDPWD}/lambda_function.zip .
cd ${OLDPWD}
zip -g lambda_function.zip lambda_function.py

# deploy it to S3
aws s3 cp lambda_function.zip s3://dixonaws-solutions-us-east-1/nlpjs/v1.0/lambda_function.zip
