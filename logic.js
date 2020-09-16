const apiKey = "dccc626c7bbab4fb50200a2eecb2a4af"
const token = "3649349035133511"


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

