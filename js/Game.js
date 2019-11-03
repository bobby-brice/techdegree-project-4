/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor (missed, phrases, activePhrase,) {
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase;
     }
     startGame() {
        //hides the start screen overlay
        this.getRandomPhrase();
        this.addPhraseToDisplay();
     }
     getRandomPhrase() {
        //randomly retrieves one of the phrases stored in the phrases array and returns it
     }
     handleInteraction() {
        //checks to see if the button clicked by the player matches a letter in the phrase and then directs the game based on a correct or incorrect guess

        //should disable the selected letters on screen keyboard

        //IF incorrect guess - add .wrong css class to the selected letter keyboard button and call remove life

        this.removeLife();

        //IF correct add the .chosen class
        this.showMatchedLetter();
        this.checkForWin();

        //If the player has won the game, call
        this.gameOver();
     }
     removeLife() {
        //removes a life from the scoreboard by replacing one o the liveHeart.png images with a lostHeart.png
        //increments the missed property
        //5 missed guesses calls the 
        this.gameOver();
     }
     checkForWin() {
        //checks if player has revealed all of the letters in the active phrase
     }
     gameOver() {
        //displays the original start screen overlay
        //updates the h1 element with a friendly win or lose message
        //replaces start css class with either win or lose css class
     }
 }