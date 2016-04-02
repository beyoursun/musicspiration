// mu创建控制器
angular.module('mus').controller('CreateMuController', ['$scope', '$location', 'Mus', function ($scope, $location, Mus) {
    $scope.type = 'vedio';
    
    // 上传封面
    $scope.uploadCover = function (e) {
        $scope.$apply(function () {
            $scope.cover = e.target.files[0];
            $scope.coverURL = URL.createObjectURL($scope.cover);
        });
    };
    
    // 上传音乐，视频
    $scope.uploadSrc = function (e) {
        var file = e.target.files[0];
        $scope.$apply(function () {
            if (file.type.match(/mp4/)) {
                $scope.type = 'vedio';
            } else if (file.type.match(/mp3/)) {
                $scope.type = 'audio';
            }
            $scope.src = file;
        });
    };
    
    // 创建mu
    $scope.create = function () {
        var mu = new Mus({
            title: this.title,
            cover: this.cover,
            type: this.type,
            src: this.src,
            tag: this.tag,
            from: this.from
        });
        
        mu.$save(function (response) {
            $location.path('mus/' + response._id);
        }, function (errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    };
}]);