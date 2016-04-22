# worldweatheronline-api
[![npm version](https://badge.fury.io/js/worldweatheronline-api.svg)](https://badge.fury.io/js/worldweatheronline-api)
[![Build Status](https://travis-ci.org/Rohithzr/worldweatheronline-api.svg?branch=master)](https://travis-ci.org/Rohithzr/worldweatheronline-api)
[![Coverage Status](https://coveralls.io/repos/github/Rohithzr/worldweatheronline-api/badge.svg?branch=master)](https://coveralls.io/github/Rohithzr/worldweatheronline-api?branch=master)
[![Baikal](https://baikal.io/badges/Rohithzr/worldweatheronline-api)](https://baikal.io/Rohithzr/worldweatheronline-api)

[![NPM](https://nodei.co/npm/worldweatheronline-api.png)](https://nodei.co/npm/worldweatheronline-api/)

un-official client for [WorldWeatherOnline's Weather,Local Weather,Time Zone, Marine, Ski and Historical Weather APIs](http://developer.worldweatheronline.com/api/)

## Installation
Install using npm:
```sh
npm install worldweatheronline-api --save
```

## Usage
Require library
```javascript
var WWO = require('worldweatheronline-api');
```
Create client
```javascript
var client = WWO.createClient({
    key: process.env.wwo_key,
    responseType: 'json',
    subscription: 'premium',
    locale: 'EN'
});
```
#### Methods
Methods available are: 

1. Search API (searchApi)
2. Local Weather API (localWeatherApi)
3. Time Zone API (tizeZoneApi)
4. Ski Weather API (skiWeatherApi)
5. Marine Weather API (marineWeatherApi)
6. Historical Weather API (historicalWeatherApi)
 
The examples of all APIs are given below

#### Params
Params as seen at [WorldWeatherOnline's API Docs](http://developer.worldweatheronline.com/api/) can be passed directly as an object to each of the available functions.

## Examples
examples based on usage
#### Search API
```javascript
client.searchApi({
    q: "Delhi"
}, function(err, result) {
    if (!err) {
        console.log(result);
    } else {
        console.log(err);
    }
});
```
#### Local Weather API
```javascript
client.localWeatherApi({
    q: "London",
    num_of_days: "3"
}, function(err, result) {
    if (!err) {
        console.log(result);
    } else {
        console.log(err);
    }
});
```
#### Time Zone API
```javascript
client.timeZoneApi({
    q: "208021"
}, function(err, result) {
    if (!err) {
        console.log(result);
    } else {
        console.log(err);
    }
});
```
#### Ski Weather API
```javascript
client.skiWeatherApi({
    q: "London",
    num_of_days: "2"
}, function(err, result) {
    if (!err) {
        console.log(result);
    } else {
        console.log(err);
    }
});
```
#### Marine Weather API
```javascript
client.marineWeatherApi({
    q: "48.834,2.394"
}, function(err, result) {
    if (!err) {
        console.log(result);
    } else {
        console.log(err);
    }
});
```
#### Historical Weather API
```javascript
client.historicalWeatherApi({
    q: "Delhi",
    date: "1995-05-02"
}, function(err, result) {
    if (!err) {
        console.log(result);
    } else {
        console.log(err);
    }
});
```

