//DOM api. this helps front-end
//doc get element id will be needed to code what alex sends me
let playerName;

function forceReload() {
	location.reload(true);
}


function getCharName() {
	playerName = prompt("Choose a character name");
	if (playerName === "") {
		playerName = "Chosen One";
		console.log(playerName);
	}
	else {
		console.log(playerName);
	}
}

function nameDelay() {
  setTimeout(function(){ 
  	getCharName();
	storyIntro();
  }, 250);  
}

nameDelay();
// console.log(playerName);



let story = document.getElementById("story");
let storyDisplay = document.getElementById("storyDisplay");
let storyFinished = false;
console.log("second console.log" + playerName); //testing


function storyIntro() {
	let storyText = ['*You wake up in a cold, dark room, with no memory of how you arrived there. You hear a raspy voice asking you to identify yourself...', 'Welcome to the Crypt of The Old One, ' + playerName + '. You are most likely wondering how you got here?', '*You shake your head, looking around to adjust your eyes to the darkness. As your eyes acclimate, you make out a hunched over figure in the darkness, beckoning to you...', playerName + ', I hope you are not too disoriented. You have been summoned to this world because we have deemed you worthy to fight for the treasure and glory locked away in the crypt. However, you must defeat the Old One first, before you can claim your prize. Defeating the Old One is also the only means of returning to your home world. However, do not fret, ' + playerName + ', I will help you on your quest and assist you with your battle preparations.', 'You have three major stats that will help you in battle: Attack, Defense, and Heal. Attack determines how much damage you inflict if you attack for turn. Defense determines how much damage you can mitigate. Heal determines how much health you regain if you heal for turn.','I will train you in these three areas but since we are short on time, I can only teach you to be proficient in one of the three. Being proficient in a stat means you excel in it. For example, being proficient in Attack makes you do more damage, while being weak in Attack means you inflict reduced damage. Being proficient in Defense means you take less damage from the enemy. Being proficient in Heal means you gain more health when you heal for turn. You also regain some action points.', 'Do note that specific combinations of the proficient and basic stats have special bonuses, therefore, how you prioritize your stats carries some significance. Also, you can only choose one stat to be proficient in, so choose wisely! It is time to prepare you for your battle. Press the Start Game button to continue!', 'Press the Start Game button to begin!'];

	let x = 0;
	story.addEventListener('click', function() {
	  storyDisplay.innerHTML = `<strong>${storyText[x]}</strong>`; //*template strings to adjust all values of a string
	  if(x < storyText.length - 1) {
	    x++;
	  }
	  if(x === storyText.length - 1){
	  	startGame.style.visibility = "visible";
	  }
	}); 
}

let startGame = document.getElementById("startGame");
document.getElementById("startGame").addEventListener("click", runGame);

function restartGame() {
	forceReload();
	runGame();
}

function runGame() {
	let character = {
		health: 135,
		actionPoints: 100,
		proficient: "",
		weakness: "",
		basic: ""
	}

	let computer = {
		health: 135
	}

	getCharStats(character);
	displayRules();
	commenceBattle(character, computer);




} //end of runGame function

