#!/bin/bash

AWS_REGION="us-east-1"
ADMIN_EMAIL="dixonaws@amazon.com"

aws cloudformation create-stack --stack-name nlpjs-secure-$(date |md5 |cut -c1-5) --template-body file://aws-nlpjs-solution-secure.template --region $AWS_REGION --capabilities "CAPABILITY_IAM" --parameters ParameterKey=AdminEmail,ParameterValue=$ADMIN_EMAIL
