const guessInput =document.getElementById("guessInput");
const guessBtn =document.getElementById("guessBtn");
const message =document.getElementById("message");
const attempsText=document.getElementById("attemps");

let randomNumber;
let attemps;
// start new game
function startGame(){
    randomNumber = Math.floor(Math.random()*10)+1;
    attemps = 0;
    attempsText.textContent = "";
    guessInput.value = "";
    guessInput.disabled=false;
    guessBtn.disabled =false;

}
// guess button
guessBtn.addEventListener("click",function(){
    const userGuess =Number(guessInput.value);
    if(userGuess<1 || userGuess>10 || guessInput.value===""){
        message.textContent = "Please enter a number between 1 to 10";
        return;
    }
    attemps++
    attempsText.textContent=attemps;
    if(userGuess === randomNumber){
        message.textContent = `Correct! The number was ${randomNumber}`
        guessInput.disabled=true;
        guessBtn.disabled=true;
    }else if(userGuess<randomNumber){
        message.textContent="Too low! Try a bigger number"
    }else{
        message.textContent = "Too High! Try a smaller number"
    }
});
// reset game
resetBtn.addEventListener("click",function(){
    startGame()
})
startGame()