// var mainApplicationModuleName = 'mean';
var mainApplicationModuleName = 'musicspiration';

// var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'users', 'example', 'articles']);
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'users', 'home']);

mainApplicationModule.config(['$locationProvider', function ($locationProvider) {
	$locationProvider.hashPrefix('!');
}]);

angular.element(document).ready(function () {
	angular.bootstrap(document, [mainApplicationModuleName]);
});