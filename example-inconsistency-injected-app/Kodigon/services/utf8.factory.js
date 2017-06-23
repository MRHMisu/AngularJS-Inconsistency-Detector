(function (angular) {
    'use strict';


    function constructor() {
        function encode(input) {

            if (input === null || typeof input === "undefined") {
                return "";
            }

            var input = (input + '');
            var utftext = '',
                start, end, stringl = 0;

            start = end = 0;
            stringl = input.length;
            for (var n = 0; n < stringl; n++) {
                var c1 = input.charCodeAt(n);
                var enc = null;

                if (c1 < 128) {
                    end++;
                } else if (c1 > 127 && c1 < 2048) {
                    enc = String.fromCharCode((c1 >> 6) | 192, (c1 & 63) | 128);
                } else {
                    enc = String.fromCharCode((c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128);
                }
                if (enc !== null) {
                    if (end > start) {
                        utftext += input.slice(start, end);
                    }
                    utftext += enc;
                    start = end = n + 1;
                }
            }

            if (end > start) {
                utftext += input.slice(start, stringl);
            }

            return utftext;
        }

        this.encode = encode;
    }

    constructor.$inject = [];
    angular.module('kodigon').service('utf8', constructor);

})(window.angular);