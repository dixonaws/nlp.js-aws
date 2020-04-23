#!/bin/bash

# build the components needed to launch the cloudformation stack: package the lambda custom resource and the training app
# both the lambda custom resource and the training app are copied to the dist folder
# this script should be run from the root of the respository

BASEDIR=$(pwd)

# create a package for the custom resource and copy it to dist
cd deployment/custom-resource
./package_lambda_function.sh
mv lambda_function.zip dist
cd $BASEDIR

# create a package for the training app and copy it to dist
zip -r nlpjs-trainingapp.zip public/
mv nlpjs-trainingapp.zip dist

# deploy to s3
# aws s3 cp lambda_function.zip s3://dixonaws-solutions-us-east-1/nlpjs/v1.0/lambda_function.zip
