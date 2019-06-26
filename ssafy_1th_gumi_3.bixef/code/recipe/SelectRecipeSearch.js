var http = require('http');
var config = require('config');
var console = require('console');
var fail = require('fail');

module.exports.function = function selectRecipeSearch (recipeBasicStructure, recipeCommitState, $vivContext) {
  
  let options = {
    query : {
      recipeId : recipeBasicStructure.recipeId
    },
    format : "json"
  };
  
  var db = http.getUrl(config.get('remote.url') + 'foodMaterial/searchByRecipeId', options);
  let materialStr = "";
  var materials = [];
  if(db == undefined){
    throw fail.checkedError('There is no recipe','NotFoundRecipe',null);
  }
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
  
  options = {
    query: {
      user_id : $vivContext.userId,
      recipe_id : recipeBasicStructure.recipeId,
      cnt : 4      
    }
  }
  console.log(options);
  let hitstatus = http.getUrl(config.get('remote.url') + 'hits/insert', options);
  recipeBasicStructure.hit = hitstatus;
  
  return {
    ingredients: recipeCommitState.ingredients,
    recipeBasicStructures : [recipeBasicStructure],
    maxPageNumber : 1,
    pageNumber : 1,
    recipesPerPage : 50,
    layoutType: 'LARGE'
  }
}
