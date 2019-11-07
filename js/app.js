/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', function () {
    game = new Game();
    game.startGame(); 
});

//event listener to handle the virual keyboard
const virtualKeyboard = document.querySelector('div#qwerty');

virtualKeyboard.addEventListener('click', (event) => {
    if (event.target.type === 'submit') {
        game.handleInteraction(event.target);
    }
});

//allowing user to use regular keyboard
document.addEventListener('keydown', function (event) {
    
    game.keyboardInteraction(event);

});

