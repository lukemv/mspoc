exports.handler = (event, context, callback) => {
  var bucket = 'redacted';
  // Do transform here.
  var data = "id,firstname,lastname,fullname";
  data += event.id + "," 
    + event.firstname + "," 
    + event.lastname + "," 
    + event.fullname;

  var data = JSON.stringify(event);

  var now = new Date();
  var fileSuffix = now.getFullYear() + '-' 
    + now.getMonth() + '-' 
    + now.getDay() + '-' 
    + now.getHours() + '-' 
    + now.getMinutes();

  fileSuffix += '.csv';

  var key = 'redacted-user-' + fileSuffix;

  var AWS = require('aws-sdk');

  var s3 = new AWS.S3();

  var params = {
      Bucket : bucket,
      Key : key,
      Body : data
  }

  s3.putObject(params, function(err, data) {
    if (err) {
      return callback(err);
    }
  
    return callback(null, data);
  });
};