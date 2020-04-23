<div align="center">
<img src="./screenshots/nlplogo.gif" width="925" height="auto"/>
</div>

# NLP.js App
Application to train your agents for bots, done using NLP.js.

Based on https://github.com/axa-group/nlp.js-app

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
### 1. Adjust the Cloudformation template  
```yaml
Mappings:
    SourceCode:
        General:
            S3Bucket: "dixonaws-solutions"
            KeyPrefix: "nlpjs/v1.0"
```

Create an S3 bucket and a directory within it to store the source code for this solution.
Copy the following files to that directory:
- lambda_function.zip: Lambda deployment package for the custom resource helper
- public.zip: source code for the training application

### 2. Deploy the cloudformation template
Per usual in AWS. Tested in us-east-1


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
