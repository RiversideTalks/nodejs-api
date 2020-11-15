<div align="center">
    <h1>RiversideRocks Chat API</h1>

    A NodeJS wrapper for RiversideRocks Chat API.
</div>

--- 

## Install

```
npm i riversiderocks --save
```

## Usage

```
var Chat = require('riversiderocks');

const message = "hello world"; // message to send 
const api_key = "gU3UXXXXXXXXXXXXXXXXXX"; // api key for user
const channel = "general"; // channel to send message

Chat.send(message, api_key, channel).then(data => {
    console.log(data);
}).catch(err => console.error(err));
```

### Obtaining the API key

The API key is used to validate the messages that are being sent. 

**Do not disclose your API key as other users can send messages on your behalf.**

1. Go to https://riverside.rocks/app/channels/general
2. Open your console and type `console.log(key)`
3. The result that you get is the API key!