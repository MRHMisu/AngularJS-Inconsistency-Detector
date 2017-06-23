'use strict';
/* Services */
//This Service provides game objects
function constructor($resource) {
    return $resource('http://openexchangerates.org/:path', {
        callback: 'JSON_CALLBACK',
        app_id: '5c2dba0f887544a4b196eeaa8a3052f4'
    }, {
        getRates: {method: 'JSONP', params: {path: 'latest.json'}},
        getLegend: {method: 'JSONP', params: {path: 'currencies.json'}}
    });
}

constructor.$inject = ['$resource'];
angular.module('myApp').factory('openExchangeRates', constructor);










