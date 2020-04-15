<div align="center">
<img src="./screenshots/nlplogo.gif" width="925" height="auto"/>
</div>

# NLP.js App
Application to train your agents for bots, done using NLP.js.

34 languages supported: Arabic (ar), Armenian (hy), Bengali (bn), Basque (eu), Catala (ca), Chinese (zh), Czech (cs), Danish (da), Dutch (nl), English (en), Farsi (fa), Finnish (fi), French (fr), Galician (gl), German (de), Greek (el), Hindi (hi), Hungarian (hu), Indonesian (id), Irish (ga), Italian (it), Japanese (ja), Norwegian (no), Portuguese (pt), Romanian (ro), Russian (ru), Slovene (sl), Spanish (es), Swedish (sv), Tagalog (tl), Tamil (ta), Thai (th), Turkish (tr), Ukrainian (uk)

<div align="center">
<img src="./screenshots/demonlp.gif" width="auto" height="auto"/>
</div>

### TABLE OF CONTENTS

<!--ts-->

- [Installation](#installation)
- [Example of Use](#example-of-use)
- [Software Used](#software-used)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Who is behind it](#who-is-behind-it)
- [License](#license.md)
  <!--te-->

## Installation
To deploy in AWS, follow these steps:
1. Clone the nlp.js serverless feature branch from github
https://github.com/axa-group/nlp.js-app/tree/feature/serverless

2. Adjust the serverless.yml 
Edit the provider section to point to your desired region (I use us-east-1 for testing, 
but should also work in other regions with Lambda, Dynamo, API-GW)

```yaml
provider:
  name: aws
  runtime: nodejs12.x
  region: us-east-1
  stage: dev
  role: !GetAtt nlpjsLambdaExecutionRole.Arn
```

3. Edit the .env file in the project root
My .env file is as follows:

```
NODE_ENV=production
LOG_LEVEL=info
SERVERLESS=true
```

4. Download required libraries
Run ```npm install```

5. Deploy the backend Dynamo, S3, Cloudfront, API-GW, IAM policies. This command will run a CloudFormation stack and output an API endpoint.
Run ```npx serverless deploy```

6. Adjust public/swagger2.json
Replace the basePath value in <project root>/public/swagger2.json with the endpoint from Step 5

The first block in my swagger2.json looks like this:
```json
{
  "swagger": "2.0",
  "basePath": "https://zc42uapruh.execute-api.us-east-1.amazonaws.com/dev/api",
  "schemes": ["https"],
  "info": {
    "title": "NLP.js API Documentation",
    "version": "0.0.1"
  },
```

7. Deploy the training app
Run ```serverless client deploy``` from the project root

This command will copy the assets from <project root>/public to the S3 bucket that was created in Step 6. You should now be able to reach the training app through the cloudfront distribution (output from the cloudformation stack in Step 6).


### Running in a different port

Example of application running in port 3010:

./.env
```
NODE_ENV=development
MONGO_URL=mongodb://localhost:27017/nlpjs
LOG_LEVEL=debug
PORT=3010
```

./client/.env
```
SETTINGS_URL=http://localhost:3010
API_URL=http://localhost:3010
PUBLIC_PATH_PREFIX=
```

Then, replace "public" folder content:
```
cd client
npm run build
cd ..
mv public public_old
mv client/build public
npm start
```

## Example of use

You can create an agent:

<div align="center">
<img src="./screenshots/create-agent.png" width="auto" height="auto"/>
</div>

Then create at least one domain:

<div align="center">
<img src="./screenshots/create-domain.png" width="auto" height="auto"/>
</div>

Create some entities if you need them:

<div align="center">
<img src="./screenshots/create-entity.png" width="auto" height="auto"/>
</div>

Create some intents:

<div align="center">
<img src="./screenshots/create-intent.png" width="auto" height="auto"/>
</div>

Train and test:

<div align="center">
<img src="./screenshots/train.png" width="auto" height="auto"/>
</div>

### Slot filling

It's also possible to check required entities within an intent.

Example of basic slot filling:

<div align="center">
<img src="./screenshots/slot-filling.png" width="auto" height="auto"/>
</div>

Example of multiple slot filling used in the same intent:

<div align="center">
<img src="./screenshots/slot-filling-2.png" width="auto" height="auto"/>
</div>

## Software Used

This project is based on the Articulate Project from Samtec, that you can find here: https://github.com/samtecspg/articulate

## Contributing

You can read the guide of how to contribute at [Contributing](https://github.com/axa-group/nlp.js-app/blob/master/CONTRIBUTING.md).

## Code of Conduct

You can read the Code of Conduct at [Code of Conduct](https://github.com/axa-group/nlp.js-app/blob/master/CODE_OF_CONDUCT.md).

## Who is behind it?

This project is developed by AXA Group Operations Spain S.A.

If you need to contact us, you can do it at the email jesus.seijas@axa.com

## License

Copyright (c) AXA Group Operations Spain S.A.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
