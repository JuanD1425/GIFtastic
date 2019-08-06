//declare all variable=, arrays, and base of urls needed
var q = ["dogs","cats","koalas","kangaroos","platypus","dolphins","beavers","sloths"];
var arrayTop = q.sort();
var p = []
var arrayFav = p.sort();
var gifURL = "api.giphy.com/v1/gifs/search"
var searchItem = "";
var arrayGIF = [];

//create a fubction to dynamically generate buttons onload and later onclick
function genBtn (array) {  
    console.log(array)
    
for (var i = 0 ; i < array.length; i++){
        var a = $("<button>");
        a.addClass("btn btn-outline-dark d-flex");
        a.attr("id", array[i]);
        a.text(array[i]);
        $("#buttonsTop").append(a);
  }}

//create function to get gif images
function getGIF (g) {
    queryURL = "https://" + gifURL + "?q=" + g + "&api_key=9cffWlLXjvUWb7DaljmLk3QqZl7IvTQN&limit=10"
    
   $.ajax({
        url: queryURL,
        method: "GET"
       }).done(function(response) {
    
    console.log(response);
    var c = $("<div>");
       c.addClass("container d-flex flex-wrap justify-content-center all");
       c.addClass(g);
       
for (var o = 0; o < response["data"].length; o++){
 //have web page onload get all images for button slaready on page and the hide them   
    var b = $("<div>")
    var p = $("<p>");
    var y = $("<img>");
    b.addClass("thumbnail all " + g + o + " " + g)
    p.text("rating : " + response.data[o].rating)
    p.addClass(g + " all");
    y.attr("src", response.data[o].images.fixed_width.url)
    y.addClass(g + " all");
    b.append(p);
    b.append(y);
    c.append(b);
    }
       $("body").append(c);
   } );
}
genBtn(arrayTop);
// genBtn(arrayFav)

for (var i = 0; i < arrayTop.length; i++) {
    var id = "#" + arrayTop[i];
    searchItem = $(id).text();
    console.log(searchItem)
    getGIF(searchItem)
   
}

$(".btn").on("click", function() {
    event.preventDefault();
    $(".all").hide()
    console.log($(this))
    var st = $(this).text();
    var classy = "." + st
    $(classy).show()
    $(classy).children().show()
    console.log(classy)
    
    
})
    
