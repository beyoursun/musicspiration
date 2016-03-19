angular.module('users').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/users/mine', {
            templateUrl: '/users/views/mine.client.view.html'
        });
}]);