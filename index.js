/* 
The goal is to build a simple rock-paper-ssisors game, repson would input, the function would take that in
and compare the input with randomly generated number, that would assined to rock/paper/scissors.
Else-if statements would determine the winner.
*/


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