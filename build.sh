#!/bin/bash

# build the components needed to launch the cloudformation stack: package the lambda custom resource and the training app
# both the lambda custom resource and the training app are copied to the dist folder
# this script should be run from the root of the respository

# create a package for the custom resource and copy it to dist
deployment/custom-resource/package_lambda_function.sh
mv deployment/custom-resource/lambda_function.zip dist

# create a package for the training app and copy it to dist
zip -r nlpjs-trainingapp.zip public/
mv nlpjs-trainingapp.zip dist

