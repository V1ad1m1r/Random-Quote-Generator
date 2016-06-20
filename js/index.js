var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var newJson = {};
$("#button").on("click", function() {
  $.getJSON(url, function(json) {
    $(".quote").text(json.quoteText);

    if (json.quoteAuthor == "") {
      json.quoteAuthor = "Unknown";
    }
    $(".author").text("-" + json.quoteAuthor);
    newJson = json;

  });

});

$(document).ready(function() {
  $.getJSON(url, function(json) {
    $(".quote").text(json.quoteText);

    if (json.quoteAuthor == "") {
      json.quoteAuthor = "Unknown";
    }
    $(".author").text("-" + json.quoteAuthor);
    newJson = json;

  });

});

$(".social").on("click", function() {

  window.open("https://twitter.com/intent/tweet?text=" + newJson.quoteText + " -" + newJson.quoteAuthor);

});