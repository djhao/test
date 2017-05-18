/**
 * Created by deng on 2017/5/18.
 */
'use strict';
angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.state('main',{
        url:'/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'

    });
    $urlRouterProvider.otherwise('main');
}])
