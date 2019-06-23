var tool = require('lib/tool.js');

module.exports.function = function getExerciseStructureByRecipe (recipeBasicStructure) {
  return {
    recipeId : recipeBasicStructure.recipeId,
    recipeName : recipeBasicStructure.recipeName,
    exercises : tool.GetSportsCalory(recipeBasicStructure.calorie)
  }
}
