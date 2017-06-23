(function (angular) {
    'use strict';

    function constructor($route, $routeParams, $location, base64, md5, sha1, cr32, urlencode, htmlentities, sha256) {
        var vm = this;
        var algo;

        switch ($routeParams.name) {
            case 'base64':
                algo = base64;
                break;
            case 'md5':
                algo = md5;
                break;
            case 'sha1':
                algo = sha1;
                break;
            case 'cr32':
                algo = cr32;
                break;
            case 'urlencode':
                algo = urlencode;
                break;
            case 'htmlentities':
                algo = htmlentities;
                break;
            case 'sha256':
                algo = sha256;
                break;
            default:
                algo = base64;
                break;
        }

        function change(text, encoded) {
            if (encoded && !vm.readonly)
                vm.raw = algo.decode(vm.encoded);
            else
                vm.encoded = algo.encode(vm.raw);
        }
        vm.readonlyy = algo.readonly;
        vm.name = algo.name;
        vm.changee = change;
    }

    angular.module('kodigon').controller('algorithmController', constructor);
    constructor.$inject = ['$route', '$routeParams', '$location', 'base64', 'md5', 'sha1', 'cr32', 'urlencode', 'htmlentities', 'sha256'];

})(window.angular);