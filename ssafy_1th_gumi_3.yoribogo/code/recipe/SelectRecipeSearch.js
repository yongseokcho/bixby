var http = require('http');
var config = require('config');
var console = require('console');
var fail = require('fail');

module.exports.function = function selectRecipeSearch (recipeBasicStructure, recipeCommitState, $vivContext) {
  
  options = {
    query: {
      user_id : $vivContext.userId,
      recipe_id : recipeBasicStructure.recipeId,
      cnt : 4
    }
  }
  
  http.getUrl(config.get('remote.url') + 'hits/insert', options);
  options = {
    query: {
      recipeId : recipeBasicStructure.recipeId
    },
    format : "json"
  }
  let hitstatus = http.getUrl(config.get('remote.url') + 'hits/searchByRecipeId', options);
  recipeBasicStructure.hit = hitstatus.cnt;
  
  return {
    searchType : recipeCommitState.searchType,
    recipeName : recipeCommitState.recipeName,
    ingredients: recipeCommitState.ingredients,
    boundOption : recipeCommitState.boundOption,
    recipeBasicStructures : [recipeBasicStructure],
    maxPageNumber : 1,
    pageNumber : 1,
    recipesPerPage : 50,
    layoutType: 'LARGE'
  }
}
