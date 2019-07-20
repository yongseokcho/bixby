var tool = require('lib/tool.js');
var console = require('console');
var fail = require('fail');

module.exports.function = function getRecipeByName (recipeName, recipeKeyword, searchKeyword) {
  let result = tool.searchRecipeByName(recipeName);
  if(result != undefined && result.length > 0){
    result = tool.ConvertRecipeBasicStructure(result);
    
    for (var i = 0; i < result.length; i++) {
      var MaterialShow = " ";
      result[i].materialShow = MaterialShow;
    }
    return result;
  }
  throw fail.checkedError('This error is not found exception', 'NotFoundRecipeByName', null);
}