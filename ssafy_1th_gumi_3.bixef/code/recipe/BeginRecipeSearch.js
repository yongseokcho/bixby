var db = require('lib/database.js')

// 전체 요리 데이터베이스에서 검색
module.exports.function = function BeginRecipeSearch (ingredients) {
  // let newRecipes = [];
  // let flag;
  // for(let i=0; i<db.recipes.length; i++){
  //   for(let k=0; k<db.recipes[i].materials.length; k++){
  //     for(let j=0; j<ingredients.length; j++){
  //       if(db.recipes[i].materials[k] == ingredients[j]){
  //         newRecipes.push(db.recipes[i]);
  //         k = db.recipes[i].materials.length;
  //         break;
  //       }
  //     } 
  //   }
  // }
  return {
    ingredients : ingredients,
    recipeBasicStructures : db.recipes,
    layoutType : 'LARGE'
  }
}
