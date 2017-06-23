(function(){
    'use strict';
    function constructor (sessionService, $location, $route) {
        var vm = this;
        vm.user = sessionService.session();

        vm.logoutUser = function (event) {
            sessionService.logout();
            $location.path("/login");
        };
    }
    constructor.$inject = ['sessionService', '$location', '$route'];
    angular.module('CafeTownsend').controller('SessionController',constructor);
})();




