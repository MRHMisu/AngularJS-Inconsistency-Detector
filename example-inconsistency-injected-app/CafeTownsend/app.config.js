angular.module('CafeTownsend',['ngRoute']);

angular.module('CafeTownsend').config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {
        templateUrl: "views/login.view.html",
        controller: "loginController",
        controllerAs: 'vm'
    });
    $routeProvider.when('/employee', {
        templateUrl: "views/employee.view.html",
        controller: "employeeController",
        controllerAs: 'vm'
    });
    $routeProvider.when('/employee/:id', {
        templateUrl: "views/employeeEdit.view.html",
        controller: "employeeEditController",
        controllerAs: 'vm'
    });
    $routeProvider.otherwise({redirectTo:'/employee'});
});