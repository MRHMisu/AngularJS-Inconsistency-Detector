(function(angular) {
'use strict';

    function constructor(algorithms) {
        var vm = this;
        vm.algorithms=algorithms.list;
    }
    constructor.$inject = ['algorithms'];
    
    angular.module('kodigon').controller('indexController', constructor);
})(window.angular);