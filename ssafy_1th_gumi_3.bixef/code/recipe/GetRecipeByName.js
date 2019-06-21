var tool = require('lib/tool.js');
var console = require('console');
var fail = require('fail');

module.exports.function = function getRecipeByName (recipeName) {
  let db = tool.GetAllRecipes();
  db = tool.ConvertRecipeBasicStructure(db);
  for(let i=0; i<db.length; i++){
    if(db[i].recipeName == recipeName){
      return db[i];
    }
  }
  throw fail.checkedError('This error is not found exception', 'NotFoundRecipeByName', null);
}
