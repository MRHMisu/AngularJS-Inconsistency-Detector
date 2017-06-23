
    angular.module('kodigon', ['ngRoute']);
    angular.module('kodigon').config(function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'views/index.view.html',
            controller: 'indexController',
            controllerAs: 'vm'
        });

        $routeProvider.when('/about', {
            templateUrl: 'views/about.view.html',
            controller: 'aboutController',
            controllerAs: 'vm'
        });

        $routeProvider.when('/algorithm/:name', {
            templateUrl: 'views/algorithm.view.html',
            controller: 'algorithmController',
            controllerAs: 'vm'
        });

        $routeProvider.otherwise({ redirectTo: '/' });
    });
