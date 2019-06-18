var main = require('lib/tool.js');

// 전체 요리 데이터베이스에서 검색
module.exports.function = function BeginRecipeSearch (ingredients) {

  var db = main.GetAllRecipes();
  db = main.ConvertRecipeBasicStructure(db);
  return {
    ingredients : ingredients,
    recipeBasicStructures : db,
    pageNumber : 1,
    recipesPerPage : 10,
    layoutType : 'LARGE'
  }
}