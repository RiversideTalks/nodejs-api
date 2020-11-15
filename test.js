var Chat = require('./index.js');

var time = "Timestamp = " + Date.now();

Chat.send(time, "gU3UXkri0ud7UT5rPQaTXUHfvuVtUaW", "general").then(data => {
    console.log(data);
}).catch(err => console.error(err));