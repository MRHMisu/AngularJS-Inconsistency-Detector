(function (angular) {
    'use strict';
    function constructor($http, $q) {

        var apiUrl ="BASEURL";

        // GET: api/XXXs
        function getXXXs() {
            var deferred = $q.defer();
            var req = {
                method: 'GET',
                url:apiUrl,
            }
            $http(req).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject();
            });
            return deferred.promise;
        }

        // GET: api/Users/5
        function getXXX(id) {
            var deferred = $q.defer();
            var user = $http({
                method: 'GET',
                url: apiUrl,
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

        // POST: api/XXXs
        function postXXX(userData) {
            var deferred = $q.defer();
            var req = {
                method: 'POST',
                url:apiUrl,
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

        // PUT: api/XXXs/5
        function putXXXX(user) {
            var deferred = $q.defer();
            debugger;
            var req = {
                method: 'PUT',
                url:apiUrl,
                params: {
                    id: user.id
                },
                data: user,
                dataType: "json"
            }
            $http(req).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject();
            });
            return deferred.promise;
        };

        // DELETE: api/XXXs/5
        function deleteXXX(id) {
            var deferred = $q.defer();
            var req = {
                method: 'DELETE',
                url:apiUrl,
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

        this.getXXXs = getXXXs;
        this.getXXX = getXXX;
        this.postXXX = postXXX;
        this.putXXX = putXXX
        this.deleteXXX = deleteXXX;

    }

    constructor.$inject = ['$http', '$q'];
    angular.module('moduelName').service('serviceName', constructor);
})(window.angular);