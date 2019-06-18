function runGame() {
	playCharIntro();

	let character = {
		health: 200,
		actionPoints: 100,
		proficient: "",
		weakness: "",
		basic: ""
	}

	let computer = {
		health: 300,
		attackMult: 2,
		defenseMult: 2,
		healMult: 2,
	}
	getCharStats(character);
	displayRules();
	commenceBattle(character, computer); //return a value from commence battle to rep who won, then create another function to check value and display who won.




} //end of runGame function

runGame();

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
		alert("'Defense' determines how much damage you can mitigate.");
		alert("'Heal' determines how much health you regain if you heal for turn.");
		alert("I will train you in these three areas but since we are short on time, I can only teach you to be proficient in one of the three. Being proficient in a stat means you excel in it. For example, being proficient in 'Attack' makes you do more damage, while being weak in 'Attack' means you inflict reduced damage.");
		alert("Be aware that you can only choose one stat to be proficient in, so choose wisely!");
		alert("It is time to prepare you for your battle. After training you will be either proficient, basic, or weak in one of the three stats: attack, defense, heal. Choose how you want to prioritize.");
	}

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

	function displayRules() {
		alert("Now that you have finished your training, I will explain the rules of combat. You will have a one on one, turn-based battle with the Old One.");
		alert("On your turn you will choose to either attack the boss to do damage or to heal to recover some hp.");
		alert("If you choose to attack, you will decide to roll 1 of 6 die: d30, d20, d10, d8, d6, or d4. Whatever result you roll is multiplied by your attack bonus and that damage is done to the boss.");
		alert("However, do note that you expend action points (ap) depending on which die you roll. For example, if you roll the d30, it will cost 30 ap or if you roll d3 it will only cost 3 ap.");
		alert("If you choose to heal for your turn, you will roll 1 of 6 die: d30, d20, d10, d8, d6, or d4. Whatever result you roll is multiplied by your heal bonus and that health is added back to your hp.");
		alert("You win by reducing the boss down to 0 hp!");
		alert("You lose by being reduced to 0 hp. Be warned that if your action points are reduced to 0, you automatically lose half your life and can no longer heal!");
		alert("You are now ready, prepare for battle!");
	}

	function commenceBattle(character, computer) {
		alert("You have " + character.health + " health points (hp) and " + character.actionPoints + " action points (ap).");
		while (character.health > 0 && computer.health > 0) {
			playerTurn(character, computer);
			computerTurn(character, computer);
			//maybe add an if statement to see which player won
		} // end of health while loop
		if (character.health <= 0) { //*This isn't complete, be sure to try to create an accurate condition that ends the game when one player gets to 0 hp.
			alert("Your health has been reduced to 0, game over :(");
	} //end of commenceBattle function

	function playerTurn(character, computer) {
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
					break;
				} // end of switch case

				if (character.proficient === "attack") {
					character.actionPoints -= (apCost / 2);
					computer.health -= (roll * 2);
					computerTurn (character, computer);
				}

				else if (character.weakness === "attack") {
					character.actionPoints -= apCost;
					computer.health -= (roll / 1.3);
					computerTurn (character, computer);;
				}

				else {
					character.actionPoints -= roll;
					computer.health -= (roll / 1.25);
					computerTurn (character, computer);;
				}	
			}	// end of while loop	
	}

	function playerHeal(character, computer) {
			let healChoice = rollDie(prompt("Choose which die you want to roll: type 30, 20, 10, 8, 6, or 4."));
			let apCost = parseInt(healChoice, 10);
			let roll = 0;
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
						attackRoll = rollDie(10);
						roll += healRoll;
						break;
					case "8":
						attackRoll = rollDie(8);
						roll += healRoll;
						break;
					case "6":
						attackRoll = rollDie(6);
						roll += healRoll;
						break;			
					case "4":
						attackRoll = rollDie(4);
						roll += healRoll;
						break;
					default:
					alert('Invalid number, try again.');
					break;
				} // end of switch case

				if (character.proficient === "heal") {
					character.actionPoints -= (healChoice / 2);
					character.health -= (roll * 2);
					computerTurn (character, computer);
				}

				else if (character.weakness === "heal") {
					character.actionPoints -= healChoice;
					character.health += (roll / 1.3);
					computerTurn (character, computer);
				}

				else {
					character.actionPoints -= roll;
					character.health += roll;
					computerTurn (character, computer);
				}
			}	//end of while loop	
	} // end of playerHeal function

	function computerTurn(character, computer) {
			let attackDamage = 0;
			// let attackStep = character.health - attackDamage; (not needed)
			let healCalc = 0;
			// let healStep = computer.health + healCalc; (not needed)

			let roll = rollDie(6);
			if (roll <= 3) {
				attackDamage = 1.5 * rollDie(30);
				character.health -= attackDamage;
				commenceBattle(character, computer);
			}
			else if (roll <= 3 && character.proficient === "defense") {
				attackDamage = (1.5 * rollDie(30)) / 1.3;
				character.health -= attackDamage;
				commenceBattle(character, computer);  
			}
			else if (roll <= 3 && character.weakness === "defense") {
				attackDamage = (1.5 * rollDie(30)) * 1.2;
				character.health -= attackDamage;
				commenceBattle(character, computer); 
			}
			else if (roll === 4) {
				healCalc = 1.5 * rollDie(30);
				computer.health += healCalc;
				commenceBattle(character, computer); 
			}
			else if (roll === 5) {
				healCalc += 1.5 * rollDie(30);
				computer.health += healCalc;
				commenceBattle(character, computer);
			}
			else { //Special Attack
				attackDamage = 3 * rollDie(30);
				character.health -= attackDamage;
				commenceBattle(character, computer);  
			}
	} //end of computerTurn function

	function rollDie(n) {
	let diceRoll = Math.floor(Math.random() * n) + 1;
		return diceRoll;
	}