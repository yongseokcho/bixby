module.exports.function = function showGuideLine (guideKeyword, searchKeyword){
  var db = require('lib/database.js');
  return db.guides;
}
