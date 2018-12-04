/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath) {
  // TODO
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.split('\n')[0]);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  // TODO
  return new Promise((resolve, reject) => {
    try {
      request(url, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response.statusCode);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};




// request(url, (err, response) => {
//   if (err) {
//     callback(err);
//   } else {
//     callback(null, response.statusCode);
//   }
// })


// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
