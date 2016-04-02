angular.module('mus').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/mus', {
            templateUrl: '/mus/views/list-mu.client.view.html'
        })
        .when('/mus/create', {
            templateUrl: '/mus/views/create-mu.client.view.html'
        })
        .when('/mus/:muId', {
            templateUrl: '/mus/views/view-mu.client.view.html'
        })
        .otherwise({
            redirectTo: '/mus'
        });
}]);