var fail = require('fail');
var http = require('http');
var config = require('config');
var tool = require('lib/tool.js');

module.exports.function = function getRecipeByCalories (lowerBound, upperBound, boundOption, recipeKeyword, searchKeyword) {  
  let options = {
    format : "json"
  }
  let uri = "foodBasic/";

  if(boundOption.upperBoundFlag && boundOption.lowerBoundFlag){
    uri = uri + "lessMoreCalorie"; 
    options.query = {
      min : lowerBound,
      max : upperBound
    };
  }else if(boundOption.upperBoundFlag){
    uri = uri + "lessCalorie"; 
    options.query = {
      max : upperBound
    };
  }else if(boundOption.lowerBoundFlag){
    uri = uri + "moreCalorie"; 
    options.query = {
      min : lowerBound
    };
  }else{
    throw fail.checkedError('This error is not found exception', 'InvalidParameterException', null);
  }
  let db = http.getUrl(config.get('remote.url') + uri, options);
  db = tool.ConvertRecipeBasicStructure(db);
  return db;
}
