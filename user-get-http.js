exports.handler = (event, context, callback) => {
    var https = require('https');

    if (!event.userId) {
      return callback('ERROR: A valid userId was not provided');
    }

    var options = {
      host: 'redacted',
      port: 443,
      path: '/api/users/' + userId,
      agent: false
    };

    options.headers = {
      'X-REDACTED-API-KEY': 'redacted',
      'ACCEPT': 'application/json'
    };
    
    https.get(options, (res) => {
      var body = '';
    
      res.on('data', (chunk) => {
        body += chunk;
      });
    
      res.on('end', () => {
        return callback(null, JSON.parse(body));
      });
    }).on('error', (e) => {
      return callback(e);
    });
};