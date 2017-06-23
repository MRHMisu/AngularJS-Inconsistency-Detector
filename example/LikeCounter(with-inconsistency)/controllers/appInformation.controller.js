(function () {
    'use strict';
    function constructor() {
        var vm = this;
        vm.author ="Misu";
		vm.shortDescription ="An application that counts users likes/hits.";
    }
    constructor.$inject =[];
    angular.module('likecounter').
		controller('appInformationController',constructor);
})();