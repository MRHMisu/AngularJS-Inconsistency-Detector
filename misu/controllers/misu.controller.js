(function (angular) {
    'use strict';
    function constructor(misuService,misuFactory) {
        var vm = this;

        function init() {
            vm.messages = "Hello World";
            vm.serviceMessage=misuService.getMessageFromService();
            vm.factoryMessage=misuFactory.getMessageFromFactory();
        }

        function changeText() {

            vm.messages = "Welcome to the World";
        }

        init();
        vm.changeText = changeText;

    }
    constructor.$inject = ['misuService','misuFactory'];
    angular.module('misu').controller('misuController', constructor);
})(window.angular);