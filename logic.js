const apiKey = "dccc626c7bbab4fb50200a2eecb2a4af"
const token = "3649349035133511"
let hero = $("#hero-search").val()

searchComics("spider-man");
function searchComics(inputHero) {
    var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name=" + inputHero + "&apikey=dccc626c7bbab4fb50200a2eecb2a4af"

    var superHeroURL = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3649349035133511/search/" + inputHero;

    var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + inputHero + "&api_key=ylOh5EkXUQkSxMIfVASfxguYWOW2lyPl&limit=10"

    var movieUrl = " https://www.omdbapi.com/?t=" + inputHero + "&apikey=86e6eaa8"

   // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        $(".description").empty();
        $(".Comics").empty()



        let name = $("<h4>").text(response.data.results[0].name)
        let newLine = $("<h2>").text(response.data.results[0].description)
        $(".description").append(name, newLine);

        for(var k = 17; k < response.data.results[0].comics.items.length; k++) {
            let comics = $("<p>").text(response.data.results[0].comics.items[k].name)
            $(".Comics").append(comics)
        }
       console.log( response.data.results[0].comics.items.length)

    })

    $.ajax({
        url: superHeroURL,
        method: "GET"
    }).then(function (resp) {
        console.log(resp);
        console.log(resp.results[1].image.url )

       // let results = resp.results;
       // $(".Stats").empty()
        $(".Images").empty()
        $(".stats-input").empty();

        //let header = $("<header>").text("Your SuperHero Stats");
        let title1 = $("<th>").text("Attribute");
        let title2 = $("<th>").text("Value");
        let height = $("<tr>").text("Height").append($("<td>").text(resp.results[0].appearance.height));
        let weight = $("<tr>").text("Weight").append($("<td>").text(resp.results[0].appearance.weight));


        let stat1 = $("<tr>").text("Combat").append($("<td>").text(resp.results[0].powerstats.combat));
        let stat2 = $("<tr>").text("Durability").append($("<td>").text(resp.results[0].powerstats.durability));
        let stat3 = $("<tr>").text("Intelligence").append($("<td>").text(resp.results[0].powerstats.intelligence));
        let stat4 = $("<tr>").text("Power").append($("<td>").text(resp.results[0].powerstats.power));
        let stat5 = $("<tr>").text("Speed").append($("<td>").text(resp.results[0].powerstats.speed));
        let stat6 = $("<tr>").text("Strength").append($("<td>").text(resp.results[0].powerstats.strength));

        // let stat1 = $("<td>").text("Combat: " + resp.results[0].powerstats.combat)
        // let stat2 = $("<td>").text("Durability: " + resp.results[0].powerstats.durability)
        // let stat3 = $("<td>").text("Intelligence: " + resp.results[0].powerstats.intelligence)
        // let stat4 = $("<td>").text("Power: " + resp.results[0].powerstats.power)
        // let stat5 = $("<td>").text("Speed: " + resp.results[0].powerstats.speed)
        // let stat6 = $("<td>").text("Strength: " + resp.results[0].powerstats.strength)
        
        //$(".Stats").append(header)
        $(".stats-input").append(title1, title2);
        $(".stats-input").append(stat1, stat2,stat3,stat4,stat5,stat6, height, weight);


      //  for (var i = 0; i < resp.results.length; i++){
            let newImage = $("<img>").attr( "src",  resp.results[0].image.url );
           $(".description").append(newImage)
        //}

       

        


    })


    $.ajax({
        url: giphyURL,
        method: "GET"
    }).then(function (resp1) {
        console.log(resp1);
        $(".giphy").empty();

        for(var g = 7; g <  resp1.data.length; g++){
        let newGif = $("<img>").attr("src", resp1.data[g].images.original.url)
        $(".giphy").append(newGif);
        }

    })

    $.ajax({
        url: movieUrl,
        method: "GET"
    }).then(function (response2) {
        console.log(response2);

    })
}






$("#searchButton").on("click", function() {

    let hero = $("#hero-search").val()
    searchComics(hero);

});
