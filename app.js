$(document).ready(function () {


  $("button").on("click", function () {
    var starWars = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      starWars + "&api_key=KqCBcYAEiBo2996GCw7pmzC3FwUjcaNw";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        var results = response.data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
          var starWarsDiv = $("<div>");

          var title = results[i].title;
          var rating = results[i].rating;
          var embed = results[i].embed_url;


          var p = $("<p>").text("Rating: " + rating + " Title: " + title + " Embed Link: " + embed);

          var starWarsImage = $("<img>");
          starWarsImage.attr("src", results[i].images.fixed_height.url);

          starWarsDiv.prepend(p);
          starWarsDiv.prepend(starWarsImage);

          $("#gifsDiv").prepend(starWarsDiv);
        }
      });
  });

}); 