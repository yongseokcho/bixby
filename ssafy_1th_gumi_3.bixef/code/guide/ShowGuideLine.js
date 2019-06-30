module.exports.function = function showGuideLine (guideKeyword){
  var db = require('lib/database.js');
  return db.guides;
}
