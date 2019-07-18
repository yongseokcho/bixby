var tool = require('lib/tool.js');
var fail = require('fail');

module.exports.function = function getExerciseStructureByRecipe (recipeBasicStructure) {
  let data = tool.GetSportsCalory(recipeBasicStructure.calorie);
  if(data == undefined){
    throw fail.checkedError('There is no exercise data', 'NotFoundExercises', null);
  }
  return {
    recipeId : recipeBasicStructure.recipeId,
    recipeName : recipeBasicStructure.recipeName,
    exercises : data
  }
}
