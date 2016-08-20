(function (angular) {
    'use strict';
    function constructor() {
        var serviceMessage;
        function inti()
        {
            serviceMessage="This is from service message";
        }
        function getMessageFromService()
        {
            return serviceMessage;

        }

        inti();
        this.getMessageFromService=getMessageFromService;
    }
    constructor.$inject = [];
    angular.module('misu').service('misuService',constructor);
})(window.angular);