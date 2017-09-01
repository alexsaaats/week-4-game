// jquery document iniatlize
$(document).ready(function() {
	console.log("Game has started")

// create the random number to start the game on page load (19 to 120)
var randomnumber = null;

var randomnumber = Math.floor(Math.random() * 100) + 19;
console.log(randomnumber);
$("#randomnum-div").text(randomnumber);


// assign new point values to each gem on page load (1 to 12 points each)
var gem1 = Math.floor(Math.random() * 12) + 1;
console.log("Gem 1 = " + gem1);

var gem2 = Math.floor(Math.random() * 12) + 1;
console.log("Gem 2 = " + gem2);

var gem3 = Math.floor(Math.random() * 12) + 1;
console.log("Gem 3 = " + gem3);

var gem4 = Math.floor(Math.random() * 12) + 1;
console.log("Gem 4 = " + gem4);


// save the points from each gem to YOUR SCORE on each gem click
var yourscore = 0;

$("#gemimg1").on("click", function() {
	var newscore = yourscore + gem1;
	$("#userscore").text(newscore);
})


// save a win if you match the random number

// save a loss if your number goes over


//End the document ready function
});