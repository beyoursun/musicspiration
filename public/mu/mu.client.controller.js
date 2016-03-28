angular.module('mu').controller('MuController', ['$scope', function ($scope) {
    // mu
    $scope.mu = {};
    $scope.mu.src = '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3';
    $scope.mu.playing = false;
    $scope.mu.audio = document.getElementById('mu-audio');
    $scope.mu.toggle = function () {
        $scope.mu.playing = !$scope.mu.playing;
        if ($scope.mu.playing) {
            $scope.mu.audio.play();
        } else {
            $scope.mu.audio.pause();
        }
    };
    
    // 作者
    $scope.author = {};
    $scope.author.scrolling = false;
    
    // 采集
    $scope.mus = [
        {
            id: 0,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again',
            src: '/img/demo/quotposequot-by-zach-allia-photo-px-1457272204gk84n@518x345.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 1,
            title: 'Maroon 5 - Sugar',
            src: '/img/demo/srbm-wheels-boutique-amazingcars-14572701204ngk8@199x345.jpg',
            playing: false,
            music: '/music/Maroon 5 - Sugar.mp3'
        },
        {
            id: 2,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 3',
            src: '/img/demo/ravenwhimsys-wonderful-world-ponderation-godly-peaks-road-lake-tekapo-by-145726368648kgn@230x345.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 3,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 4',
            src: '/img/demo/lostworldcave-145726291548kng@287x345.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 4,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 5',
            src: '/img/demo/antman-peyton-reed-returns-to-the-edgar-wright-case-and-reveals-new-images-comicsblogfr-1457761068g4kn8@259x345.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 5,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 6',
            src: '/img/demo/craft-beer-christmas-gift-on-packaging-of-the-world-creative-package-design-gallery-14577186628k4ng@517x345.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 6,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 7',
            src: '/img/demo/la-antigua-tostadera-del-sur-on-packaging-of-the-world-creative-package-design-galle-1457719881gnk84@483x345.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 7,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 8',
            src: '/img/demo/we-are-vanity-1457758990nk8g4@230x345.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 8,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 9',
            src: '/img/demo/P_000@192x288.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 9,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 10',
            src: '/img/demo/P_001@192x288.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 10,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 11',
            src: '/img/demo/P_002@192x288.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 11,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 12',
            src: '/img/demo/P_003@192x129.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 12,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 13',
            src: '/img/demo/P_004@192x284.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 13,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 14',
            src: '/img/demo/P_005.@192x253.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 14,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 15',
            src: '/img/demo/P_006@192x245.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 15,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 16',
            src: '/img/demo/P_007@192x343.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 16,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 17',
            src: '/img/demo/P_008@192x238.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 17,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 18',
            src: '/img/demo/P_009@192x159.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 18,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 19',
            src: '/img/demo/P_010@192x289.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 19,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 20',
            src: '/img/demo/quotposequot-by-zach-allia-photo-px-1457272204gk84n@518x345.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 20,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 21',
            src: '/img/demo/srbm-wheels-boutique-amazingcars-14572701204ngk8@199x345.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        },
        {
            id: 21,
            title: '朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again 22',
            src: '/img/demo/ravenwhimsys-wonderful-world-ponderation-godly-peaks-road-lake-tekapo-by-145726368648kgn@230x345.jpg',
            playing: false,
            music: '/music/朴灿烈,吴世勋,D.O. - DJ Got Us Falling In Love Again.mp3'
        }
    ];
    
    // 切换状态
    // $scope.mus.toggle = function (mu) {
    //     for (var i in $scope.mus) {
    //         if ($scope.mus[i] == mu) {
    //             $scope.mus[i].playing = !$scope.mus[i].playing;
    //         } else {
    //             $scope.mus[i].playing = false;
    //         }
    //         console.log($scope.mus[i]);
    //     }
    // };
    
    for (var i = 0; i < $scope.mus.length; i++) {
        var size = $scope.mus[i].src.split('@')[1].match(/[1-9]\d*/g);
        $scope.mus[i].width = size[0];
        $scope.mus[i].height = size[1];
    }
    
    // 滚动时作者栏样式变更
    angular.element(document).on('scroll', function (e) {
        if (document.body.scrollTop > 0) {
            $scope.$apply(function () {
                $scope.author.scrolling = true;
            });
        } else {
            $scope.$apply(function () {
                $scope.author.scrolling = false;
            });
        }
    });
    
    // 回到顶部
    $scope.goTop = function () {
        document.body.scrollTop = 0;
    };
}]);

// mu创建控制器
angular.module('mu').controller('MuCreateController', ['$scope', 'Mus', function ($scope, Mus) {
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
            src: this.src,
            tags: this.tags.split('#'),
            from: this.from
        });
        
        mu.$save();
    };
}]);

angular.module('mu').config(['$compileProvider', function ($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|blob):/);
}]);