var tool = require('lib/tool.js');

module.exports.function = function beginProcessShow (recipeId, recipeName) {
  var processes = tool.GetProcessesByRecipeId(recipeId);
  processes = tool.ConvertProcess(processes);
  return {
    recipeId : recipeId,
    recipeName : recipeName,
    totalStep : processes.length,
    currentStep : 0,
    layoutType : "List",
    processes : processes
  };
}
