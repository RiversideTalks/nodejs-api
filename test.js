var Chat = require('./index.js');

var time = "Timestamp = " + Date.now();

Chat.send(time, "gU3UXXXXXXXXXXXXXXXXXXXXXX", "general").then(data => {
    console.log(data);
}).catch(err => console.error(err));