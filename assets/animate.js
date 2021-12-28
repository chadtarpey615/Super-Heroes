var firstGranim = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: "./assets/venomeyes.jpg",
        stretchMode: ["stretch", "stretch-if-bigger"],
        blendingMode: 'multiply'
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 7000
        }
    }
});


$(function () {
    var $image = $('#slideshow').children('img');
    $image.css('top','0px');
    function animate_img() {
        if ($image.css('top') == '0px') {
            $image.animate({top: '-1000px'}, 5000, function () {
                animate_img();
            });
        } else {
            $image.animate({top: '0px'}, 5000, function () {
                animate_img();
            });
        }
    }
    animate_img();
});