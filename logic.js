const apiKey = "3adfda20d076cfbd8b85d5400f732cac58810057"
const token = "3649349035133511"

//https://comicvine.gamespot.com/api/search/?api_key=3adfda20d076cfbd8b85d5400f732cac58810057&format=json&sort=name:asc&resources=issue&query=

function searchComics() {
   
        var queryURL = "https://comicvine.gamespot.com/api/characters/?format=json&api_key=3adfda20d076cfbd8b85d5400f732cac58810057"
    $.ajax({
        url: queryURL,
        dataType: 'jsonp',
        crossDomain: true,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}

// var superHeroURL = "https://superheroapi.com/api/" + token;

// $.ajax({
//     url: superHeroURL,
//     method: "GET"
// }).then(function(resp) {
// console.log(resp);
// })
$("#searchComic").on("click", searchComics);
$("#comic-view").on("click", searchComics);


//https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/825632581144352/search/batman