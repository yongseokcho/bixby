var http = require('http');
var config = require('config');
var console = require('console');
var fail = require('fail');

// Database의 scheme을 Bixby structure로 변환시켜줌
module.exports.ConvertRecipeBasicStructure = function(db, ingredients){
  let result = [];
  for(let i=0; i<db.length; i++){
    var materialStr = "";
    var materials = [];
    for (var j = 0; j < db[i].materialName.length; j++) {
      materials.push(db[i].materialName[j] + " " + db[i].materialAmount[j]);
      if(j == 0){
        materialStr += db[i].materialName[j];
      }else{
        materialStr += ", "+ db[i].materialName[j];
      }
    }
    var count = 0;
    var MaterialShow = " ";
    if (ingredients != undefined) {
      for (var j = 0; j < ingredients.length; j++) {
        if (materialStr.indexOf(ingredients[j]) != -1) {
          if (count == 0) {
            MaterialShow += ingredients[j];
          }
          else if (count == 1) {
            MaterialShow += ", " + ingredients[j];
          }
          count++;
        }
      }
      if (count > 2) {
        MaterialShow += " 외 " + (count - 2) + "개";
      }
      if (count > 0) {
        MaterialShow += " 포함";
      }
    }
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
      materials: materials,
      hit: 10,
      rating: db[i].sumScore,
      materialStr : materialStr,
      materialShow : MaterialShow
    };
    result.push(obj);
  }
  return result;
}

// Database의 scheme을 Bixby structure로 변환시켜줌
module.exports.ConvertProcess = function(processes){
  let result = [];
  for(let i=0; i<processes.length; i++){
    let obj = {
      currentStep : processes[i].cooking_no,
      description : processes[i].cooking_dc,
      imgUrl : processes[i].stre_step_image_url,
      tip : processes[i].tip,
    };
    result.push(obj);
  }
  return result;
}

// 모든 레시피들을 받아온다
module.exports.GetAllRecipes = function(){
  return http.getUrl(config.get('remote.url') + 'foodBasic/findAll', { format: 'json' });
}

// 레시피를 재료명을 이용해 받아온다
module.exports.GetRecipesByMaterials = function(ingredients){
  if(ingredients == undefined || ingredients.length == 0){
    throw fail.checkedError('There is no parameter', 'NoParameter', null);
  }
  let materials = ingredients[0];
  for(let i=1; i<ingredients.length; i++){
    materials += "," + ingredients[i];
  }
  // 현재 page와 criteria는 deprecated 되어있음.
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

// 요리과정을 레시피 아이디를 통해 받아옴
module.exports.GetProcessesByRecipeId = function(recipeId){
  // GET Request를 위한 옵션 설정
  let options = {
    query : {
      recipeId : recipeId
    },
    format: "json"
  }
  return http.getUrl(config.get('remote.url') + 'foodProcess/processSearchByRecipeId', options);
  // return db;
}

module.exports.GetSportsCalory = function(calory){
  let db = require('lib/database.js');
  let sports = db.sports;
  for(let i=0; i<sports.length; i++){
    sports[i].time = parseInt(calory / (sports[i].calorie / 60))
  }
  return sports;
}

module.exports.GetYoutubeUrl = function(word){
  let options = {
    query: {
      keyword : word
    },
    format : "json"
  };
  let result = http.getUrl(config.get('remote.url') + 'youtube/searchKeyword', options);
  return {
    keyword : word,
    url : result.url
  }
}

module.exports.searchRecipeByName = function(recipeName){
  
  let queryName = recipeName.replace(' ', '');
  
  let options = {
    query : {
      recipeName : queryName
    },
    format : "json"
  };
  return http.getUrl(config.get('remote.url') + 'foodBasic/searchByRecipeName', options);
}

module.exports.wrapIngredients = function(ingredient1, ingredient2, ingredient3, ingredient4, ingredient5){
  let result = [];
  if(ingredient1 != undefined){
    result.push(ingredient1);  
  }
  if(ingredient2 != undefined){
    result.push(ingredient2);  
  }
  if(ingredient3 != undefined){
    result.push(ingredient3);  
  }
  if(ingredient4 != undefined){
    result.push(ingredient4);  
  }
  if(ingredient5 != undefined){
    result.push(ingredient5);  
  }
  return result;
}

module.exports.getRecipeByCalories = function (boundOption) {  
  let options = {
    format : "json"
  }
  let uri = "foodBasic/";

  if(boundOption.upperBoundFlag && boundOption.lowerBoundFlag){
    uri = uri + "lessCalorie"; 
    options.query = {
      min : boundOption.lowerBound,
      max : boundOption.upperBound
    };
  }else if(boundOption.upperBoundFlag){
    uri = uri + "lessMoreCalorie"; 
    options.query = {
      max : boundOption.upperBound
    };
  }else if(boundOption.lowerBoundFlag){
    uri = uri + "moreCalorie"; 
    options.query = {
      min : boundOption.lowerBound
    };
  }
  return http.getUrl(config.get('remote.url') + uri, options);
}
