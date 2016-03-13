angular.module('mu').controller('MuController', ['$scope', function ($scope) {
    $scope.mus = [
        {
            src: '/img/demo/quotposequot-by-zach-allia-photo-px-1457272204gk84n@518x345.jpg'
        },
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
    
    for (var i = 0; i < $scope.mus.length; i++) {
        var size = $scope.mus[i].src.split('@')[1].match(/[1-9]\d*/g);
        $scope.mus[i].width = size[0];
        $scope.mus[i].height = size[1];
    }
}]);