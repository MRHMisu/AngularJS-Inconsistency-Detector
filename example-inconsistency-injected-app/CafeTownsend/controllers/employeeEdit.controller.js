(function (angular) {
    'use strict';
    function constructor(delegate, $routeParams, $location) {
        var vm = this;
        if (angular.isDefined($routeParams.id)) {
            delegate.selected = delegate.findByID($routeParams.id);
        }

        vm.employee = angular.copy(delegate.selected, {});
        vm.isEditing = vm.employee.isNew || false;
        function save() {
            if (vm.employee != null) {
                angular.copy(vm.employee, delegate.selected);
            }
            if (delegate.selected != null) {
                delete delegate.selected.isNew;

                delegate.save(delegate.selected);
            }
            $location.path('/employee');
        };
        function cancel() {
            if (vm.isEditing) {
                delegate.terminate(vm.employee.id);
                delegate.selected = null;

                vm.employee = null;
            }
            $location.path('/employee');
        };
        function remove() {
            delegate.terminate(vm.employee.id);
            delegate.selected = null;
            vm.employee = null;
            $location.path('/employee');
        };

        vm.save = save;
        vm.cancel = cancel;
        vm.remove = remove;
    }

    constructor.$inject = ['employeeService', '$routeParams', '$location'];
    angular.module('CafeTownsend').controller('EmployeeEditController', constructor);
})(window.angular);


