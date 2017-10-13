


// create the array for the alphabet that the computer can choose from.

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
							"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
							"y", "z"]; 
// set the variables for wins, loss, guess, and an empty array to put the guessed the letter in. 
// global variables.

	var win = 0;
    var loss = 0;
    var guess = 10;
    var guessesSoFar = [];
    
// set up the variable that represents the random variable the computer chooses from the array 

    var letterToBeGuessed = computerChoices[Math.floor(Math.random()* computerChoices.length)];

// set up the function with an event listener so that the site can pick up the keystroke by
//the player. if users guess isnt the random letter, push that guess into the empty array. 

	document.onkeyup = function(event) {

		var userGuess = event.key;

		if (userGuess != letterToBeGuessed) {

			guessesSoFar.push(userGuess);	
			document.getElementById('list').textContent = guessesSoFar;

		}

		
// if the letter is the same as the one randomely generated, win counter goes up by one, 
//guesses go up to 10, a new letter is generated, and the guesses so far array emptys again
// if it isn't the same, guesses go down by one. And once guesses go to 0, it increases the 
// loss counter, guesses go back to 10, and a new letter is randomely generated, and 
//the guess so far array becomes empty again. 

		if ((userGuess == letterToBeGuessed)) {

			win++;
			guess = 10;
			letterToBeGuessed = computerChoices[Math.floor(Math.random()* computerChoices.length)];
			guessesSoFar = []; 
		}
		else {
			guess--;
			
		};

		if (guess === 0) {
			loss++;
			guessesSoFar = [];
			guess = 10;
			letterToBeGuessed = computerChoices[Math.floor(Math.random()* computerChoices.length)];
			// guessesSoFar = [];
			
		}

		
	


	  
      document.getElementById('player').textContent = userGuess;
	  document.getElementById('win').textContent = win;
      document.getElementById('loss').textContent = loss;
      document.getElementById('guesses').textContent = guess;
      



	};

