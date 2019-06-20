module.exports.function = function lanchWebSite (recipeBasicStructure, userIdentifier) {
  return {
    url : "http://www.naver.com",
    recipeId : recipeBasicStructure.recipeId,
    recipeName : recipeBasicStructure.recipeName,
    userIdentifier : userIdentifier
  };
}
