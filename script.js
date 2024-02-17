const alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H","I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z"
]

function rot13(str) {
    // create accumulator 
    let accumulator = "";
    // loop through string

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const isLetter = alphabet.includes(char)
        if (isLetter === false) {
            accumulator += char
        } else {
           const charIndex = alphabet
           .findIndex((c) => c === char); 

           accumulator += alphabet[charIndex + 13] ||
           alphabet[charIndex - 13];
        }

    } return accumulator
        //if char is not letter, add to acc
        //else rotate + or - 13 places, add to acc
        //return acc
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  