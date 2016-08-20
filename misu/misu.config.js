(function(angular)
{
    'use strict';
    angular.module('misu', ["ui.router"]);
    angular.module('misu').config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('/', {
                    url: "/",
                    templateUrl:"views/misu.view.html",
                    controller: 'misuController',
                    controllerAs:'vm'
                })
     });

})(window.angular);





