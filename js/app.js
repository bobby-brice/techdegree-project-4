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
const virtualKey = document.querySelector('div#qwerty');
virtualKey.addEventListener('click', (event) => {
    if (event.target.type === 'submit') {
        game.handleInteraction(event.target);
    }
});

