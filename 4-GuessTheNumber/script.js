let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");

const remainingGuesses = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let preGuess = [];
let numOfGuesses = 1;

let playGame = true;
if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    } else  if(guess < 1){
        alert("Please enter a number greater than 0");
    } else if (guess > 100){
        alert("Please enter a number less than 100");
    } else {
        preGuess.push(guess);
        if(numOfGuesses === 11){
            displayGuess(guess)
            displayMessage(`game over. random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
            // numOfGuesses++;
        }
    }


}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`congratulations! you guessed the number ${randomNumber} correctly`)
        endGame();
}   else if (guess< randomNumber){
     displayMessage(`your guess ${guess} is too low`)
} else if (guess>  randomNumber){
     displayMessage(`your guess ${guess} is too high`)
}
}

function displayGuess(guess){
    userInput.value = ""; 
    guessSlot.innerHTML += `${guess} `
    numOfGuesses++;
    remainingGuesses.innerHTML = `${11 - numOfGuesses} guesses remaining`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2> ${message} </h2>`

}


function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start New Game</button>`
    startOver.appendChild(p);
    playGame = false;
    newGame();

}
function newGame(){
    const newGame= document.querySelector("#newGame")
    newGame.addEventListener('click', function (e){

        randomNumber = parseInt(Math.random() * 100 + 1);
        preGuess = [];
        numOfGuesses = 1;
        guessSlot.innerHTML = "";
        remainingGuesses.innerHTML = `${11 - numOfGuesses} guesses remaining`
        lowOrHi.innerHTML = "";
        startOver.removeChild(p);
        userInput.removeAttribute("disabled");
        playGame = true;

    })

}

