const apiKey = "3adfda20d076cfbd8b85d5400f732cac58810057"




function searchComics() {

        var queryURL = "https://comicvine.gamespot.com/api/search/?api_key=3adfda20d076cfbd8b85d5400f732cac58810057&format=json&sort=name:asc&resources=issue&query="
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
}


$("#searchComic").on("click", searchComics);