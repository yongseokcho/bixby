module.exports.function = function updateProcessShow (layoutType, processCommitState) {
  if(layoutType == "다음" || layoutType == "상세보기"){
    processCommitState.currentStep = processCommitState.currentStep + 1;
    processCommitState.layoutType = "Target";
  }else if(layoutType == "이전"){
    processCommitState.currentStep = processCommitState.currentStep - 1;
    processCommitState.layoutType = "Target";
  }
  return processCommitState;
}
