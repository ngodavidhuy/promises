/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var getGitHubProfileAsync = require('./promisification.js').getGitHubProfileAsync;
var readFilePromise = Promise.promisify(fs.readFile);
var writeFilePromise = Promise.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = function (readFilePath, writeFilePath) {
  return readFilePromise(readFilePath, 'utf8').then(data => {
    getGitHubProfileAsync((data.split('\n')[0])).then(data => {
      writeFilePromise(writeFilePath, JSON.stringify(data));
    });
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};