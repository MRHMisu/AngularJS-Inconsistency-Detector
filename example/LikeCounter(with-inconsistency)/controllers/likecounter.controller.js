(function () {
    'use strict';
    function constructor() {
        var vm = this;
        vm.appTitle ="Like Counter";
        vm.count="0";
        vm.people=[{name:"Misu"},{name:"Rakib"}];

function getCount()
	{ vm.count=vm.count+1;
		return vm.count;
	}
vm.getCount=getCount;
    }

	
    constructor.$inject =[];
    angular.module('likecounter').controller('likecounterController',constructor);
})();
