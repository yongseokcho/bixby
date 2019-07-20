var tool = require('lib/tool.js');

module.exports.function = function commitRecipeSearch (recipeCommitState) {
  return {
    recipeId : recipeCommitState.recipeBasicStructures[0].recipeId,
    recipeName : recipeCommitState.recipeBasicStructures[0].recipeName,
    exercises : tool.GetSportsCalory(recipeCommitState.recipeBasicStructures[0].calorie)
  }
}
