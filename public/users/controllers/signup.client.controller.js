angular.module('users').controller('SignupController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.submit = function () {
        if ($scope.password == $scope.confirm_password) {
            $http.post('/signup', {
                username: $scope.username,
                email: $scope.email,
                password: $scope.password
            }).success(function (response) {
                console.log(response);
                if (response.success) {
                    location.href = '/';
                } else {
                    alert(response.error);
                }
            });
        } else {
            alert('两次输入密码不一致');
        }
    };
}]);