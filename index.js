var getUser = require('./user-get-http');
var saveUserToCsv = require('./user-put-s3');

var context = {
  userId: 18,
};

getUser.handler(null, context, function(error, result) {
  if (error) {
    console.error('ERROR:', e);
    return;
  }

  console.log('User data ----------');
  console.log(JSON.stringify(result, null, 2));
});

userMock = {
  "id": 18,
  "created-at": "2015-03-10T11:28:39+11:00",
  "updated-at": "2017-05-10T01:32:06+10:00",
  "login": "testuser1",
  "email": "redacted",
  "purchasing-user": true,
  "expense-user": false,
  "sourcing-user": false,
  "inventory-user": true,
  "contracts-user": false,
  "employee-number": "",
  "firstname": "Test1",
  "lastname": "User",
  "fullname": "Test1 User"
};

saveUserToCsv.handler(null, userMock, function(error, response) {
  if (error) {
    console.error('ERROR: ', error);
    return
  }

  console.log(response);
});