var tool = require('lib/tool.js');

module.exports.function = function commitProcessShow (processCommitState) {
  return tool.GetYoutubeUrl(processCommitState.recipeName);
}