// runGame();

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

	function displayRules(character, computer) {
		alert("Now that you have finished your training, I will explain the rules of combat. You will have a one on one, turn-based battle with the Old One.");
		alert("On your turn you will choose to either attack the boss to do damage or to heal to recover some hp.");
		alert("If you choose to attack, you will decide to roll 1 of 6 dice: d30, d20, d10, d8, d6, or d4. Whatever result you roll is multiplied by your attack bonus and that damage is done to the boss.");
		alert("If you choose to heal for your turn, you will roll 1 of 6 dice: d30, d20, d10, d8, d6, or d4. Whatever result you roll is multiplied by your heal bonus and that health is added back to your hp.");
		alert("Keep in mind the die you choose determines how many action points you use. d30 costs the most action points while d4 costs the least.");
		alert("Being proficient in attack or heal can reduce action point costs.")
		alert("You win by reducing the boss down to 0 hp!");
		alert("You lose by being reduced to 0 hp. Be warned that if your action points are reduced to 0, you also lose the game!");
		alert("You are now ready, prepare for battle!");
	}


	function checkBattleStats(character, computer) {
		if (character.health <= 0) { //*This isn't complete, be sure to try to create an accurate condition that ends the game when one player gets to 0 hp.
			alert("GAME OVER. Your health has been reduced to 0, you lose :(");
			restartGame();
			location.reload(true);
		}

		else if (computer.health <=0) {
			alert("Congratulations! You have defeated the Old One! Treasure and glory is all yours, and you are now able to return to your own homeworld.");
			restartGame();
			location.reload(true);
		}

		else if (character.actionPoints <=0) {
			alert("GAME OVER. Your action points have been reduced to 0, game over :(");
			restartGame();
			location.reload(true);
		}

		else {
			commenceBattle(character, computer);
		}
	}

	function commenceBattle(character, computer) {
		let roundedHealth = Math.round(character.health);
		let roundedAction = Math.round(character.actionPoints);
		alert("You have " + roundedHealth + " health points (hp) and " + roundedAction + " action points (ap).");
		while (character.health > 0 && computer.health > 0) {
			playerTurn(character, computer);
			computerTurn(character, computer);
		} // end of health while loop
	} //end of commenceBattle function

	function playerTurn(character, computer) {
		let roundedHealth = Math.round(character.health);
		let roundedAction = Math.round(character.actionPoints);

		if (character.proficient === "heal" && character.basic === "defense") {
			alert("Due to your proficiency in 'heal' and basic training in 'defense', you gain 12 hp!");
			character.health += 12;
		}

		else if (character.proficient === "defense" && character.basic === "heal") {
			alert("Due to your proficiency in 'defense' and basic training in 'heal', you gain 8 hp!")
			character.health += 8;
		}

		else if (character.proficient === "heal") {
			alert("Due to your proficiency in 'heal', you gain 5 hp!")
			character.health += 5;
		}

		let input = prompt("Which action (attack or heal) do you want to perform?");
		switch (input) {
			case "attack":
				playerAttack(character, computer);
				break;		
			case "heal":
				playerHeal(character, computer);
				break;
			default:
			alert('Invalid Input, Try again.');
			commenceBattle(character, computer);
		} // end of switch case
	} //end of playerTurn function


	function playerAttack(character, computer) {
			let attackChoice = prompt("Choose which die you want to roll: type 30, 20, 10, 8, 6, or 4.");
			let apCost = parseInt(attackChoice, 10);
			let roll = 0;
			let roundedHealth = Math.round(character.health);
			let roundedAction = Math.round(character.actionPoints);
			let isInputValid = false;
			while (!isInputValid) {
				switch (attackChoice) {
					case "30":
						attackRoll = rollDie(30);
						roll += attackRoll;
						break;
					case "20":
						attackRoll = rollDie(20);
						roll += attackRoll;
						break;		
					case "10":
						attackRoll = rollDie(10);
						roll += attackRoll;
						break;
					case "8":
						attackRoll = rollDie(8);
						roll += attackRoll;
						break;
					case "6":
						attackRoll = rollDie(6);
						roll += attackRoll;
						break;			
					case "4":
						attackRoll = rollDie(4);
						roll += attackRoll;
						break;
					default:
					alert('Invalid number, try again.');
					commenceBattle(character, computer);
				} // end of switch case

				let damageDone;
				let roundedDamage = Math.round(damageDone);
				if (character.proficient === "attack") {
					character.actionPoints -= (apCost / 2);
					character.actionPoints += 5;
					computer.health -= (roll * 2);
					damageDone = roll * 2;
					alert("You did " + damageDone + " damage!");
					computerTurn (character, computer);
				}

				else if (character.weakness === "attack") {
					character.actionPoints -= apCost;
					computer.health -= (roll);
					damageDone = roll;
					alert("You did " + damageDone + " damage!");
					computerTurn (character, computer);
				}

				else {
					character.actionPoints -= roll;
					computer.health -= (roll * 1.35);
					damageDone = roll * 1.35;
					alert("You did " + damageDone + " damage!");
					computerTurn (character, computer);
				}	
			}	// end of while loop	
	}

	function playerHeal(character, computer) {
			let healChoice = prompt("Choose which die you want to roll: type 30, 20, 10, 8, 6, or 4.");
			let apCost = parseInt(healChoice, 10);
			let roll = 0;
			let roundedHealth = Math.round(character.health);
			let roundedAction = Math.round(character.actionPoints);
			let healRoll = 0;
			let isInputValid = false;
			while (!isInputValid) {
				switch (healChoice) {
					case "30":
						healRoll = rollDie(30);
						roll += healRoll;
						break;
					case "20":
						healRoll = rollDie(20);
						roll += healRoll;
						break;		
					case "10":
						healRoll = rollDie(10);
						roll += healRoll;
						break;
					case "8":
						healRoll = rollDie(8);
						roll += healRoll;
						break;
					case "6":
						healRoll = rollDie(6);
						roll += healRoll;
						break;			
					case "4":
						healRoll = rollDie(4);
						roll += healRoll;
						break;
					default:
					alert('Invalid number, try again.');
					commenceBattle(character, computer);
				} // end of switch case

				let healTotal;
				let roundedHeal = Math.round(healTotal);
				if (character.proficient === "heal") { //maybe add an incentive like small damage to computer
					character.actionPoints -= (healChoice / 3);
					character.actionPoints += roll;
					character.health += (roll * 3);
					computer.health -= (roll * 1.35);
					healTotal = roll * 3;
					alert("You healed for " + healTotal + "! Due to your proficiency in 'heal', it did minor damage to the enemy!");
					computerTurn (character, computer);
				}

				else if (character.weakness === "heal") {
					character.actionPoints -= healChoice;
					character.actionPoints += 1;
					character.health += (roll);
					healTotal = roll;
					alert("You healed for " + healTotal + "!");
					computerTurn (character, computer);
				}

				else {
					character.actionPoints -= (healChoice / 2);
					character.actionPoints += 2;
					character.health += roll * 1.5;
					healTotal = roll * 1.5;
					alert("You healed for " + healTotal + "!");
					computerTurn (character, computer);
				}
			}	//end of while loop	
	} // end of playerHeal function

	function computerTurn(character, computer) {
			let attackDamage = 0;
			// let attackStep = character.health - attackDamage; (not needed)
			let healCalc = 0;
			// let healStep = computer.health + healCalc; (not needed)
			let roundedHealth = Math.round(character.health);
			let roundedAction = Math.round(character.actionPoints);
			let roll = rollDie(6);
			let oldOneHealth = computer.health;
			if (oldOneHealth >= 85) {
				alert("The Old One attacks and it is powerful as ever!");
				roll;
			}

			else {
				alert("The Old One attacks! However, it has been greatly damaged.");
				roll;
			}

			if (roll <= 3 && character.proficient === "defense") {
				attackDamage = (1.5 * rollDie(30)) / 1.3;
				character.health -= attackDamage;
				checkBattleStats(character, computer);  
			}
			else if (roll <= 3 && character.weakness === "defense") {
				attackDamage = (1.5 * rollDie(30)) * 1.2;
				character.health -= attackDamage;
				checkBattleStats(character, computer); 
			}

			else if (roll <= 3) {
				attackDamage = 1.5 * rollDie(30);
				character.health -= attackDamage;
				checkBattleStats(character, computer);
			}

			else if (roll === 4) {
				if (computer.health <= 85){
					healCalc = 1.5 * rollDie(30);
					computer.health += healCalc;
					checkBattleStats(character, computer); 
				}
				else {
				attackDamage = (1.5 * rollDie(30)) * 1.2;
				character.health -= attackDamage;
				checkBattleStats(character, computer); 
				}
			}

			else if (roll === 5) {
				if (computer.health <= 85){
					healCalc = 1.5 * rollDie(30);
					computer.health += healCalc;
					checkBattleStats(character, computer);
				}
				else {
				attackDamage = (1.5 * rollDie(30)) * 1.2;
				character.health -= attackDamage;
				checkBattleStats(character, computer); 
				}
			}

			else { //Special Attack
				attackDamage = 3 * rollDie(30);
				character.health -= attackDamage;
				checkBattleStats(character, computer);  
			}
	} //end of computerTurn function

	function rollDie(n) {
	let diceRoll = Math.floor(Math.random() * n) + 1;
		return diceRoll;
	}