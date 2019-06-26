var tool = require('lib/tool.js');
var console = require('console');
var fail = require('fail');

// 전체 요리 데이터베이스에서 검색
module.exports.function = function BeginRecipeSearch (ingredients, recipeKeyword, searchKeyword) {
  var db = tool.GetRecipesByMaterials(ingredients);
  if(db == undefined || db.length == 0){
    throw fail.checkedError('There is no process', 'NotFoundRecipes', null);
  }
  db = tool.ConvertRecipeBasicStructure(db);
  return {
    ingredients : ingredients,
    recipeBasicStructures : db,
    maxPageNumber : 1,
    pageNumber : 1,
    recipesPerPage : 50,
    layoutType : 'LARGE'
  }
}