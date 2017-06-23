(function (angular) {
    'use strict';


    function constructor($window) {
        var name;
        var readonly;

        function init() {
            name = 'HTML Entities';
            readonly = false;

        }


        function encode(input) {
            return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

        }

        function decode(input) {
            return input.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
        }

        init();
        this.encode = encode;
        this.decode = decode;

    }
    constructor.$inject = ['$window'];
    angular.module('kodigon').service('htmlentities', constructor);


})(window.angular);
