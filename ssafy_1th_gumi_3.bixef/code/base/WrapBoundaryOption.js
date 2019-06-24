module.exports.function = function wrapBoundaryOption (lowerBoundKeyword, upperBoundKeyword) {
  let result = {
    lowerBoundFlag : false,
    upperBoundFlag : false
  }
  if(lowerBoundKeyword != undefined && lowerBoundKeyword != ""){
    result.lowerBoundFlag = true;
  }
  if(upperBoundKeyword != undefined){
    result.upperBoundFlag = true;
  }
  if(upperBoundKeyword == undefined && lowerBoundKeyword == undefined){
    result.lowerBoundFlag = true;
    result.upperBoundFlag = true;
  }
  return result;
}
