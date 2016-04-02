angular.module('mus').directive('gallary', function () {
    return {
        template: '<div class="home_gallary" ng-transclude></div>',
        transclude: true,
        scope: {
            mus: '=mus'
        },
        link: function (scope, element, attrs) {
            var maxWidth = parseInt(window.getComputedStyle(element[0]).width); // 容器宽度
            var minHeight; // 建议高度
            var lineWidth = 0; // 当前行宽度
            var index = 0; // 当前行起始索引
            
            // 计算建议高度
            if (maxWidth < 640) {
                minHeight = 170;
            } else if (maxWidth < 960) {
                minHeight = 210;
            } else {
                minHeight = 250;
            }
            
            for (var i= 0; i < scope.mus.length; i++) {
                scope.mus[i].width = scope.mus[i].width / scope.mus[i].height * minHeight;
                scope.mus[i].height = minHeight;
                
                lineWidth += scope.mus[i].width;
                if (lineWidth > maxWidth) {
                    lineWidth -= scope.mus[i].width;
                    for (var j = index; j < i; j++) {
                        scope.mus[j].width = maxWidth / lineWidth * scope.mus[j].width;
                        scope.mus[j].height = maxWidth / lineWidth * scope.mus[j].height;
                    }
                    lineWidth = scope.mus[i].width;
                    index = i;
                }
            }
            
            scope.mus = scope.mus.slice(0, index);
        }
    };
});