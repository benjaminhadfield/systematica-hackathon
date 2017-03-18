var ml = require('machine_learning')

exports.train = function(Entry, callback){
  var entry = new Entry();
  console.log('looking for fields')
  entry.query("SELECT bid FROM entries WHERE symbol='AAPL' AND bid IS NOT NULL", function(err, field) {
    console.log('Rearranging data')
    field = field.map((f) => f.bid)
    if(err){

      console.log(err)
      return callback(null);

    } else {

      var x = [];
      var y = [];
      for (var i=50; i < field.length; i++){
        x.push(field.slice(i-50, i-25));
        y.push(field.slice(i-25, i));
      }

      console.log('started training')

      var classifier = new ml.LogisticRegression({
            'input' : x,
            'label' : y,
            'n_in' : 25,
            'n_out' : 25
        });

        classifier.set('log level',2);


        classifier.train({'lr' : 0.1, 'epochs' : 800});
        console.log('done')
        return callback(classifier)

    }
  })
}

exports.predict = function(values, classifier){
  return classifier.predict([values])[0];
}
