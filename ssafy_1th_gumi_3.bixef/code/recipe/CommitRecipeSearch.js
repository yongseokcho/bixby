module.exports.function = function commitRecipeSearch (recipeCommitState, userIdentifier) {
  return {
    url : "http://www.naver.com",
    userIdentifier : userIdentifier,
    recipeId : recipeCommitState.recipeBasicStructures[0].recipeId,
    recipeName : recipeCommitState.recipeBasicStructures[0].recipeName
  };
}
