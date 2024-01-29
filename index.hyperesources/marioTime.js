function getMario() {
	window.numberOfQuestions = 	10;
	window.currentSlide = 		0;
	window.currentScore = 		0;
	window.title = 				"SUPER MARIO TRIVIA";
	window.questions = [		"Which of these non-Marios doesn’t have a game series?", 
								"Who is Bowser’s kid?",
								"Which of these is not a real Mario enemy in the most recent game?", 
								"What is not a color yoshis have been?", 
								"Who currently voices Mario in the games?", 
								"Which of these mainline Super Mario games is<br>unplayable on the Switch?", 
								"Which enemy is not a playable character in any Mario game?",
								"How many official rpg spin-off series has Mario had?", 
								"Which sport has Mario not participated in within a game?", 
								"Which of these is not a real Mario game?"];
	window.correctAnswer = [ 	"B", "A", "D", "C", "E", "D", "E", "A", "B", "C"]; 
	window.answerA = [ 			"Donkey Kong", 
								"Bowser Jr.", 
								"Skedaddler", 
								"Orange", 
								"Chris Pratt",
								"Super Mario 64", 
								"Chain Chomp", 
								"Three", 
								"Baseball", 
								"Mario Party: Advance" ];
	window.answerB = [ 			"Bowser", 
								"Baby Bowser", 
								"Bloomp",
								"Brown", 
								"Lou Albano",
								"Super Mario Bros. 2", 
								"Chargin' Chuck", 
								"Four", 
								"Sumo", 
								"Mario Hoops 3-on-3" ];
	window.answerC = [ 			"Luigi", 
								"Koopa Kid", 
								"Maw-Maw", 
								"Cyan", 
								"Seth Green",
								"Super Mario Sunshine", 
								"Blooper", 
								"One", 
								"Rhythmic Gymnastics", 
								"New Super Mario Bros. Deluxe" ];
	window.answerD = [ 			"Peach", 
								"Koopaling", 
								"Thwimble", 
								"Magenta", 
								"Charles Martinet",
								"Super Mario 3D Land", 
								"Wiggler", 
								"Five", 
								"Basketball", 
								"Mario & Luigi: Paper Jam" ];
	window.answerE = [ 			"Wario", 
								"Bowsette", 
								"Outmaway", 
								"White", 
								"Kevin Afghani",
								"Super Mario Bros. U", 
								"Galoomba", 
								"Two", 
								"Horseback Riding", 
								"Mario Artist: Paint Studio" ];
	window.response = [ 		"Though he has been in focus, Bowser has not had a<br>game series with him as the titular lead.", 
								"The Koopalings were originally labelled as Bowser’s kids,<br>but that has since been replaced with just Jr.", 
								"Thwimble is not real. The other ones are official enemy names<br>from Super Mario Bros. Wonder.", 
								"There is a Light-Blue Yoshi, but there is not an official cyan yoshi.", 
								"All of these people have voiced Mario, but Afghani has been<br>the new voice actor since Martinet’s retired.",
								"All playable games listed are either through direct ports or<br>official emulation, 3D Land has not been ported or emulated.", 
								"Galoomba has had no playable appearances unlike the rest who have<br>been playable in games like the Tennis and Kart series.", 
								"Those game series are:<br>Super Mario RPG, Mario & Luigi, and Paper Mario.", 
								"Though there is an enemy based on sumo,<br>Mario has not participated officially in the sport.", 
								"New Super Mario Bros. U Deluxe is a real game,<br>New Super Mario Bros. Deluxe is not." ];
							
}
						