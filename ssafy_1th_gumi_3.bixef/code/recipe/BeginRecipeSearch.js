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

    for (var i = 0; i < db.length; i++) {
      var count = 0;
      var MaterialShow = "";
      for (var j = 0; j < ingredients.length; j++) {
        if (db[i].materialStr.indexOf(ingredients[j]) != -1) {
          if (count == 0) {
            MaterialShow += ingredients[j];
          }
          else if (count == 1) {
            MaterialShow += ", " + ingredients[j];
          }
          count++;
        }
      }
      if (count > 2) {
        MaterialShow += " 외 " + (count - 2) + "개";
      }
      MaterialShow += " 포함";
      db[i].materialShow = MaterialShow;
    }

    return {
      ingredients : ingredients,
      recipeBasicStructures : db,
      maxPageNumber : 1,
      pageNumber : 1,
      recipesPerPage : 50,
      layoutType : 'LARGE'
    }
  }