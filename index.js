const fetch = require('node-fetch');

module.exports = {
    send: function(message, key, channel) {
        return new Promise((resolve, reject) => {
            fetch(`https://riverside.rocks/v1/new?m=${encodeURIComponent(message)}&key=${key}&c_id=${channel}`)
                .then(res => res.json())
                .then(resolve)
                .catch(reject)
        })
    }
}