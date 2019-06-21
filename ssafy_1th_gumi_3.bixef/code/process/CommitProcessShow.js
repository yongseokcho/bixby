module.exports.function = function commitProcessShow (processCommitState) {
  let endIdx = processCommitState.totalStep - 1;
  return {
    recipeId : processCommitState.recipeId,
    currentStep : processCommitState.processes[endIdx].currentStep,
    description : processCommitState.processes[endIdx].description,
    imgUrl : processCommitState.processes[endIdx].imgUrl,
    tip : processCommitState.processes[endIdx].tip
  }
}
