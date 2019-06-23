var tool = require('lib/tool.js');

module.exports.function = function beginProcessShow (processParameter) {
  var processes = tool.GetProcessesByRecipeId(processParameter.recipeId);
  processes = tool.ConvertProcess(processes);
  return {
    recipeId : processParameter.recipeId,
    recipeName : processParameter.recipeName,
    totalStep : processes.length,
    currentStep : -1,
    layoutType : "List",
    processes : processes
  };
}
