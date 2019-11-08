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
           },
           {
              phrase: "why so serious"
           },
           {
              phrase: "Im too old for this shit"
           },
           {
              phrase: "resistance is futile"
           },
           {
              phrase: "you shall not pass"
           },
           {
              phrase: "i pity the fool"
           },
           {
              phrase: "i know kung fu"
           },
           {
              phrase: "to infinity and beyond"
           },
           {
              phrase: "Im your huckleberry"
           },
           {
              phrase: "heyyy you guys"
           },
           {
              phrase: "good morning vietnam"
           },
           {
              phrase: "Theres no place like home"
           }
        ];
        return phrases;
     };
     
     /**
      * Begins game by selecting a random phrase and displaying it to user
      */
     startGame() {

         // reset the heart image and misses
         this.missed = 0;
         const hearts = document.querySelectorAll('img');

         hearts.forEach(heart => {
            if (heart.getAttribute('src') == 'images/lostHeart.png') { //replaces the lost hearts with liveHeart
               heart.setAttribute('src', 'images/liveHeart.png')
            }
         });

         //reset the chosen and wrong class on the keyboard
         const buttons = document.querySelectorAll('button');

         buttons.forEach(button => { //iterate all the buttons to change attributes and enable button
            button.disabled = false;
            button.setAttribute('class', 'key');
         });

         //reset the li elements from the phrase element
         const ul = document.querySelector('ul');
         const li = ul.querySelectorAll('li');

         li.forEach(key => {
            ul.removeChild(key);
         });

         //starts the game and gets the random phrase
         document.getElementById('overlay').style.display = 'none';
         const phrase = new Phrase(game.getRandomPhrase().phrase); //calls a new phrase upon each start
         this.activePhrase = phrase;   //sets the state of the active phrase
         phrase.addPhraseToDisplay();
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
      * Handles onscreen keyboard button clicks
      * @param (HTMLButtonElement) button - The clicked button element
      */
     handleInteraction(button) {
        button.disabled = true;
        let keyPressed = button.innerHTML;
        let phrase = this.activePhrase.checkLetter(keyPressed);

        if (phrase == true) {
           button.setAttribute('class', 'chosen');
           this.activePhrase.showMatchedLetter(keyPressed);
           game.checkForWin();
        }
        else {
           button.setAttribute('class', 'wrong');
           game.removeLife();
        }
        if (game.checkForWin()) {
           game.gameOver(true);
        }
     }

     /**
      * Handles player interaction with physical keyboard
      * @param {Object} event event object */

      keyboardInteraction(event) {
         let button;
         const keys = document.getElementsByClassName("key");
         const letter = event.key;
         const correctKey = this.activePhrase.checkLetter(letter);

         for (const key of keys) {
            if (key.textContent == event.key) { //assigns the button to the key event
               button = key;
            }
         }

         if (button && !button.disabled) { // ensures the buttons are not disabled on key events
             button.disabled = true;

            if (correctKey == true){ //if the the key event matches the phrase letter
               button.setAttribute('class', 'chosen');
               this.activePhrase.showMatchedLetter(letter);
               game.checkForWin()
            } 
            else { 
               button.setAttribute('class', 'wrong'); //follows same logic as handleInteraction()
               game.removeLife();
               }
            if (game.checkForWin()) {
               game.gameOver(true);
            }
         }  
      }

     /**
      * Increases the value of the missed property
      * Removes a life from the scoreboard
      * Checks if player has remaining lives and ends game if player is out
      */
     removeLife() {
         const hearts = document.querySelectorAll('img');
         const health = this.missed++;

         hearts.forEach(function (heart, index){ //iterates over each heart container to see if its index matches the element img and replaces the img to lostHeart
            if (index == health) {
               heart.setAttribute('src', 'images/lostHeart.png');
            }
         });

         if (health == 4) {
            this.gameOver(this.checkForWin()); //index starts at 0 so with 5 lives we see if they have missed 4 to trigger game over
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

        
        let phrase = this.activePhrase.phrase.split(''); //breaks the phrase down into ind. letters
         phrase = phrase.filter(space => { //filter to remove spaces, otherwise the length will not match correct # of spaces to win
            return /\S/.test(space); //regex found on StackOverflow
         });  

         if (show.length == phrase.length) { //if the list items equal the filterd phrase, win = true
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
         overlay.style.display = 'flex';

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