/* 
The goal is to build a simple rock-paper-ssisors game, repson would input, the function would take that in
and compare the input with randomly generated number, that would assined to rock/paper/scissors.
Else-if statements would determine the winner.
*/


//RULES
let scheme = document.getElementById('scheme');
let toggleRules = document.getElementById('clickable');

function showScheme() {
    scheme.style.display = 'flex';
    toggleRules.innerHTML = 'THE GAME RULES';
}
function stopShowingScheme() {
    scheme.style.display = 'none';
    toggleRules.innerHTML = 'SEE THE GAME RULES';
}

toggleRules.addEventListener('mousedown', showScheme);
toggleRules.addEventListener('mouseup', stopShowingScheme);



//GAME
let playersChoice = document.getElementById('choice');

function ranNum() {
    return Math.floor(Math.random() * 3); 
}

let compInput = (num) => {
    if(num === 0) {
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else if (num === 2) {
        return 'scissors';
    }
}

let aiChoice = compInput(ranNum());

let userInput = document.querySelector('input[name="choice"]:checked').value;

function compareInputs(playerInput, aiInput) {
    if(playerInput === 'rock' && aiInput === 'scissors') {
        return 'PLAYER WINS';
    } else if(playerInput === 'rock' && aiInput === 'paper') {
        return 'COMPUTER WINS';
    } else if(playerInput === 'paper' && aiInput === 'scissors') {
        return 'COMPUTER WINS';
    } else if(playerInput === 'paper' && aiInput === 'rock') {
        return 'PLAYER WINS';
    } else if(playerInput === 'scissors' && aiInput === 'rock') {
        return 'COMPUTER WINS';
    } else if(playerInput === 'scissors' && aiInput === 'paper') {
        return 'PLAYER WINS';
    } else if (playerInput === aiInput) {
        return "DRAW";
    }
}

