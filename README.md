# SendPK SMS Client
This package provides a simple and efficient client for sending SMS messages via the [Sendpk.com](https://sendpk.com/) SMS service provider in Pakistan.

## Installation
You must have Nodejs v8.0.0 or higher and NPM package manager.
```sh
npm install sendpk-sms-client
```

## Loading and Configuring the module
### ES Modules (ESM)

```js
import { SMSClient } from "sendpk-sms-client"
const client = new SMSClient("Your API KEY", "BrandName");
```
### CommonJS
If you are still using `require()` to import you modules.

```js
const { SMSClient } = require("sendpk-sms-client");
const client = new SMSClient("Your API KEY", "BrandName");
```

## Documentation
The Basic Usage
* [Send a message](https://github.com/FaisaljanBaloch/sendpk-sms-client/blob/main/docs/basic_usage.md#send-a-message)
* [Check balance/points](https://github.com/FaisaljanBaloch/sendpk-sms-client/blob/main/docs/basic_usage.md#check-balance)

## Contribution
Unfortunately, the project doesn't follow any contribution template. So, It means you can easily work on an issue or create a new issue (if doesn't already exist), fix issue and create a pull request (PR).

**Note**
Make a separate branch and name identical of your branches to any issue you solved. Every contribution you make will be highly appreciated by us!

## Author
This project was founded by **Faisal Jan**. A student and a developer who loves to create software programs that help any individual or organization.
* You can follow him on [Twitter](https://twitter.com/justFaisaljan)

> Thank you, And have a nice day!
