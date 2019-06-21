var tool = require('lib/tool.js');
var console = require('console');

// 전체 요리 데이터베이스에서 검색
module.exports.function = function BeginRecipeSearch (ingredients) {
  var db = tool.GetRecipesByMaterials(ingredients);
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