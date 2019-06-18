function runGame() {

	//This dice game will utilize user input to generate values as stats
	function playCharIntro() {
		alert("*You wake up in a cold, dark room, with no memory of how you arrived there... You hear a raspy voice asking you to identify yourself...");
		let playerName = prompt("Choose a character name");
			if (playerName === "") {
				playerName = "Chosen One";
			} //Here is where the player inputs their character name. If they don't input one, then they are given the generic name, "Chosen One".
		alert("Welcome to the Crypt of The Old One, " + playerName + ". You are most likely wondering how you got here?");
		alert("*You shake your head, looking around to adjust your eyes to the darkness. As your eyes acclimate, you make out a hunched over figure in the dark, beckoning to you...");
		alert(playerName + ", I hope you are not too disoriented. You have been summoned to this world because we have deemed you worthy to fight for the treasure and glory locked away in the crypt. However, you must defeat the Old One first, before you can claim your prize.");
		alert("Defeating the Old One is also the only means of returning to your home world. However, do not fret, " + playerName + " I will help you on your quest. I can assist you in your battle preparations.");
		alert("You have three major stats that will help you in battle: Attack, Defense, and Heal.");
		alert("'Attack' determines how much damage you inflict if you attack for turn.");
		alert("'Defense' determines how much damage you mitigate.");
		alert("'Heal' determines how much health you regain if you heal for turn.");
		alert("I will train you in these three areas but since we are short on time, I can only teach you to be proficient in one of the three. Being proficient in a stat means you excel in it. For example, being proficient in 'Attack' makes you do more damage, while being weak in 'Attack' means you inflict reduced damage.");
		alert("Be aware that you can only choose one stat to be proficient in, so choose wisely!");
		alert("It is time to prepare you for your battle. After training you will be either proficient, basic, or weak in one of the three stats: attack, defense, heal. Choose how you want to prioritize.");
	}
	playCharIntro();

	function getCharStats(character) {
		character.proficient = getCharProficent();
		character.weakness = getCharWeakness(character.proficient);
		character.basic = getCharBasic(character.proficient, character.weakness);
	} //Here I want to have an overarching function that gets the user to input their stat preferences.

	function getCharProficent() {
		let isInputValid = false;
		while (!isInputValid) {
			let input = prompt("Which stat do you want to be proficient in? (type 'attack', 'defense', or 'heal'.");
			switch (input) {
				case "attack":
					return input;
				case "defense":
					return input;
				case "heal":
					return input;
				default:
					alert('Invalid Input, Try again.');
					break;
			}
		}
	}

	// The above function is going to be used to get the proficiency stat of the player. It is coded in a way to make sure they only choose attack, defense or heal as an input. If not, it will return invalid and ask them to input again.

	function getCharWeakness(proficientStat) {
		let isInputValid = false;

		while (!isInputValid) {
			let input = prompt("Which stat are you weak in? (type 'attack', 'defense', or 'heal' if you haven't chosen it already.");
			if (input == proficientStat) {
				alert("Sorry, you cannot be weak in a stat are already proficient in.");
			}
			else{

				switch (input) {
					case "attack":
						return input;
					case "defense":
						return input;
					case "heal":
						return input;
					default:
						alert('Invalid Input, Try again.');
						break;
				}
			}
		}
	}

	function getCharBasic(proficientStat, weaknessStat) {
		let isInputValid = false;

		while (!isInputValid) {
			let input = prompt("Which stat are you basic in? (type 'attack', 'defense', or 'heal' if you haven't chosen it already.");
			if (input === proficientStat || input === weaknessStat) {
				alert("Sorry, you cannot be basic in a stat are already proficient and/or weak in.");
			} //This will only allow the player to choose a stat they haven't already picked for the proficient or weakness stats.
			else{

				switch (input) {
					case "attack":
						return input;
					case "defense":
						return input;
					case "heal":
						return input;
					default:
						alert('Invalid Input, Try again.');
						break;
				}
			}
		}
	}


	let character = {
		health: 100,
		actionPoints: 50,
		proficient: "",
		weakness: "",
		basic: ""
	}

	let computer = {
		health: 100,
		actionPoints: 50,
		attackMult: 2,
		defenseMult: 2,
		healMult: 2,
	}

	getCharStats(character);

	function getComputerStats() {
		//Use a 2 multiplier for the computer stats. In a differenct function (computerTurn), use a d3 to randomize the computer's action
	}
} //end of runGame function

runGame();