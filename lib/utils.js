var genQueryParams = function(query) {
    var params = '';
    for (var pr in query) {
        if (pr !== "") {
            params = params + pr + '=' + query[pr] + '&';
        }
    }
    params = params.substring(0, params.length - 1);
    return params;
}

var genUrlEP = function(method) {
    var ep = '';
    var avlMethods = {
        searchApi: 'search',
        localWeatherApi: 'weather',
        timeZoneApi: 'tz',
        skiWeatherApi: 'ski',
        marineWeatherApi: 'marine',
        historicalWeatherApi: 'past-weather'
    }
    ep = avlMethods[method] + ".ashx";
    return ep;
}

var genMidUrl = function(subscription) {
    var subs = '';
    var avlSubscriptions = {
        free: '/free/v2/',
        premium: '/premium/v1/'
    }
    subs = avlSubscriptions[subscription];
    return subs;
}


var genWWOUrl = function(query, credentials, method) {
    var url = '';
    var key = credentials.key;
    var subscription = credentials.subscription;
    var format = credentials.responseType;
    var lang = credentials.locale.toLowerCase();
    preUrl = 'https://api.worldweatheronline.com' + genMidUrl(subscription) + genUrlEP(method) + '?key=' + key + '&format=' + format + '&lang=' + lang + '&';
    url = preUrl + genQueryParams(query);
    return url;
}

exports.genWWOUrl = genWWOUrl;