var http = require('http')
var config = require('config')

module.exports.function = function selectRecipeSearch (recipeBasicStructure, recipeCommitState) {
  
  let options = {
    query : {
      recipeId : recipeBasicStructure.recipeId
    },
    format : "json"
  };
  
  var db = http.getUrl(config.get('remote.url') + 'foodMaterial/searchByRecipeId', options);
  let materialStr = "";
  var materials = [];
  
  for (var i = 0; i < db.length; i++) {
    materials.push(db[i].irdnt_nm);
    if(i == 0){
      materialStr += db[i].irdnt_nm;
    }else{
      materialStr += ", "+ db[i].irdnt_nm;
    }
  }
  
  recipeBasicStructure.materials = materials;
  recipeBasicStructure.materialStr = materialStr;
  
  
  return {
    ingredients: recipeCommitState.ingredients,
    recipeBasicStructures : [recipeBasicStructure],
    maxPageNumber : 1,
    pageNumber : 1,
    recipesPerPage : 50,
    layoutType: 'LARGE'
  }
}
