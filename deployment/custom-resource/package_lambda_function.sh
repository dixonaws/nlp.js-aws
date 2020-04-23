#!/bin/bash

# package the python code in a format suitable for Lambda
# run this command from the directory that contains lambda_function.py
cd .venv3/lib/python3.7/site-packages
zip -r9 ${OLDPWD}/lambda_function.zip .
cd ${OLDPWD}
zip -g lambda_function.zip lambda_function.py
zip -g lambda_function.zip requirements.txt
