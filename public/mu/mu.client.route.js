angular.module('mu').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/mus', {
            templateUrl: '/mu/view/mu-list.client.view.html'
        })
        .when('/mus/:muId', {
            templateUrl: '/mu/view/mu-view.client.view.html'
        })
        .otherwise({
            redirectTo: '/mus'
        });
}]);