(function () {
    'use strict';
    function constructor() {
        var vm = this;
        vm.appTitle ="Like Counter";
        vm.count="0";
        vm.people=[{name:"Misu"},{name:"Rakib"}];
    }
    constructor.$inject =[];
    angular.module('likecounter').controller('likecounterController',constructor);
})();