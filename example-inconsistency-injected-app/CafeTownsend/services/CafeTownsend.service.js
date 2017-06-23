/**
 * Created by Misu Be Imp on 7/12/2016.
 */
/**
 *  CafeTownsend initialization service
 *
 *  App service which is responsible for the main configuration of the app.
 *  Here routes are configured and session authentication is checked for all route changes.
 *
 *  http://docs.angularjs.org/#!angular.service
 *
 */
angular.module('CafeTownsend').service('CafeTownsend', constructor);

constructor.$inject = ['sessionService', '$route', '$location', '$window', '$log'];
function constructor(sessionService, $route, $location, $window, $log) {
    $log.log('initializing CafeTownsend routes...');

    var root = this;    // root scope

    // Configure session model (for authentication) as root/parent scope for scopes created on route change.
    $route.parent(root.$new(CafeTownsend.Controllers.SessionController));

    // Configure template rendering based on routes
    $route.when('/login', {template: 'data/partials/login.view.html', controller: CafeTownsend.Controllers.LoginController});
    $route.when('/employee', {
        template: 'data/partials/employee.view.html',
        controller: CafeTownsend.Controllers.EmployeeController
    });
    $route.when('/employee/:id', {
        template: 'data/partials/employeeEdit.view.html',
        controller: CafeTownsend.Controllers.EmployeeEditController
    });
    $route.otherwise({redirectTo: '/employee'});

    // Now listen for `#afterRouteChange` events
    root.$on('$afterRouteChange', function (current, previous) {

        var user = sessionService.session();
        var authenticated = ( user && user.authenticated );
        var view = authenticated ? $location.path() : "";

        // @TODO: use regular expression to match `/employee` or `/employee/<uuid>` paths only

        if (view.indexOf("/employee") > -1) {
            // Either `/employee` or `/employee/<uuid>` is requested
            $window.scrollTo(0, 0);

        } else {

            // Must login before other views are available.
            $location.path(authenticated ? '/employee' : '/login');
        }

    });

}

