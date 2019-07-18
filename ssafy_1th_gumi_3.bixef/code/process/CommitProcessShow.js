var tool = require('lib/tool.js');
var fail = require('fail');

module.exports.function = function commitProcessShow (processCommitState) {
  let result = tool.GetYoutubeUrl(processCommitState.recipeName);
  if(result.url == undefined){
    throw fail.checkedError('Not enable to use Youtube API', 'NotAccessibleYoutubeAPI', null);
  }
  return tool.GetYoutubeUrl(processCommitState.recipeName);
}
