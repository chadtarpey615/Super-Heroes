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

// var secondGranim = new Granim({
//     element: '#canvas-image-blendings',
//     direction: 'top-bottom',
//     isPausedWhenNotInView: true,
//     image : {
//         source: "./assets/venomeyes.jpg",
//         stretchMode: ["stretch", "stretch-if-bigger"],
//         blendingMode: 'multiply'
//     },
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#29323c', '#485563'],
//                 ['#FF6B6B', '#556270'],
//                 ['#80d3fe', '#7ea0c4'],
//                 ['#f0ab51', '#eceba3']
//             ],
//             transitionSpeed: 7000
//         }
//     }
// });


