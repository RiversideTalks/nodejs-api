const fetch = require('node-fetch');


module.exports = (url, args = {}) => {
  args.headers = args.headers || {}
  args.headers['user-agent'] = 'Riverside Rocks Chat API (node, v1.0)'
  return fetch(url, args)
}

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
