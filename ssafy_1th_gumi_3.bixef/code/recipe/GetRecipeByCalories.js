var fail = require('fail');
var http = require('http');
var config = require('config');

module.exports.function = function getRecipeByCalories (lowerBound, lowerBoundRangeOption, upperBound, upperBoundRangeOption) {
  if(lowerBound != undefined && lowerBoundRangeOption == undefined){
    // exception throw
    throw fail.checkedError('lower range option is required', 'InvalidParameterException', null);
  }
  if(upperBound != undefined && upperBoundRangeOption == undefined){
    // exception throw
    throw fail.checkedError('upper range option is required', 'InvalidParameterException', null);
  }
  
  let options = {
    format : "json"
  }
  
  let uri = "foodBasic/";
  
  if(lowerBoundRangeOption == undefined){
    uri = uri + "lessMoreCalorie"; 
    options.query = {
      max : upperBound
    };
  }else if(upperBoundRangeOption == undefined){
    uri = uri + "moreCalorie"; 
    options.query = {
      min : lowerBound
    };
  }else{
    uri = uri + "lessCalorie"; 
    options.query = {
      min : lowerBound,
      max : upperBound
    };
  }
  return http.getUrl(config.get('remote.url') + uri, options);
}
