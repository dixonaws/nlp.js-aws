#!/bin/bash

aws cloudformation create-stack --stack-name nlpjs-$(date |md5 |cut -c1-5) --template-body file://aws-nlpjs-solution.template --region us-east-1 --capabilities "CAPABILITY_IAM"
