var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'homecontr'
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'aboutcontr'
        })
        .when('/signup', {
            templateUrl: 'signup.html',
            controller: 'signcontr'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contcontr'
        })
        .when('/rotd', {
            templateUrl: 'rotd.html',
            controller: 'rotdcontr'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

app.controller('MyController', function($scope, $location) {
    $scope.changePage = function(page) {
        $location.path(page);
    };
});