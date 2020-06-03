#!/bin/bash

# package the python code in a format suitable for Lambda
# run this command from the directory that contains lambda_function.py

# set some variables
BASE_DIR=`pwd`

# clean any existing virtualenv environment
rm -rf .venv3

# install a new virtualenv with the required dependencies
virtualenv -p `which python3` .venv3
source .venv3/bin/activate
pip install -r requirements.txt

# add the dependencies to the lambda deployment package
PYTHON_PACKAGES_DIR=`ls .venv3/lib/`
cd .venv3/lib/${PYTHON_PACKAGES_DIR}/site-packages
zip -r9 ${BASE_DIR}/lambda_function.zip .
cd ${BASE_DIR}
cd .venv3/lib/${PYTHON_PACKAGES_DIR}/dist-packages
zip -r9 ${BASE_DIR}/lambda_function.zip .

# add the lambda function to the deployment package
cd ${BASE_DIR}
zip -g lambda_function.zip lambda_function.py
zip -g lambda_function.zip requirements.txt

deactivate

