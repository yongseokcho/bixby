var http = require('http')
var config = require('config')

// 전체 요리 데이터베이스에서 검색
module.exports.function = function BeginRecipeSearch (ingredients) {

  var db = http.getUrl(config.get('remote.url') + 'foodBasic/findAll', { format: 'json' });
  db = ConvertRecipeBasicStructure(db);
  return {
    ingredients : ingredients,
    recipeBasicStructures : db,
    layoutType : 'LARGE'
  }
}

function ConvertRecipeBasicStructure(db){
  let result = [];
  for(let i=0; i<(db.length > 10 ? 10 : db.length ); i++){
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
      materials: ['김치', '미역', '돼지고기'],
      hit: 10,
      rating: 4.5,
      comments: [
        {
          commentId : 1038489,
          content: '정말 맛있군요',
          commentDate: '2019-09-04',
          recipeId : 2382,
          userId : 'dbsrhksdnd'
        }
      ]
    };
    result.push(obj);
  }
  return result;
}
