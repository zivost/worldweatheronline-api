var WWO = require('../lib/index');

var client = WWO.createClient({
    key: process.env.key,
    responseType: 'json'
});

client.searchApi({
    q: "Delhi"
}, function(err, result) {
    if (!err) {
        console.log(result);
    } else {
        console.log(err);
    }
});

client.localWeatherApi({
    q: "London",
    num_of_days: "5"
}, function(err, result) {
    if (!err) {
        console.log(result);
    } else {
        console.log(err);
    }
});