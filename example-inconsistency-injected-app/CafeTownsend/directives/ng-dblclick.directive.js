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
angular.module('CafeTownsend').directive("ng:dblclick", function(expression, element){
    return function(element){
        var scope = this;

        element.bind('dblclick', function(event) {

            scope.$apply(expression);
            event.stopImmediatePropagation();

            return false;

        });
    };
});