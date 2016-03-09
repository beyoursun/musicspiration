angular.module('home').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/home/home.client.view.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);