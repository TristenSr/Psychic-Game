var letters = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
    var wins = 0;
    var loses = 0;
    var guessesLeft = 0;
    var guessesSoFar = 0;
    var userGuess = null;    

// computer random function input should be set
var letterToBeGuessed = letters[Math.floor(Math.random() * letters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + lettersToBeGuessed);

// document key function for computer

document.onekey = function function(event){
  
var userGuess = String.fromChartCode(event.keyCode).toLowerCase(); {
    if (guessesSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesLeft--;

}

    if (letterToBeGuessed == userGuess) {
    wins++;
    console.log("You won!");
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = letters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

