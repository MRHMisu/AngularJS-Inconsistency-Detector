(function(){
    'use strict';
    function constructor( sessionService, $location ) {
        var vm = this;
        vm.authenticateUser = function() {
            var user = sessionService.session();

            if ((user.userName != "") && (user.password == "angular"))
            {
                user.authenticated = true;
                $location.path('/employee');
            }
        };
    }
    constructor.$inject = [ 'sessionService', '$location' ];
    angular.module('CafeTownsend').controller('LoginController',constructor);

})();



