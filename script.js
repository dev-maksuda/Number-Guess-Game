const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attemptsText");
const resetBtn = document.getElementById("resetBtn");

let randomNumber;
let attempts;

//Start new game

function startGame(){
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    attemptsText.textContent = attempts;
    message.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;
}

//Guess button
guessBtn.addEventListener("click", function(){
    const userGuess = Number(guessInput.value);
    if (userGuess < 1 || userGuess > 10 || guessInput.value === "") {
        message.textContent = "Please enter a number between 1 and 10";
        return;
    }
    attempts++;
    attemptsText.textContent = attempts;
    if(userGuess === randomNumber){
        message.textContent = `Correct! The Number was ${randomNumber}`;
        guessInput.disabled = true;
        guessBtn.disabled = true;
    }else if(userGuess < randomNumber){
        message.textContent = "Too Low! Try a bigger number";
    }else{
        message.textContent = "Too High! Try a smaller number";
    }
});

//Reset Game
resetBtn.addEventListener("click", function(){
    startGame();
});

//Start first gmae
startGame();
