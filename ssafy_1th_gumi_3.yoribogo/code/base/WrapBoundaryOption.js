module.exports.function = function wrapBoundaryOption (lowerBound, upperBound, lowerBoundKeyword, upperBoundKeyword) {
  let result = {
    lowerBoundFlag : false,
    upperBoundFlag : false,
    upperBound : 2000,
    lowerBound : 0,
  }
  if(lowerBound != undefined && lowerBound != 0){
    result.lowerBoundFlag = true;
    result.lowerBound = lowerBound;
  }
  if(upperBound != undefined && upperBound != 0){
    result.upperBoundFlag = true;
    result.upperBound = upperBound;
  }
  if(upperBoundKeyword == undefined && lowerBoundKeyword == undefined){
    result.lowerBoundFlag = true;
    result.upperBoundFlag = true;
    result.lowerBound = lowerBound;
    result.upperBound = upperBound;
  }
  return result;
}
