$(document).ready(function () {
  $("button").on("click", function () {
    var starWars = $(this).attr("data-person");
    var queryURLGiphy = "https://api.giphy.com/v1/gifs/search?q=" +
      starWars + "&api_key=KqCBcYAEiBo2996GCw7pmzC3FwUjcaNw";

    $.ajax({
      url: queryURLGiphy,
      method: "GET"
    })
      .then(function (response) {
        var results = response.data;
        console.log(results);
        for (var i = 0; i < results.length; i++) {
          var starWarsNewsDiv = $("<div>");

          var title = results[i].title;
          var rating = results[i].rating;
          var embed = results[i].embed_url;


          var p = $("<p>").text("Rating: " + rating + " Title: " + title + " Embed Link: " + embed);

          var starWarsNewsImage = $("<img>");
          starWarsNewsImage.attr("src", results[i].images.original_still.url);

          starWarsNewsDiv.prepend(p);
          starWarsNewsDiv.prepend(starWarsNewsImage);

          $("#newsDiv").prepend(starWarsNewsDiv);
        }
      });
  });
  $("button").on("click", function () {
    var marvel = $(this).attr("");
    var queryURLMarvel = "https://gateway.marvel.com:443/v1/public/comics?q=" +
      marvel + "&apikey=4f82aad81edf09ddae1833aecf5099ac";

    $.ajax({
      url: queryURLMarvel,
      method: "GET"



    })
      .then(function (response) {
        var marvelResults = response.data;
        console.log(marvelResults);
        for (var i = 0; i < marvelResults.length; i++) {
          var marvelDiv = $('<div>');

          var marvelComic = marvelResults[i].comic;

          var marvelP = $('<p>').text('Comic ' + marvelComic);

          var marvelComicIMG = $('<img>');
          marvelComicIMG.attr('src', marvelResults[i].images.fixed_heught.url);

          marvelDiv.prepend(marvelP);
          marvelDiv.prepend(marvelComicIMG);

          $('#marvelDiv').prepend(marvelDiv);
        }
      });
  });

  $("gifs").on("click", function () {

    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr('data-state', "animate");
    }
    else {
      (state === "animate");
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr('data-state', "still");

    }
  });

  var newButton = $("<button>");

  $("#newCharacter").html(newButton);
  console.log(newbutton);

});
