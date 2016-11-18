(function (angular) {
    'use strict';
    function constructor($http, $q) {

        var apiUrl = 'http://localhost:10379/api/Users';

        // GET: api/Users
        function getUsers() {
            var deferred = $q.defer();
            var req = {
                method: 'GET',
                url: 'http://localhost:10379/api/Users',
            }
            $http(req).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject();
            });
            return deferred.promise;
        }

        // GET: api/Users/5
        function getUser(id) {
            var deferred = $q.defer();
            var user = $http({
                method: 'GET',
                url: 'http://localhost:10379/api/Users',
                params: {
                    id: id
                }
            }).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject();
            });
            return deferred.promise;
        };

        // POST: api/Users
        function postUser(userData) {
            var deferred = $q.defer();
            var req = {
                method: 'POST',
                url: 'http://localhost:10379/api/Users',
                data: userData,
                dataType: "json"
            }
            $http(req).then(function successCallback(response) {

                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject();
            });
            return deferred.promise;
        };

        // PUT: api/Users/5
        function putUser(userData) {
            var deferred = $q.defer();
            debugger;
            var req = {
                method: 'PUT',
                url: 'http://localhost:10379/api/Users',
                params: {
                    id: userData.Email
                },
                data: userData,
                dataType: "json"
            }
            $http(req).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject();
            });
            return deferred.promise;
        };

        // DELETE: api/Users/5
        function deleteUser(id) {
            var deferred = $q.defer();
            var req = {
                method: 'DELETE',
                url: 'http://localhost:10379/api/Users',
                params: {
                    id: id
                }
            }
            $http(req).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject();
            });
            return deferred.promise;
        };

        this.getUsers = getUsers;
        this.getUser = getUser;
        this.postUser = postUser;
        this.putUser = putUser
        this.deleteUser = deleteUser;

    }

    constructor.$inject = ['$http', '$q'];
    angular.module('moduelName').service('serviceName', constructor);
})(window.angular);