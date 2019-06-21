var http = require('http')
var config = require('config')

module.exports.function = function selectRecipeSearch (recipeBasicStructure, recipeCommitState) {
  
  // var hit = http.getUrl(config.get('remote.url') + 'hits/searchByRecipeId');
  // var score = http.getUrl(config.get('remote.url') + 'score/searchByRecipeId');
  // var comments = http.getUrl(config.get('remote.url') + 'comment/searchByRecipeId');
  let options = {
    query : {
      recipeId : recipeBasicStructure.recipeId
    },
    format : "json"
  };
  
  var db = http.getUrl(config.get('remote.url') + 'foodMaterial/searchByRecipeId', options);
  var materials = [];
  
  for (var i = 0; i < db.length; i++) {
    materials.push(db[i].irdnt_nm);
  }
  
  recipeBasicStructure.materials = materials;
  
  
  
  return {
    ingredients: recipeCommitState.ingredients,
    recipeBasicStructures : [recipeBasicStructure],
    maxPageNumber : 1,
    pageNumber : 1,
    recipesPerPage : 50,
    layoutType: 'LARGE'
  }
}
