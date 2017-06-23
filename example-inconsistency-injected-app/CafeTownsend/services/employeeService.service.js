/**
 * Created by Misu Be Imp on 7/12/2016.
 */
/**
 * Employees CRUD Service:
 *
 * Get list of all employees and current/selected employee
 */
angular.module('CafeTownsend').service('employeeService', constructor);
constructor.$inject = ['$http', '$log'];
function constructor($http, $log) {
    $log.log('initializing Employee services...');

    // Create new employee record
    // NOTE: Here we define the properties of an `employee`
    function createEmployee() {
        // Use the uuid::v1() to create time-based random UUID
        var employee = {
            id: uuid.v1(),
            firstName: "",
            lastName: "",
            email: "",
            startDate: '01/09/2012',
            isNew: true
        };

        employees.push(employee);

        return employee;
    }

    // Load all known employees
    function loadEmployees() {

        if (angular.isUndefined(employees)) {
            employees = [];

            // Asynchronous GET for members.json
            /*$http.get('GET', 'data/members.json', function (statusCode, members) {
             employees = members;
             });*/
            $http({
                method: 'GET',
                url: 'data/members.json',
                dataType: "json"
            }).then(function successCallback(response) {
                employees = response.data;
            });

        }
        return employees;
    }


// Simulate save functionality...
    function saveEmployee(target) {

        if (angular.isDefined(target)) {
            // noop;
        }
        return target;
    }

// Remove record by id (if found); return updated employees
    function deleteEmployee(target) {
        var id = angular.isString(target) ? target : target['id'],
            buffer = [];

        angular.forEach(employees, function (employee, key) {
            if (employee.id != id) {
                buffer.push(employee);
            }
        });

        return (employees = buffer);
    }

// Select employee by ID
    function findEmployee(id) {
        var found = null;

        angular.forEach(employees, function (employee, key) {
            if (employee.id == id) {
                found = employee;
            }
        });

        return found;
    }

// Auto-load employees
    var employees = loadEmployees();

// Expose service CRUD functions
    return {
        selected: null,
        findByID: function (id) {
            return findEmployee(id);
        },
        loadAll: function () {
            return loadEmployees();
        },
        save: function (who) {
            return saveEmployee(who);
        },
        create: function () {
            return createEmployee();
        },
        terminate: function (who) {
            return deleteEmployee(who);
        }
    };

}