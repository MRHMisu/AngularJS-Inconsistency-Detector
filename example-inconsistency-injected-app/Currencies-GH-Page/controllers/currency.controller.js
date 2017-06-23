(function (angular) {
    'use strict';

    function constructor(openExchangeRates) {
		
        var vm = this;
        vm.balances = new Array();
        function inti() {

            vm.exchangeRates = openExchangeRates.getRates();
            vm.currencyLegend = openExchangeRates.getLegend();
        }


        function addBalance() {
            var newEmptyBalance = {exchangeRate: '', amount: ''};
            vm.balances.push(newEmptyBalance);
        }


        function removeBalance(index) {
            vm.balances.splice(index, 1);
        }


        function getCurrencyName(symbol) {
            if (vm.currencyLegend) {
                return vm.currencyLegend[symbol];
            } else {
                return false;
            }
        }


        function getCurrencyNameFull(symbol) {
            if (vm.currencyLegend) {
                return vm.currencyLegend[symbol] + ' (' + symbol + ')';
            } else {
                return false;
            }
        }


        function totalBalance() {

            var total = 0;

            for (var m = 0; m < vm.balances.length; m++) {
                var value = vm.convertToNumber(vm.balances[m].amount);
                var exchangeRate = vm.balances[m].exchangeRate;
                if (value != 0 && exchangeRate != '') {
                    //total = total + value;
                    total = total + vm.convertCurrencyValueToBaseValue(value, exchangeRate);
                }
            }

            return total;
        }

        function convertToNumber(value) {

            var floatNumber = parseFloat(value);

            if (floatNumber) {

                return floatNumber;

            } else {

                return 0;

            }

        }


        function roundDown(number) {

            return Math.round(number * 100) / 100;
            //return Math.round(number);

        }


        function convertCurrencyValueToBaseValue(currencyValue, exchangeRate) {

            var baseValue = currencyValue / exchangeRate;
            return baseValue;

        }


        function convertBaseValueToCurrencyValue(baseValue, exchangeRate) {
            // not in use yet
            var currencyValue = baseValue * exchangeRate;
            return currencyValue;
        }


        function ageOfExchangeRate() {

            if (vm.exchangeRates) {

                var currentTimeStamp = new Date().getTime();

                // multiplied by 1000 so that the argument is in milliseconds, not seconds
                var ageOfExchangeRate = currentTimeStamp - vm.exchangeRates.timestamp * 1000;

                var minutes = Math.round(ageOfExchangeRate / 1000 / 60);

                var formattedTime = minutes + ' minutes';

                return formattedTime;

            } else {

                return false;

            }

        }


        vm.addBalance = addBalance;
        vm.removeBalance = removeBalance;
        vm.getCurrencyName = getCurrencyName;
        vm.getCurrencyNameFull = getCurrencyNameFull;
        vm.totalBalance = totalBalance;
        vm.convertToNumber = convertToNumber;
        vm.roundDown = roundDown;
        vm.convertCurrencyValueToBaseValue = convertCurrencyValueToBaseValue;
        vm.convertBaseValueToCurrencyValue = convertBaseValueToCurrencyValue;
        vm.ageOfExchangeRate = ageOfExchangeRate;

        // populate form on load with two empty fields
        vm.addBalance();
        vm.addBalance();
        Socialite.load('social-buttons');

        inti();
    }

    constructor.$inject = ['openExchangeRates'];
    angular.module('myApp').controller('currencyController', constructor);


})(window.angular);


