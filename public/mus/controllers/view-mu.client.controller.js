angular.module('mus').controller('ViewMuController', ['$scope', '$routeParams', 'Authentication', 'Mus', function($scope, $routeParams, Authentication, Mus) {
    $scope.authentication = Authentication; // 登录相关
    
    // mu
    $scope.player = {};
    $scope.player.playing = false;
    $scope.player.audio = document.getElementById('mu-audio');
    $scope.player.toggle = function() {
        $scope.player.playing = !$scope.player.playing;
        if ($scope.player.playing) {
            $scope.player.audio.play();
        } else {
            $scope.player.audio.pause();
        }
    };

    // 作者
    $scope.author = {};
    $scope.author.scrolling = false;

    /**
     * @func findOne
     * @desc 获取当前音乐
     */
    $scope.findOne = function() {
        Mus.get({
            muId: $routeParams.muId
        }, function(response) {
            $scope.mu = response;
            $scope.updatePv();
            if ($scope.authentication.user && $scope.mu.like.indexOf($scope.authentication.user._id) >= 0) {
                $scope.mu.liked = true;
            } else {
                $scope.mu.liked = false;
            }
        });
    };

    /**
     * @func updatePv
     * @desc pv统计
     */
    $scope.updatePv = function() {
        Mus.updatePv({
            id: $routeParams.muId
        }, function(response) {
            $scope.mu.pv++;
        }, function(response) {
            console.log(response);
        });
    };

    /**
     * @func toggleLike
     * @desc 切换采集状态
     */
    $scope.toggleLike = function() {
        if ($scope.authentication.user) {
            Mus.updateLike({
                id: $routeParams.muId
            }, function(response) {
                console.log(response);
            }, function(response) {
                console.log(response);
            });
        } else {
            if (confirm('采集需要登录')) {
                location.href = '/signin';
            }
        }
    };

    // 滚动时作者栏样式变更
    angular.element(document).on('scroll', function(e) {
        if (document.body.scrollTop > 0) {
            $scope.$apply(function() {
                $scope.author.scrolling = true;
            });
        } else {
            $scope.$apply(function() {
                $scope.author.scrolling = false;
            });
        }
    });
}]);