# Basic Usage

### Send a message
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