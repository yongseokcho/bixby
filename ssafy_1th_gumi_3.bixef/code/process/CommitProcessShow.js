var tool = require('lib/tool.js');

module.exports.function = function commitProcessShow (processCommitState) {
  let result = tool.GetYoutubeUrl(processCommitState.recipeName);
  return {
    keyword : processCommitState.recipeName,
    url : result
  };
}
