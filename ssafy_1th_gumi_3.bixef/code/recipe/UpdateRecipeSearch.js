var http = require('http');
var config = require('config');
var console = require('console');
var main = require('lib/tool.js');

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
  if(layoutType != undefined){
    if(layoutType == '뒤로'){
      let db = main.GetRecipesByMaterials(recipeCommitState.ingredients);
      db = main.ConvertRecipeBasicStructure(db);
      recipeCommitState.recipeBasicStructures = db;
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
    GetIngredient(recipeCommitState);  
  }
  return recipeCommitState;
}

function Add(state, addIngredient){
  console.log("UpdateRecipeSearch Add function called");
  let flag;
  for(let i=0; i<addIngredient.length; i++){
    flag = true;
    for(let j=0; j<state.ingredients.length; j++){
      if(addIngredient[i] == '의미없는재료' || addIngredient[i] == state.ingredients[j]){
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
  console.log("UpdateRecipeSearch Remove function called");
  for(let i=0; i<removeIngredient.length; i++){
    for(let j=0; j<state.ingredients.length; j++){
      if(removeIngredient[i] == state.ingredients[j]){
        state.ingredients.splice(j, 1);
      }
    }
  }
}

function GetIngredient(state){
  console.log("UpdateRecipeSearch GetIngredient function called");
  let newRecipes = [];
  for(let i=0; i<state.recipeBasicStructures.length; i++){
    for(let j=0; j<state.recipeBasicStructures[i].materials.length; j++){
      for(let k=0; k<state.ingredients.length; k++){
        if(state.recipeBasicStructures[i].materials[j] == state.ingredients[k]){
          newRecipes.push(state.recipeBasicStructures[i]);
          j = state.recipeBasicStructures[i].materials.length;
          break;
        }
      }  
    }
  }
  state.recipeBasicStructures = newRecipes;
}

