/**
 * Created by deng on 2017/5/18.
 */
'use strict';
angular.module('app').directive('appHead',[function () {
    return{
        restrict:'A',//以属性调用
        replace:true,
        templateUrl:'view/template/head.html'
    }
}])