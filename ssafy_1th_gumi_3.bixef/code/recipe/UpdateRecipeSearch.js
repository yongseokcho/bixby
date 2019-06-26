var console = require('console');
var tool = require('lib/tool.js');

// 검색된 요리에서 필터링
module.exports.function = function UpdateRecipeSearch (recipeCommitState, addIngredient, addIngredient2, addIngredient3, addIngredient4, addIngredient5, removeIngredient, removeIngredient2, removeIngredient3, removeIngredient4, removeIngredient5, addKeyword, removeKeyword, layoutType) {

  let changed = false;
  let criteria = tool.wrapIngredients(addIngredient,
                                      addIngredient2,
                                      addIngredient3,
                                      addIngredient4,
                                      addIngredient5);
  if(criteria.length > 0){    
    Add(recipeCommitState, criteria);
    changed = true;
  }
  criteria = tool.wrapIngredients(removeIngredient,
                                  removeIngredient2,
                                  removeIngredient3,
                                  removeIngredient4,
                                  removeIngredient5);
  if(criteria.length > 0){
    Remove(recipeCommitState, criteria);
    changed = true;
  }

  if(layoutType != undefined && layoutType != ""){
    if(layoutType == '뒤로'){
      changed = true;
    }else if(layoutType == '다음'){
      if(recipeCommitState.maxPageNumber > recipeCommitState.pageNumber){ 
        recipeCommitState.pageNumber++;
        changed = true;        
      }
    }else if(layoutType == '이전'){
      if(recipeCommitState.pageNumber > 0){
        recipeCommitState.pageNumber--;  
        changed = true;
      }
    }else{
      recipeCommitState.layoutType = layoutType;  
    }
  }
  if(changed){
    let db = tool.GetRecipesByMaterials(recipeCommitState.ingredients);
    db = tool.ConvertRecipeBasicStructure(db);
    recipeCommitState.recipeBasicStructures = db;
  }
  return recipeCommitState;
}

function Add(state, addIngredient){

  let flag;
  for(let i=0; i<addIngredient.length; i++){
    flag = true;
    for(let j=0; j<state.ingredients.length; j++){
      if(addIngredient[i] == '의미없는재료' || JSON.stringify(addIngredient[i]) ===  JSON.stringify(state.ingredients[j])){
        flag = false;
        break;
      }
    }
    if(flag){
      state.ingredients.push(addIngredient[i]);
    }
  }
}

function Remove(state, removeIngredient){

  for(let i=0; i<removeIngredient.length; i++){
    for(let j=0; j<state.ingredients.length; j++){

      if(JSON.stringify(removeIngredient[i]) ===  JSON.stringify(state.ingredients[j])){

        state.ingredients.splice(j, 1);
      }
    }
  }
}