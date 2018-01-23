// alert("Welcome to Crystal Collector!");
// alert("Click crystals to add to your Score.");
// alert("The value of each crystal changes from game to game. It's a surprise!");
// alert("Don't let your Score exceed your Goal!");
// alert("Goooood Luck!!!");


// Variables
var targetScore = 0
var wins = 0;
var losses = 0;
var score = 0;
// var crystals = ["#chrysone", "#chrystwo", "#chrysthree", "#chrysfour"];

    function resetGame() {
    	$('#score').text('');
	  $('#crysone').attr('data-score', Math.floor(Math.random() * 11) + 2);
	  $('#crystwo').attr('data-score', Math.floor(Math.random() * 11) + 2);
	  $('#crysthree').attr('data-score', Math.floor(Math.random() * 11) + 2);
	  $('#crysfour').attr('data-score', Math.floor(Math.random() * 11) + 2);
	  score = 0;
	  targetScore = Math.floor(Math.random() * 111) + 19
	  $("#goal").text(targetScore);
    }

	$('.crystal').on('click', function(){
		// console.log($(this).attr('data-score'));
		// console.log(targetScore)

		score += parseInt($(this).attr('data-score'));
		$('#score').text(score)

		if (score === targetScore){
			wins++;
			alert("You Winnin'")
			resetGame();
		} else if (score > targetScore) {
			losses++;
			alert("You Losin'");
			resetGame();
		}
	})

	resetGame();
// var chrysValue = 
// var goal = genGoal()

// function genGoal() {
// 	return Math.floor((Math.random() * 111) + 19);
// 	console.log(genGoal);
// }


// var goalUpdate = document.getElementById("goal");
// 	goalUpdate.innerHTML = goal;

// var winsUpdate = document.getElementById("wins");
// 	winsUpdate.innerHTML = wins;

// var lossesUpdate = document.getElementById("losses");
// 	lossesUpdate.innerHTML = losses;

// var scoreUpdate = document.getElementById("score");
// 	scoreUpdate.innerHTML = score;


//Create an variables for images

// function addScore()	{

// }

// //This goes in reset!
// function gameReset() {

// //Re-generate random value to crystals
// 		goal = genGoal;
		
// //Crystals as buttons assigned a random number between 1-12
// 	function crystalReset()	{
// 		var crystalBtn = $(".crystal");
// 		var randomValue = Math.floor(Math.random() * 11) + 1;
// 		crystalBtn.addClass("value");
// 		crystalBtn.attr("data-value", randomValue);
// 		console.log(randomValue);
// 		}

// 	// function recordReset()

// 	// function scoreReset()
// }



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
// initialize gameReset();
