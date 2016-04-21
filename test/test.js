var WWO = require('../lib/index');

var client = WWO.createClient({
    key: '9d378416be224717b92172807162004',
    responseType: 'json',
    subscription: 'premium',
    locale: 'EN'
});

describe('API requests', function() {
    describe('searchApi', function() {
        it('response should not return an error', function(done) {
            client.searchApi({
                q: "Delhi"
            }, function(err, result) {
                if (err) throw err;
                if (result) done();
            });
        });
    });
    describe('localWeatherApi', function() {
        it('response should not return an error', function(done) {
            this.timeout(60000);
            client.localWeatherApi({
                q: "London",
                num_of_days: "1"
            }, function(err, result) {
                if (err) throw err;
                if (result) done();
            });
        });
    });
    describe('timeZoneApi', function() {
        it('response should not return an error', function(done) {
            this.timeout(60000);
            client.timeZoneApi({
                q: "208021"
            }, function(err, result) {
                if (err) throw err;
                if (result) done();
            });
        });
    });
    describe('skiWeatherApi', function() {
        it('response should not return an error', function(done) {
            this.timeout(60000);
            client.skiWeatherApi({
                q: "London",
                num_of_days: "2"
            }, function(err, result) {
                if (err) throw err;
                if (result) done();
            });
        });
    });
    describe('marineWeatherApi', function() {
        it('response should not return an error', function(done) {
            this.timeout(60000);
            client.marineWeatherApi({
                q: "48.834,2.394"
            }, function(err, result) {
                if (err) throw err;
                if (result) done();
            });
        });
    });
    describe('historicalWeatherApi', function() {
        it('response should not return an error', function(done) {
            this.timeout(60000);
            client.historicalWeatherApi({
                q: "London",
                date: "1995-05-02"
            }, function(err, result) {
                if (err) throw err;
                if (result) done();
            });
        });
    });
});