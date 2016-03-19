angular.module('users').controller('UsersController', ['$scope', function ($scope) {
    var color = ['#00bb9c', '#11cd6e', '#56abe4', '#9d55b8', '#33475f', '#f4c600', '#ea8010', '#eb4f38'];
    
    // 当前页
    $scope.type = 1;
    $scope.toType = function (type) {
        $scope.type = type;
    };
    
    // 当前用户
    $scope.user = {};
    $scope.user.avatar = {};
    $scope.user.avatar.color = color[Math.round(Math.random() * 7)];
    
    // 采集
    $scope.caiji = [
        {
            src: '/img/demo/srbm-wheels-boutique-amazingcars-14572701204ngk8@199x345.jpg'
        },
        {
            src: '/img/demo/ravenwhimsys-wonderful-world-ponderation-godly-peaks-road-lake-tekapo-by-145726368648kgn@230x345.jpg'
        },
        {
            src: '/img/demo/lostworldcave-145726291548kng@287x345.jpg'
        },
        {
            src: '/img/demo/antman-peyton-reed-returns-to-the-edgar-wright-case-and-reveals-new-images-comicsblogfr-1457761068g4kn8@259x345.jpg'
        },
        {
            src: '/img/demo/craft-beer-christmas-gift-on-packaging-of-the-world-creative-package-design-gallery-14577186628k4ng@517x345.jpg'
        },
        {
            src: '/img/demo/la-antigua-tostadera-del-sur-on-packaging-of-the-world-creative-package-design-galle-1457719881gnk84@483x345.jpg'
        },
        {
            src: '/img/demo/we-are-vanity-1457758990nk8g4@230x345.jpg'
        },
        {
            src: '/img/demo/P_000@192x288.jpg'
        },
        {
            src: '/img/demo/P_001@192x288.jpg'
        },
        {
            src: '/img/demo/P_002@192x288.jpg'
        },
        {
            src: '/img/demo/P_003@192x129.jpg'
        },
        {
            src: '/img/demo/P_004@192x284.jpg'
        },
        {
            src: '/img/demo/P_005.@192x253.jpg'
        },
        {
            src: '/img/demo/P_006@192x245.jpg'
        },
        {
            src: '/img/demo/P_007@192x343.jpg'
        },
        {
            src: '/img/demo/P_008@192x238.jpg'
        },
        {
            src: '/img/demo/P_009@192x159.jpg'
        },
        {
            src: '/img/demo/P_010@192x289.jpg'
        }
    ];
    
    // 发表
    $scope.fabiao = [
        {
            src: '/img/demo/quotposequot-by-zach-allia-photo-px-1457272204gk84n@518x345.jpg'
        },
        {
            src: '/img/demo/ravenwhimsys-wonderful-world-ponderation-godly-peaks-road-lake-tekapo-by-145726368648kgn@230x345.jpg'
        },
        {
            src: '/img/demo/lostworldcave-145726291548kng@287x345.jpg'
        },
        {
            src: '/img/demo/antman-peyton-reed-returns-to-the-edgar-wright-case-and-reveals-new-images-comicsblogfr-1457761068g4kn8@259x345.jpg'
        },
        {
            src: '/img/demo/craft-beer-christmas-gift-on-packaging-of-the-world-creative-package-design-gallery-14577186628k4ng@517x345.jpg'
        },
        {
            src: '/img/demo/la-antigua-tostadera-del-sur-on-packaging-of-the-world-creative-package-design-galle-1457719881gnk84@483x345.jpg'
        },
        {
            src: '/img/demo/we-are-vanity-1457758990nk8g4@230x345.jpg'
        },
        {
            src: '/img/demo/P_000@192x288.jpg'
        },
        {
            src: '/img/demo/P_001@192x288.jpg'
        },
        {
            src: '/img/demo/P_002@192x288.jpg'
        },
        {
            src: '/img/demo/P_003@192x129.jpg'
        },
        {
            src: '/img/demo/P_004@192x284.jpg'
        },
        {
            src: '/img/demo/P_005.@192x253.jpg'
        },
        {
            src: '/img/demo/P_006@192x245.jpg'
        },
        {
            src: '/img/demo/P_007@192x343.jpg'
        },
        {
            src: '/img/demo/P_008@192x238.jpg'
        },
        {
            src: '/img/demo/P_009@192x159.jpg'
        },
        {
            src: '/img/demo/P_010@192x289.jpg'
        }
    ];
    
    for (var i = 0; i < $scope.caiji.length; i++) {
        var size = $scope.caiji[i].src.split('@')[1].match(/[1-9]\d*/g);
        $scope.caiji[i].width = size[0];
        $scope.caiji[i].height = size[1];
    }
    
    for (var i = 0; i < $scope.fabiao.length; i++) {
        var size = $scope.fabiao[i].src.split('@')[1].match(/[1-9]\d*/g);
        $scope.fabiao[i].width = size[0];
        $scope.fabiao[i].height = size[1];
    }
    
    // 关注
    $scope.follows = [
        {
            nickname: 'a_test_user',
            created_at: '2016/3/17 22:56',
            like: 100,
            fan: 100,
            color: color[Math.round(Math.random() * 7)],
            followed: true
        },
        {
            nickname: 'b_test_user',
            created_at: '2016/3/17 22:56',
            like: 200,
            fan: 200,
            color: color[Math.round(Math.random() * 7)],
            followed: true
        },
        {
            nickname: 'c_test_user',
            created_at: '2016/3/17 22:56',
            like: 300,
            fan: 300,
            color: color[Math.round(Math.random() * 7)],
            followed: false
        },
        {
            nickname: 'd_test_user',
            created_at: '2016/3/17 22:56',
            like: 400,
            fan: 400,
            color: color[Math.round(Math.random() * 7)],
            followed: true
        },
        {
            nickname: 'e_test_user',
            created_at: '2016/3/17 22:56',
            like: 500,
            fan: 500,
            color: color[Math.round(Math.random() * 7)],
            followed: true
        }
    ];
    
    // 关注
    $scope.fans = [
        {
            nickname: 'a_test_user',
            created_at: '2016/3/17 22:56',
            like: 100,
            fan: 100,
            color: color[Math.round(Math.random() * 7)],
            followed: true
        },
        {
            nickname: 'b_test_user',
            created_at: '2016/3/17 22:56',
            like: 200,
            fan: 200,
            color: color[Math.round(Math.random() * 7)],
            followed: false
        },
        {
            nickname: 'c_test_user',
            created_at: '2016/3/17 22:56',
            like: 300,
            fan: 300,
            color: color[Math.round(Math.random() * 7)],
            followed: false
        },
        {
            nickname: 'd_test_user',
            created_at: '2016/3/17 22:56',
            like: 400,
            fan: 400,
            color: color[Math.round(Math.random() * 7)],
            followed: true
        },
        {
            nickname: 'e_test_user',
            created_at: '2016/3/17 22:56',
            like: 500,
            fan: 500,
            color: color[Math.round(Math.random() * 7)],
            followed: true
        }
    ];
}]);