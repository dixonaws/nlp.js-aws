#!/bin/bash

# build the components needed to launch the Cloudformation stack: package the lambda custom resource and the training app
# both the lambda custom resource and the training app are copied to the dist folder
# this script should be run from the root of the repository

BASEDIR=$(pwd)

echo -n "Checking for dist... "
if [[ -d "dist" ]]
then
  echo "dist/ exists"
else
  echo "dist/ does not exist, creating."
  mkdir dist
fi

# create a package for the custom resource and copy it to dist
echo -n "Packaging Lambda custom resource... "
cd deployment/custom-resource
./package_lambda_function.sh > /dev/null
echo "done."

echo -n "Moving lambda_function.zip to dist... "
mv lambda_function.zip $BASEDIR/dist
echo "done."

cd $BASEDIR

# create a package for the training app and copy it to dist
echo -n "Packaging training app... "
zip -r nlpjs-trainingapp.zip public/ > /dev/null
echo " done."

echo -n "Moving nlpjs-trainingapp.zip to dist... "
mv nlpjs-trainingapp.zip dist
echo "done."

