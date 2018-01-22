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

var winsUpdate = document.getElementById("wins");
	winsUpdate.innerHTML = wins;

var lossesUpdate = document.getElementById("losses");
	lossesUpdate.innerHTML = losses;

var scoreUpdate = document.getElementById("score");
	scoreUpdate.innerHTML = score;

//Crystals as buttons assigned a random number between 1-12
//Create an variables for images
function getValue() {
	var crystalBtn = $(".crystal");
	var randomValue = Math.floor(Math.random() * 11) + 1;
	crystalBtn.addClass("value");
	crystalBtn.attr("data-value", randomValue);
	console.log(randomValue);
}



//Create a for loop to assign a random value to each crystal

// for (var i = 0; i < 4; i++) {
// 	var crystalBtn = $("<img>");
// 	crystalBtn.addClass("crystal");
// 	crystalBtn.attr("src", "image[i]");
// 	crystalBtn.attr("data-crystal-value", 
// 	console.log(crystalBtn);
// }






 // Function that updates the score...
      // function updateScore() {
      //   document.querySelector("#score").innerHTML = "Score: " + score;
      // } 

