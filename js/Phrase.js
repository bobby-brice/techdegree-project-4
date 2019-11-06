/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

     /**
      * Display phrase on game board
      */
     addPhraseToDisplay() {
     
        let addHTML = '';
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === ' ') {
                addHTML += `<li class='space'> </li>`;
            }
            else {
                addHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            }
        }
        document.querySelector('div#phrase ul').innerHTML = addHTML;
     };

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
     checkLetter(letter) {
        
     }

     /**
      * Displays passed letter on screen after a match is found
      * @param (string) letter - Letter to display
      */
     showMatchedLetter() {
         
     }
 }