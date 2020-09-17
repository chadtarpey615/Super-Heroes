const apiKey = "dccc626c7bbab4fb50200a2eecb2a4af"
const token = "3649349035133511"
let hero = $("#hero-search").val()


function searchComics(inputHero) {
    var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name=" + inputHero + "&apikey=dccc626c7bbab4fb50200a2eecb2a4af"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
}

function searchStats(inputHero) {

    var superHeroURL = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3649349035133511/search/" + inputHero;


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



    })

}

$("#searchComic").on("click", function() {

    let hero = $("#hero-search").val()
    searchComics(hero);

});




$("#stats").on("click", function(){

    let hero = $("#hero-search").val()
    searchStats(hero);

});

