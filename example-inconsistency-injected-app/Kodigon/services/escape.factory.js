(function () {
    'use strict';

    angular
        .module('kodigon')
        .service('escape', constructor);
        
    constructor.$inject = ['$window'];
    function constructor($window) {

        var name;
        var readonly;

        function init() {
            name = 'Escape';
            readonly = false;

        }

        function encode(input) {
            return $window.encodeURI(input);
        }

        function decode(input) {
            return $window.decodeURI(input);
        }

        init();
        this.encode = encode;
        this.decode = decode;
    }
})(window.angular);
