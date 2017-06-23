(function(angular) {
    'use strict';

    function constructor(session, delegate, $location) {
        var vm = this;
        vm.employees = delegate.loadAll();
        vm.selected = delegate.selected;

        function addNew() {
            vm.edit(delegate.create());
        }

        function remove(employee) {
            if (angular.isUndefined(employee)) return;
            vm.employees = delegate.terminate(employee);
            vm.selected = (delegate.selected = null);
        }

        function select(employee) {
            vm.selected = (delegate.selected = employee);
        }

        function edit(employee) {
            if (angular.isUndefined(employee)) return;

            vm.select(employee);
            $location.path('/employee/' + employee.id);
        }

        vm.addNew = addNew;
        vm.remove = remove;
        vm.select = select;
        vm.edit = edit;

    }

    constructor.$inject = ['sessionService', 'employeeService', '$location'];
    angular.module('CafeTownsend').controller('EmployeeController', constructor);

})(windows.angular);