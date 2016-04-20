var genQueryParams = function(query, method, credentials) {
    var params = '';
    for (var pr in query) {
        params = params + pr + '=' + query[pr] + '&';
    }
    params = params.substring(0, params.length - 1);
    return params;
}

var genWWOUrl = function(query, credentials, method) {
    var url = '';
    var key = credentials.key;
    var responseType = credentials.responseType;
    if (method === 'searchApi') {
        preUrl = 'https://api.worldweatheronline.com/premium/v1/search.ashx?key=' + key + '&format=' + responseType + '?';
        url = preUrl + genQueryParams(query, method, credentials);
    } else if (method === 'localWeatherApi') {
        preUrl = 'https://api.worldweatheronline.com/premium/v1/weather.ashx?key=' + key + '&format=' + responseType + '?';
        url = preUrl + genQueryParams(query, method, credentials);
    }
    return url;
}

exports.genWWOUrl = genWWOUrl;