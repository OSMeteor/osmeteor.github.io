define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('CarouselDemoCtrl', function ($scope) {
        $scope.myInterval = 5000;
        var slides = $scope.slides = [{}];
        var slides = $scope.slides =  [
            {"image":"http://placekitten.com/602/300","text":"Extra Kittys","active":false},
            {"image":"http://placekitten.com/603/300","text":"Lots of Felines","active":false},
            {"image":"http://placekitten.com/604/300","text":"Surplus Cutes","active":false},
            {"image":"http://placekitten.com/605/300","text":"More Cats","active":true}];
        $scope.addSlide = function() {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: 'http://placekitten.com/' + newWidth + '/300',
                text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
            });
        };
        //for (var i=0; i<4; i++) {
        //    $scope.addSlide();
        //}
    });
});
