'use strict';

angular.module('lifeStacks', ['ngRoute']);
angular.module('lifeStacks').config(function ($routeProvider) {

    $routeProvider.when('/stack/:stack', {
        templateUrl: 'views/stack.view.html',
        controller: 'stackController',
        controllerAs: 'vm'
    });
    $routeProvider.when('/editStack/:stack', {
        templateUrl: 'views/editStack.view.html',
        controller: 'stackController',
        controllerAs: 'vm'
    });
    $routeProvider.otherwise({redirectTo: '/stack/'});
});