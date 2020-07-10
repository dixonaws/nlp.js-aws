#!/bin/bash

AWS_REGION="us-west-2"
ADMIN_EMAIL="dixonaws@amazon.com"

aws cloudformation create-stack --stack-name nlpjs-$1 --template-body file://aws-nlpjs-solution.template --region $AWS_REGION --capabilities "CAPABILITY_IAM" --parameters ParameterKey=AdminEmail,ParameterValue=$ADMIN_EMAIL
