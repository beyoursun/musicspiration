// var mainApplicationModuleName = 'mean';
var mainApplicationModuleName = 'musicspiration';

// var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'users', 'example', 'articles']);
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'users', 'mu']);

mainApplicationModule.config(['$locationProvider', function ($locationProvider) {
	$locationProvider.hashPrefix('!');
}]);

angular.element(document).ready(function () {
	angular.bootstrap(document, [mainApplicationModuleName]);
});

angular.module(mainApplicationModuleName).controller('appController', ['$scope', function ($scope) {
    $scope.headerSm = false; // 头部变小
    $scope.opHidden = true;
    
    angular.element(document).on('scroll', function (e) {
        console.log(document.body.scrollTop);
        if (document.body.scrollTop >= 100) {
            $scope.$apply(function () {
                $scope.headerSm = true;
            });
        } else {
            $scope.$apply(function () {
                $scope.headerSm = false;
            });
        }
        
        if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight - 100) {
            $scope.$apply(function () {
                $scope.opHidden = false;
            });
        } else {
            $scope.$apply(function () {
                $scope.opHidden = true;
            });
        }
    });
}]);