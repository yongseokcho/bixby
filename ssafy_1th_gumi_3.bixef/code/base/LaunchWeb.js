var tool = require('lib/tool.js');
var fail = require('fail');

module.exports.function = function launchWeb (keyword) {
  let result = tool.GetYoutubeUrl(keyword);
  if(result.url == undefined){
    throw fail.checkedError('Not enable to use Youtube API', 'NotAccessibleYoutubeAPI', null);
  }
  return result;
}
