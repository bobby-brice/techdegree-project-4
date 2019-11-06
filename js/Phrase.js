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
        for (let i = 0; i < this.phrase.length; i++) { //loop through the phrase
            if (this.phrase[i] === ' ') { // if the phrase has a space, add html with a space
                addHTML += `<li class='space'> </li>`;
            }
            else { //otherwise add the letter in the phrase
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
         const phrase = this.phrase.split(''); //changes phrase to string of letters
         let phraseVal = phrase.includes(letter); //if the phrase includes the letter, return it
         return phraseVal;
       
     }

     /**
      * Displays passed letter on screen after a match is found
      * @param (string) letter - Letter to display
      */
     showMatchedLetter(letter) {
         const ul = document.querySelector('ul');
         const li = ul.querySelectorAll('.hide');

         li.forEach(element => {
             if (letter == element.innerHTML) { //if the li element is equal to the contents of elements html
                 element.setAttribute('class', 'show letter'); //add a class of show
             }
         });
     }
 }