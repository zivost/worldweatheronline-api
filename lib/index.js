var request = require('request'),
    utils = require('./utils');

var runWWOQuery = function(credentials, method) {
    return function(query, cb) {
        var url = utils.genWWOUrl(query, credentials, method);
        if (typeof cb === 'function') {
            request.get({
                'url': url
            }, function(err, response, body) {
                if (err) {
                    cb(err);
                } else if (!response) {
                    cb("No response recieved (check internet connection)");
                } else {
                    switch (response.statusCode) {
                        case 400:
                            cb("Error: Bad request. Invalid input parameters");
                            break;
                        case 401:
                            cb("Error: Unauthorized key");
                            break;
                        case 403:
                            cb("Error: Forbidden. Tampered URL");
                            break;
                        case 404:
                            cb("Error: Not found");
                            break;
                        case 410:
                            cb("Error: URL expired");
                            break;
                        case 500:
                            cb("Error: Internal server error[probably too quick requests]");
                            break;
                        case 503:
                            cb("Error: Service unavailable");
                            break;
                        case 599:
                            cb("Error: Connection timed out");
                            break;
                        case 200:
                            cb(null, body);
                            break;
                        default:
                            cb(response);
                            break;
                    }
                }
            });
        }
    }
}

var createClient = function(credentials) {
    return {
        searchApi: runWWOQuery(credentials, 'searchApi'),
        localWeatherApi: runWWOQuery(credentials, 'localWeatherApi'),
        timeZoneApi: runWWOQuery(credentials, 'timeZoneApi'),
        skiWeatherApi: runWWOQuery(credentials, 'skiWeatherApi'),
        marineWeatherApi: runWWOQuery(credentials, 'marineWeatherApi'),
        historicalWeatherApi: runWWOQuery(credentials, 'historicalWeatherApi')
    };
};

exports.createClient = createClient;