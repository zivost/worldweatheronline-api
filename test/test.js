var WWO = require('../lib/index');

var client = WWO.createClient({
  // key: process.env.key,
  key: '9d378416be224717b92172807162004',
  responseType: 'json'
});

describe('API requests',function(){
  describe('searchApi',function(){
    it('response should not return an error', function(done){
      client.searchApi({
        q : "Delhi"
      }, function(err, result){
          if(err) throw err;
          done();
      });
    });
  });
  describe('localWeatherApi',function(){
    it('response should not return an error', function(done){
      client.localWeatherApi({
        q : "London",
        num_of_days : "5"
      }, function(err, result){
          if(err) throw err;
          done();
      });
    });
  });  
});
