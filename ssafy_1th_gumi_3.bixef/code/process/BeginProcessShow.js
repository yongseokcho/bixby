var tool = require('lib/tool.js');

module.exports.function = function beginProcessShow (recipeId) {
  var recipes = tool.GetProcessesByRecipeId(recipeId);
  return {
    recipeId : recipeId,
    totalStep : recipes.length,
    currentStep : 0,
    layoutType : "List",
    processes : recipes
  };
}
