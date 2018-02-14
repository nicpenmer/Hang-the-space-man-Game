//put back into html head tag
//<script src"javascript/game.js"></script>


var wordList = ["space", "moon", "galaxy", "star", "alien", "supernova", "blackhole"]; //word array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessLetter = [];

var currentWord = wordList[Math.floor(Math.random()* wordList.length)];
    console.log(currentWord); // computer successfully chooses a random word from my array. yay.
//setting up answer Array

var answerWord = [];
        for (var i = 0; i < currentWord.length; i++) {
            if (userGuess.includes(word.charAt(i)) ) {
                 } 
                 else {
                     anserWord[i] = "_";
                 }
            }

 //create variable to keep track of variables that remain to be guessed.
var remainingLetters = currentWord.length;
            
        

document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);
            if (remainingLetters > 0) {
                currentWord = document.getElementById("current-word");
                currentWord.innerHTML = answerWord.join(" ");
            if (currentWord.includes(userGuess)){
                console.log(currentWord.includes(userGuess));
                
                //i actually dont think this is that correct way to do this. But I am slow at all of this and running out of time. 
            }
            else if (currentWord !== userGuess){
                //also not the correct syntax. Its just a placeholder for the correct answer. 

            }
            
        }
    }

    for (var i = 0 ; i < currentWord.length; i++); {
    word.charAt(i)
 
    var word = "space" 
        word.charAt(0) //s
        word.charAt(1) //p
        word.charAt(2) //a
        word.charAt(3) //c
        word.charAt(4) //e
    

    var word = "moon" 
        word.charAt(0) //m
        word.charAt(1) //o
        word.charAt(2) //o
        word.charAt(3) //n
    

    var word = "galaxy" 
        word.charAt(0) //g
        word.charAt(1) //a
        word.charAt(2) //l
        word.charAt(3) //a
        word.charAt(4) //x
        word.charAt(5) //y

    var word = "star"
        word.charAt(0) //s
        word.charAt(1) //t
        word.charAt(2) //a
        word.charAt(3) //r
    
    var word = "alien"
        word.charAt(0) //a
        word.charAt(1) //l
        word.charAt(2) //i
        word.charAt(3) //e
        word.charAt(4) //n

    var word = "supernova"    
        word.charAt(0) //s
        word.charAt(1) //u
        word.charAt(2) //p
        word.charAt(3) //e
        word.charAt(4) //r
        word.charAt(5) //n
        word.charAt(6) //o
        word.charAt(7) //v
        word.charAt(8) //a

    var word = "blackhole"
        word.charAt(0) //b
        word.charAt(1) //l
        word.charAt(2) //a
        word.charAt(3) //c
        word.charAt(4) //k
        word.charAt(5) //h
        word.charAt(6) //o
        word.charAt(7) //l
        word.charAt(8) //e
    }



//if correct, need to update current word
//if incorrect guess decrease amount of guesses remaining, also list the incorrect letter guesses
document.getElementById("wins").innerHTML = "wins " + wins++; // number of wins. 
document.getElementById("guesses-remaining").innerHTML = "Guesses Remaining: " + (userGuess - 1); // set limit to guesses -  10, write function that limits the guesses and writes one less guess on html
document.getElementById("letters-guessed").innerHTML = "Letters Guessed: " + guessLetter.push(userGuess); 

var html = "<p>Press any letter to play</p>"+
"<p>Your guess was: " + userGuess + "</p>" +
"<p>Number of Guesses remaining:" + guessesLeft + "</p>" +
"<p>Current Word: " + answerWord + "</p>" +
"<p>Wins: " + wins + "</p>";

document.querySelector("#game").innerHTML = html;
    
    //changing underscores to letters
    //guessed letters



     /*Also could do
            display += word.charAT
            Array - array.push
            display.push
            display.join(“ “ )
            */
    
//I'm sorry this is a hot mess. 

    
    

   


    