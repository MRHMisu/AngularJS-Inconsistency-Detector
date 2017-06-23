/**
 * Created by Misu Be Imp on 7/12/2016.
 */
/**
 * ******************************************************************************************************
 *   AngularJS - CafeTownsend
 * ******************************************************************************************************
 *
 * 	Copyright (c) 2011 Mindspace, LLC.
 * 	Open source under the MIT License.
 *
 */
angular.module('CafeTownsend').directive("ng:focus", function(expression, element){

    return function(element) {
        this.$watch( expression, function() {
            var el = element[0];

            el.focus();
            el.select();

        }, element);
    };
});