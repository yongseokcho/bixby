var http = require('http');
var config = require('config');

module.exports.function = function launchWeb (processCommitState) {
  let options = {
    query: {
      name : processCommitState.recipeName
    },
    format : "json"
  };
  let result = http.getUrl(config.get('remote.url') + 'foodProcess/processSearchByRecipeId', options);
  return {
    url : result.url,
    recipeName : processCommitState.recipeName,
  }
}
