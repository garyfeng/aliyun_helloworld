exports.handler = function(event, context, callback) {
  var response = {
      isBase64Encoded: false,
      statusCode: 200,
      body: 'Gary says: hellow wrold!\n\n'
  };
  callback(null, response);
};
