//put back into html head tag
//<script src"javascript/game.js"></script>

//array of words to pick from
var wordList = ["space", "moon", "galaxy", "star", "alien", "supernova", "blackhole"]; //word array
//solution will go here
var currentWord = "";

//this will put the solution into letters, stored in an array. 
var lettersInCurrentWord = [];
//number of blanks
var numBlanks = 0;
//holds a mix of blank and solved letters
var blanksAndSuccesses = [];
var wrongGuess = [];

//score counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 8;

//function to start the game

function startGame() {
    //set the number of guesses
    numGuesses = 8;
    //
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(currentWord);

    //sets up variables as strings and arrays
    lettersInCurrentWord = currentWord.split("");
    numBlanks = lettersInCurrentWord.length;
    blanksAndSuccesses = [];
    wrongGuess = [];

    //forloop for "_"s 
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
    console.log(blanksAndSuccesses);
    //puts the guesses into the html
    document.getElementById("guesses-left").innerHTML = numGuesses;
    //puts the blanks on the html
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    //clears wrong guesses from the previous round
    document.getElementById("wrong-guesses").innerHTML = wrongGuess.join(" ");
}
//creates function to check letters in word
function checkLetters(letter) {
    //sets to false to see if letter is in word
    var letterInWord = false;
    //checks if letter is in word. 
    for (var i = 0; i < numBlanks; i++) {
        if (currentWord[i] === letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
                blanksAndSuccesses[j] = letter;
            }
        }
        console.log(blanksAndSuccesses);
    }
    //else if the letter doesnt exist, subtract numb of guesses left. 
    else {
        wrongGuess.push(letter);
        numGuesses--;
    }
}
//function to update code after each guess
function completeRound() {

    console.log("WinCount: " + winCounter + "| LossCount " + lossCounter +  " | NumGuesses: " + numGuesses);
    //update HTML: 
    document.getElementById("guesses-left").innerHTML = numGuesses;
    //puts the blanks on the html
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    //clears wrong guesses from the previous round
    document.getElementById("wrong-guesses").innerHTML = wrongGuess.join(" ");

    //if statement to see if letters match the solution
    if(lettersInCurrentWord.toString() === blanksAndSuccesses.toString()) {
        winCounter++;
        alert("You Win!");

        //update winCounter,
        document.getElementById("wins").innerHTML = winCounter;
        //call function to restart game
        startgame();
    }
    else if (numGuesses === 0){
        //update loss counter
        lossCounter++; 
        alert("You Lose, the word was "  + currentWord + ".");
        document.getElementById("losses").innerHTML = lossCounter; 
        //restartgame
        startGame();
    }
}


//Real game runs here. 
startGame();
//start with key clicks
document.onkeyup() = function(event)  {
    //converts strings to lowercase
    var letterGuessed = String.fromCharCode(event.which).toLowerCase();
    //runs the code to check to correctletters
    checkLetters(letterGuessed);
    //runs the code after each round
    completeRound();


};

//game works. 


