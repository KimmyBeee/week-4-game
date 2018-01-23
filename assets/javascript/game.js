// alert("Welcome to Crystal Collector!");
// alert("Click crystals to add to your Score.");
// alert("The value of each crystal changes from game to game. It's a surprise!");
// alert("Don't let your Score exceed your Goal!");
// alert("Goooood Luck!!!");


// Variables
var targetScore = 0;
var wins = 0;
var losses = 0;
var score = 0;

$("#wins").text("0");
$("#losses").text("0");

//Reset all the values in the game.
    function resetGame() {
    	score = 0;
    	$('#score').text("0");
	  	$('#crysone').attr("data-score", Math.floor((Math.random() * 11) + 2));
	  	$('#crystwo').attr("data-score", Math.floor((Math.random() * 11) + 2));
	  	$('#crysthree').attr("data-score", Math.floor((Math.random() * 11) + 2));
	  	$('#crysfour').attr('data-score', Math.floor((Math.random() * 11) + 2));

	  	targetScore = Math.floor((Math.random() * 101) + 19);
	  	$("#goal").text(targetScore);
    };

	$('.crystal').on('click', function(){
		score += parseInt($(this).attr('data-score'));
		$('#score').text(score)

		if (score === targetScore){
			wins++;
			$("#wins").text(wins);
			alert("You Winnin'")
			resetGame();
		} else if (score > targetScore) {
			losses++;
			$("#losses").text(losses);
			alert("You Losin'");
			resetGame();
		}
		console.log(score);
	})

	resetGame();

