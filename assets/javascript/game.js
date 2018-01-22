// alert("Welcome to Crystal Collector!");
// alert("Click crystals to add to your Score.");
// alert("The value of each crystal changes from game to game. It's a surprise!");
// alert("Don't let your Score exceed your Goal!");
// alert("Goooood Luck!!!");


// Variables
var wins = 0;
var losses = 0;
var score = 0;
var goal = Math.floor((Math.random() * 111) + 19);

var goalUpdate = document.getElementById("goal");
	goalUpdate.innerHTML = goal;
	// console.log(goal);

var winsUpdate = document.getElementById("wins");
	winsUpdate.innerHTML = wins;

var lossesUpdate = document.getElementById("losses");
	lossesUpdate.innerHTML = losses;

var scoreUpdate = document.getElementById("score");
	scoreUpdate.innerHTML = score;

//Crystals as buttons assigned a random number between 1-12




//Create a for loop to assign a random value to each crystal

for (var i = 0; i < 4; i++) {
	var crystalBtn = $("<img>");
	crystalBtn.addClass("crystal crystal-img crystal-value");
	crystalBtn.attr("data-crystal-value", Math.floor(Math.random() * 11) + 1);
	crystalBtn.attr("data-crystal-img", )
}


$(".crystal-button").on("click", function() {


// 	crysImg1.attr('data-value', crysValue1);
// 	console.log(crysImg1);

// crysImg1.attr("data-number", crysValue1);


// $("#crysone").on("click", function(){
// 	score = score + $(this).attr("data-number");
// });







 // Function that updates the score...
      // function updateScore() {
      //   document.querySelector("#score").innerHTML = "Score: " + score;
      // } 

