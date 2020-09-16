const apiKey = "dccc626c7bbab4fb50200a2eecb2a4af"
const token = "3649349035133511"

var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: "../assets/venom.jpeg",
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
function searchComics() {
   
        var queryURL = "https://gateway.marvel.com:443/v1/public/characters?apikey=dccc626c7bbab4fb50200a2eecb2a4af"
        
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}

function searchStats() {

var superHeroURL = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3649349035133511/search/batman";

$.ajax({
    url: superHeroURL,
    method: "GET"
}).then(function(resp) {
console.log(resp);
})
}

$("#searchComic").on("click", searchComics);
$("#stats").on("click", searchStats);

var html = document.querySelector('html');
html.style.backgroundImage = "../assets/venom.jpeg";
html.style.backgroundSize = 'cover';