var tool = require('lib/tool.js');
var fail = require('fail');

module.exports.function = function beginProcessShow (processParameter) {
  var processes = tool.GetProcessesByRecipeId(processParameter.recipeId);
  if(processes == undefined || processes.length == 0){
    throw fail.checkedError('There is no process', 'NotFoundProcesses', null);
  }
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
