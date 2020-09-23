const apiKey = "dccc626c7bbab4fb50200a2eecb2a4af"
const token = "3649349035133511"
let hero = $("#hero-search").val()


searchComics("batman");
function searchComics(inputHero) {

    var superHeroURL = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3649349035133511/search/" + inputHero;

    var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + inputHero + "&api_key=ylOh5EkXUQkSxMIfVASfxguYWOW2lyPl&limit=10"

    var movieUrl = " https://www.omdbapi.com/?t=" + inputHero + "&apikey=86e6eaa8"


 
        

    
    $.ajax({
        url: superHeroURL,
        method: "GET"
    }).then(function (resp) {
        console.log(resp);

      
        $(".Images").empty()
        $(".stats-input").empty();
        $(".description").empty();


      
        let name = $("<h4>").text(resp.results[0].name)
        
        let title1 = $("<th>").text("Power Stats");

        let height; 

        if(resp.results[0].appearance.height[0] !== "-") {
            height =  $("<tr>").text("Height").append($("<td>").text(resp.results[0].appearance.height[0]));

        } else {
            height = $("<tr>").text("Height").append($("<td>").text(resp.results[1].appearance.height[0]));
          
        }
        
           let weight; 
           
           if(resp.results[0].appearance.weight[0] !== "- lb") {
            weight =  $("<tr>").text("Height").append($("<td>").text(resp.results[0].appearance.weight[0]));
            
        } else {
            weight = $("<tr>").text("Height").append($("<td>").text(resp.results[1].appearance.weight[0]));
          
        }


        let race = $("<tr>").text("Race").append($("<td>").text(resp.results[0].appearance.race));
        

        let fullName  = $("<tr>").text("Full-Name").append($("<td>").text(resp.results[0].biography["full-name"]))

        

         $(".description").append(name);

        let stat1 = $("<tr>").text("Combat").append($("<td>").text(resp.results[0].powerstats.combat));
        let stat2 = $("<tr>").text("Durability").append($("<td>").text(resp.results[0].powerstats.durability));
        let stat3 = $("<tr>").text("Intelligence").append($("<td>").text(resp.results[0].powerstats.intelligence));
        let stat4 = $("<tr>").text("Power").append($("<td>").text(resp.results[0].powerstats.power));
        let stat5 = $("<tr>").text("Speed").append($("<td>").text(resp.results[0].powerstats.speed));
        let stat6 = $("<tr>").text("Strength").append($("<td>").text(resp.results[0].powerstats.strength));

  
           
        
        $(".stats-input").append(title1);
        $(".stats-input").append(fullName, race, stat1, stat2,stat3,stat4,stat5,stat6, height, weight);

         $("#stats").show();


        let newImage;

           if (resp.results[1] !== undefined) {
             newImage = $("<img>").attr( "src",  resp.results[1].image.url);

           } else if(resp.results[0] !== undefined) {
              newImage = $("<img>").attr( "src",  resp.results[0].image.url);

           }else {
              newImage = $("<img>").attr( "src",  "assets/spidey.jpeg");

           }
            $(".description").append(newImage);


            $("#description").show()



    })


    $.ajax({
        url: giphyURL,
        method: "GET"
    }).then(function (resp1) {
        //console.log(resp1);
        $(".giphy").empty();

        for(var g = 7; g <  resp1.data.length; g++){
        let newGif = $("<img>").attr("src", resp1.data[g].images.original.url)
        $(".giphy").append(newGif);
    $("#giphy").show();

        }

    })

    $.ajax({
        url: movieUrl,
        method: "GET"
    }).then(function (response2) {
        //console.log(response2);


        $(".movies").empty();
        let poster = $("<img>").attr("src", response2.Poster);

        let movieTitle = $("<h5>").text("Movie: " + response2.Title);
        let year = $("<h5>").text("Released Year: " + response2.Year);
        let rated = $("<h5>").text("Rated: " + response2.Rated);
        let rank = $("<h5>").text("IMDB Rating: " + response2.imdbRating);



        $(".movies").append(poster, movieTitle, year, rated, rank);

        $("#openMovies").show();


    })

   
}






$("#searchButton").on("click", function() {

    let hero;
    if($("#hero-search").val() === "spiderman") {
        hero = "spider-man";
    } else {
       hero =  $("#hero-search").val()

    }
    searchComics(hero);
    $("#stats").hide();
    $("#description").hide()
    $("#giphy").hide();
    $("#openMovies").hide();


});


