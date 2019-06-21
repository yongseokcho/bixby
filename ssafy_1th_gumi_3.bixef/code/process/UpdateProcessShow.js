module.exports.function = function updateProcessShow (layoutType, processCommitState) {
  if(layoutType == "다음"){
    processCommitState.currentStep = processCommitState.currentStep + 1;
  }else if(layoutType == "이전"){
    processCommitState.currentStep = processCommitState.currentStep - 1;
  }else{
    processCommitState.layoutType = layoutType;
  }
  return processCommitState;
}
