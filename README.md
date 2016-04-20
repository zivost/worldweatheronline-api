<<<<<<< HEAD
# worldweatheronline-api
[![NPM version](https://badge.fury.io/js/snapdeal-affiliate-client.svg)](https://www.npmjs.com/package/snapdeal-affiliate-client) 
[![Build Status](https://travis-ci.org/nigharsh/snapdeal-affiliate-client.svg?branch=master)](https://travis-ci.org/nigharsh/snapdeal-affiliate-client)

[![NPM](https://nodei.co/npm/snapdeal-affiliate-client.png?mini=true)](https://nodei.co/npm/snapdeal-affiliate-client/)

un-official client for [World Weather Online's API](http://developer.worldweatheronline.com/api/)

## Installation
Install using npm:
```sh
npm install worldweatheronline-api --save
```

## Usage
Require library
```javascript
var wwo = require('worldweatheronline-api');
```
Create client
```javascript
var client = WWO.createClient({
  // key: process.env.key,
  key: '<YOUR-KEY>',
  responseType: 'json'
});
```
## Examples
examples based on usage
#### Search Query based on Locations
```javascript
client.searchApi({
  q : "Delhi"
}, function(err, result){
    if(err) throw err;
    
});
```
#### Search Local Weather
```javascript
client.localWeatherApi({
  q : "London",
  num_of_days : "5"
}, function(err, result){
    if(err) throw err;
});
```

