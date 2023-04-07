# Basic Usage

## Send a message
The `sendSMS` function requires two parameters, a `Mobile` number and a `Message`. The message will be sent to that mobile number.

* Using default promise-based syntax
```js
client
  .sendSMS("923xxxxxxxxx", "Hello World")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

* Or using `async and await`

```js
async function sendSMS() {
  try {
    const response = await client.sendSMS("923xxxxxxxxx", "Hello World");
  } catch (error) {
    console.log(error);
  }
}
sendSMS();
```

## Check Balance
The `checkBalance` function requires your send.pk username and password. It will return the current balance or points in your account.

* Using default promise-based syntax
```js
client
  .checkBalance("Your Username", "Your Password")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

* Or using `async and await`

```js
async function checkBalance() {
  try {
    const response = await client.checkBalance("Your Username", "Your Password");
  } catch (error) {
    console.log(error);
  }
}
checkBalance();
```
**Output:**
```js
{
  success: 'true',
  results: [ { Package: '1', Balance: '6 SMS', Expiry: '0000-00-00' } ]
}
```