
// Variables
var targetScore = 0;
var wins = 0;
var losses = 0;
var score = 0;

//Places a zero next to wins and losses in the record box.
$("#wins").text("0");
$("#losses").text("0");

//Reset all the values in the game.
    function resetGame() {

//Reset the score to zero.
    	score = 0;
    	$("#score").text("0");

//Generates new random values for the crystals.
	  	$("#crysone").attr("data-score", Math.floor((Math.random() * 11) + 2));
	  	$("#crystwo").attr("data-score", Math.floor((Math.random() * 11) + 3));
	  	$("#crysthree").attr("data-score", Math.floor((Math.random() * 11) + 2));
	  	$("#crysfour").attr("data-score", Math.floor((Math.random() * 11) + 3));

//Generates new random value for the goal score.
	  	targetScore = Math.floor((Math.random() * 101) + 19);
	  	$("#goal").text(targetScore);
    };

//Adds the value of the clicked crystal to the score
	$(".crystal").on('click', function(){
		score += parseInt($(this).attr("data-score"));
		$('#score').text(score);

//Sets up the win scenario, adds to win total and triggers reset when goal is matched by score
		if (score === targetScore){
			wins++;
			$("#wins").text(wins);
			alert("Yaay! You won!");
			resetGame();

//Sets up the lose scenario, adds to losses total and triggers reset when score increases past goal
		} else if (score > targetScore) {
			losses++;
			$("#losses").text(losses);
			alert("Sorry! Better luck next time!");
			resetGame();
		}
		console.log(score);
	})
//Calls on the reset function.
	resetGame();



