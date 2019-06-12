var http = require('http')
var config = require('config')

// 전체 요리 데이터베이스에서 검색
module.exports.function = function BeginRecipeSearch (ingredients) {

  var db = http.getUrl(config.get('remote.url') + '/findAllFood_basic', { format: 'json' });

  return {
    ingredients : ingredients,
    recipeBasicStructures : db.recipes,
    layoutType : 'LARGE'
  }
}
