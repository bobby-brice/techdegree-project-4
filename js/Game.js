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
              phrase: "You cant handle the truth"
           },
           {
              phrase: 'Nobody puts Baby in a corner'
           },
           {
              phrase: "Theres no crying in baseball"
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
         
         // reset the heart image and misses
         this.missed = 0;
         const hearts = document.querySelectorAll('img');

         hearts.forEach(heart => {
            if (heart.getAttribute('src') == 'images/lostHeart.png') {
               heart.setAttribute('src', 'images/liveHeart.png')
            }
         });

     };

     /**
      * Handles onscreen keyboard button clicks
      * @param (HTMLButtonElement) button - The clicked button element
      */
     handleInteraction(button) {
        console.log(button);

     }

     /**
      * Increases the value of the missed property
      * Removes a life from the scoreboard
      * Checks if player has remaining lives and ends game if player is out
      */
     removeLife() {
         const hearts = document.querySelectorAll('img');
         const health = this.missed++;

         hearts.forEach(function (heart, index){
            if (index == health) {
               heart.setAttribute('src', 'images/lostHeart.png');
            }
         });

         if (health == 4) {
            this.gameOver(this.checkForWin());
         }  
     }

      /**
      * Checks for winning move
      * @return {boolean} True if game has been won, false if game wasn't
      won
      */
     checkForWin() {
        //checks if player has revealed all of the letters in the active phrase
        const ul = document.querySelector('ul');
        const show = ul.querySelectorAll('.show');

        
        let phrase = this.activePhrase.phrase.split(''); 
         phrase = phrase.filter(space => {
            return /\S/.test(space);
         });  

         if (show.length == phrase.length) {
            return true;
         }
         else{
           return false;
         }  
     }

     /**
      * Displays game over message
      * @param {boolean} gameWon - Whether or not the user won the game
      */
     gameOver(gameWon) {
         const overlay = document.getElementById('overlay');
         const message = document.getElementById('game-over-message');
         overlay.style.display = 'block';

         if (gameWon == true) {
            message.innerHTML = 'You Win!';
            overlay.setAttribute('class', 'win');
            
         }
         else if (gameWon == false) {
            message.innerHTML = 'Better luck next time';
            overlay.setAttribute('class', 'lose');  
         }
     }
 }