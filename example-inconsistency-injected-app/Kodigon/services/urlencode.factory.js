(function (angular) {
    'use strict';


    function constructor($window) {

        var name;
        var readonly;
    
        function encode(input) {
            return $window.encodeURIComponent(input);
        }

    
        function decode(input) {
            return $window.decodeURIComponent(input);
        }
        function init() {
            name = 'URL Encode';
            readonly = false;

        }

        init();
        this.decode = decode;
        this.encode = encode;

    }

    constructor.$inject = ['$window'];
    angular.module('kodigon').service('urlencode', constructor);


})(window.angular);
