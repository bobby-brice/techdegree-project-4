/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases(); //add method/function later
        this.activePhrase = null;
     }

     /**
      * Creates phrases for use in game
      * @return {array} An array of phrases that could be used in the game
      */
     createPhrases() {
        const phrases = [{
              phrase: 'May the force be with you'
           },
           {
              phrase: 'Show me the money'
           },
           {
              phrase: "You can't handle the truth"
           },
           {
              phrase: 'Nobody puts Baby in a corner'
           },
           {
              phrase: "There's no crying in baseball"
           }
        ];
        return phrases;
     };
     
     /**
      * Selects random phrase from phrases property
      * @return {Object} Phrase object chosen to be used
      */
     getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
     }

     /**
      * Begins game by selecting a random phrase and displaying it to user
      */
     startGame() {

      document.getElementById('overlay').style.display = 'none';
      const phrase = new Phrase(game.getRandomPhrase().phrase);
      this.activePhrase = phrase;
      phrase.addPhraseToDisplay();

     };

     /**
      * Handles onscreen keyboard button clicks
      * @param (HTMLButtonElement) button - The clicked button element
      */
     handleInteraction(button) {
        console.log(button);
     };
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

     /**
      * Increases the value of the missed property
      * Removes a life from the scoreboard
      * Checks if player has remaining lives and ends game if player is out
      */
     removeLife() {
        //removes a life from the scoreboard by replacing one o the liveHeart.png images with a lostHeart.png
        //increments the missed property
        //5 missed guesses calls the 
        this.gameOver();
     }

      /**
      * Checks for winning move
      * @return {boolean} True if game has been won, false if game wasn't
      won
      */
     checkForWin() {
        //checks if player has revealed all of the letters in the active phrase
     }

     /**
      * Displays game over message
      * @param {boolean} gameWon - Whether or not the user won the game
      */
     gameOver(gameWon) {
        //displays the original start screen overlay
        //updates the h1 element with a friendly win or lose message
        //replaces start css class with either win or lose css class
     }
 }