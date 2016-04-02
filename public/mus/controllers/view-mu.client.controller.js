angular.module('mus').controller('ViewMuController', ['$scope', '$routeParams', 'Mus', function($scope, $routeParams, Mus) {
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

    $scope.findOne = function() {
        $scope.mu = Mus.get({
            muId: $routeParams.muId
        });
    };

    $scope.updatePv = function() {
        Mus.updatePv({
            id: $routeParams.muId
        }, function(response) {
            $scope.mu.pv++;
        }, function(response) {
            console.log(response);
        });
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