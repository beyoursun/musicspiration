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

angular.module(mainApplicationModuleName).controller('appController', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.headerSm = false; // 头部变小
    $scope.opHidden = true;
    
    // 全局播放器
    $scope.player = {};
    $scope.player.audio = document.getElementById('main-audio');
    $scope.player.playing = false;
    $scope.player.mu = null;
    $scope.player.toggle = function (mu) {
        if (mu) {
            if (mu == $scope.player.mu) {
                $scope.player.playing = !$scope.player.playing;
            } else {
                $scope.player.mu = mu;
                $scope.player.playing = true;
            }
        } else {
            $scope.player.playing = false;
        }
        
        if ($scope.player.playing) {
            var audio = new Audio();
            audio.src = $scope.player.mu.music;
            audio.onloadedmetadata = function () {
                $scope.player.audio.play();
            };
        } else {
            $scope.player.audio.pause();
        }
    };
    
    // 绑定滚动事件
    angular.element(document).on('scroll', function (e) {
        if (document.body.scrollTop > 0) {
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