module.exports = function(connection){
  var Entry = connection.extend({tableName:'entries'});
  return Entry;
}
