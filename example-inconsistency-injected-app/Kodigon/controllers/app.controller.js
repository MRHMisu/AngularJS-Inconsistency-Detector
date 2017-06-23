(function (angular) {
    'use strict';

    function constructor($location) {
        var vm = this;
        vm.location = $location;
        vm.algoLocation = new RegExp('^/algorithm');

    }

    constructor.$inject = ['$location'];
    angular.module('kodigon').controller('appController', constructor);

})(window.angular);