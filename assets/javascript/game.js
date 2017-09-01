// jquery document iniatlize and page load actions
$(document).ready(function() {
	console.log("Game has started")


var losses = 0;
var wins = 0;
var yourscore = 0;

// create the random number to start the game on page load (19 to 120)
var randomnumber = Math.floor(Math.random() * 100) + 19;
console.log(randomnumber);
$("#randomnum-div").text(randomnumber);



// function to assign new point values to each gem on function invocation (1 to 12 points each)
var gem1 = Math.floor(Math.random() * 12) + 1;
console.log("Gem 1 = " + gem1);

var gem2 = Math.floor(Math.random() * 12) + 1;
console.log("Gem 2 = " + gem2);

var gem3 = Math.floor(Math.random() * 12) + 1;
console.log("Gem 3 = " + gem3);

var gem4 = Math.floor(Math.random() * 12) + 1;
console.log("Gem 4 = " + gem4);



// save the points from each gem to YOUR SCORE on each gem click
$("#gemimg1").on("click", function() {
	yourscore = yourscore + gem1;
	$("#userscore").text(yourscore);
		loser();
		winner();
});

$("#gemimg2").on("click", function() {
	yourscore = yourscore + gem2;
	$("#userscore").text(yourscore);
		loser();
		winner();
});

$("#gemimg3").on("click", function() {
	yourscore = yourscore + gem3;
	$("#userscore").text(yourscore);
		loser();
		winner();
});

$("#gemimg4").on("click", function() {
	yourscore = yourscore + gem4;
	$("#userscore").text(yourscore);
		loser();
		winner();
});


// Winner function to save wins and update DOM
function winner() {
if (yourscore === randomnumber) {
	console.log("You Won");
	$("#winloseline").text("WON");
	wins++;
	$("#wins-div").text(wins);
}};


// Loser function to save losses and update DOM
function loser() {
	if (yourscore > randomnumber) {
	console.log("you lost");
	$("#winloseline").text("LOST");
	losses++;
	$("#losses-div").text(losses);
}};

//game reset function that keeps wins and losses but sets new random num and gem values


//End the document ready function
});