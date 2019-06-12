var http = require('http')
var config = require('config')

// 검색된 요리에서 필터링
module.exports.function = function UpdateRecipeSearch (recipeCommitState, addIngredient, removeIngredient, layoutType) {
  let changed = false;
  if(addIngredient != undefined){
    Add(recipeCommitState, addIngredient);
    changed = true;
  }
  if(removeIngredient != undefined){
    Remove(recipeCommitState, removeIngredient);
    changed = true;
  }
  if(changed){
    GetIngredient(recipeCommitState);  
  }
  if(layoutType != undefined){
    recipeCommitState.layoutType = layoutType;
  }
  return recipeCommitState;
}

function Add(state, addIngredient){
  let flag;
  for(let i=0; i<addIngredient.length; i++){
    flag = true;
    for(let j=0; j<state.ingredients.length; j++){
      if(addIngredient[i] == state.ingredients[j]){
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
      if(removeIngredient[i] == state.ingredients[j]){
        state.ingredients.splice(j, 1);
      }
    }
  }
}

function GetIngredient(state){
  let newRecipes = [];
  for(let i=0; i<state.recipeBasicStructure.length; i++){
    for(let j=0; j<state.recipeBasicStructure.materials.length; j++){
      for(let k=0; k<state.ingredients.length; k++){
        if(state.recipeBasicStructure[i].materials[j] == state.ingredients[k]){
          newRecipes.push(state.recipeBasicStructure[i]);
          j = state.recipeBasicStructure.materials.length;
          break;
        }
      }  
    }
  }
  state.recipeBasicStructure = newRecipes;
}
