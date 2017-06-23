(function (angular) {
    'use strict';

    function constructor($window) {

        var name;
        var readonly;

        function init() {
            name = 'Base64';
            readonly = false;

        }
        function encode(input) {
            return $window.btoa(input);
        }

        function decode(input) {
            return $window.atob(input);
        }

        
        init();
        this.encode = encode;
        this.decode = decode;
    }




    constructor.$inject = ['$window'];
    angular.module('kodigon').service('base64', constructor);

})(window.angular);