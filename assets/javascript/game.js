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
	console.log(goal);

var winsUpdate = document.getElementById("wins");
	winsUpdate.innerHTML = wins;

var lossesUpdate = document.getElementById("losses");
	lossesUpdate.innerHTML = losses;

var scoreUpdate = document.getElementById("score");
	scoreUpdate.innerHTML = score;




 // Function that updates the score...
      // function updateScore() {
      //   document.querySelector("#score").innerHTML = "Score: " + score;
      // } 

