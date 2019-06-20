var http = require('http');
var config = require('config');

module.exports.ConvertRecipeBasicStructure = function(db){
  let result = [];
  for(let i=0; i<db.length; i++){
    let obj = {
      recipeId: db[i].recipe_id,
      recipeName: db[i].recipe_nm_ko,
      calorie: db[i].calorie,
      cookingTime: db[i].cooking_time,
      detailedUrl: db[i].det_url,
      images: [{
        url: db[i].img_url
      }],
      ingredientCode: (db[i].irdnt_code.trim() === "" ? "없음" : db[i].irdnt_code),
      level: db[i].level_nm,
      nationCode: db[i].nation_code,
      nationName: db[i].nation_nm,
      price: (db[i].pc_nm.trim() === "" ? "없음" : db[i].pc_nm),
      quantity: db[i].qnt,
      summary: db[i].sumry, 
      typeCode: db[i].ty_code,
      typeName: db[i].ty_nm,
      materials: ['기본값'],
      hit: 10,
      rating: db[i].sumScore,
      comments: [
        {
          commentId : 1038489,
          content: '정말 맛있군요. 진짜진짜 한 번 먹고나면 천국갈만한 맛이에요 크으으으으으으 진짜 짱짱맨이다아요오오오오',
          commentDate: '2019-09-04',
          recipeId : 2382,
          userId : 'dbsrhksdnd',
          rating : 4.5
        }
      ]
    };
    result.push(obj);
  }
  return result;
}

module.exports.GetAllRecipes = function(){
  return http.getUrl(config.get('remote.url') + 'foodBasic/findAll', { format: 'json' });
}

module.exports.GetRecipesByMaterials = function(ingredients){
  // let query = "?page=0&criteria=all&material="+ingredients[0];
  // for(let i=1; i<ingredients.length; i++){
  //   query += "," + ingredients[i];
  // }
  // return http.getUrl(config.get('remote.url') + 'foodBasic/searchByMaterial' + query, {format: 'json'});
  let materials = ingredients[0];
  for(let i=1; i<ingredients.length; i++){
    materials += "," + ingredients[i];
  }
  let options = {
    query : {
      page : 0,
      criteria : "all",
      material : materials
    },
    format : "json"
  };
  return http.getUrl(config.get('remote.url') + 'foodBasic/searchByMaterial', options);
}
