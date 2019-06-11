module.exports.function = function selectRecipeSearch (recipeBasicStructure, recipeCommitState) {
  return {
    ingredients: recipeCommitState.ingredients,
    recipeBasicStructures : [recipeBasicStructure],
    layoutType: 'LARGE'
  }
}
