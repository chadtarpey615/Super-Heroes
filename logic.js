const apiKey = "dccc626c7bbab4fb50200a2eecb2a4af"
const token = "3649349035133511"

var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: "../assets/venomeyes.jpg",
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

<<<<<<< Updated upstream
$.ajax({
    url: superHeroURL,
    method: "GET"
}).then(function(resp) {
console.log(resp);
})
=======
    $.ajax({
        url: superHeroURL,
        method: "GET"
    }).then(function (resp) {
        console.log(resp);
        let results = resp.results;
        
        
           // let statDiv = $("#openStats")
           let pOne = $("<p>").text("Name:" + resp.results[0].name);
    
            $("#openStats").append(pOne);


        


    })

>>>>>>> Stashed changes
}

$("#searchComic").on("click", searchComics);
$("#stats").on("click", searchStats);

