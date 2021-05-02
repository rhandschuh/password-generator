document.querySelector("#generate").addEventListener("click", generatePassword);

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialCharacters = ["~", "&", "%", ",", "*", "+", "-", ".", "/", "<", ">", "?", "!"];

function getLength() {
    const length = parseInt(prompt("how long should it be?"));
    if (isNaN(length)) {
        alert("Um. put in a number dumby")
        return getLength();
    }
    else {
        if (length <= 8 || length >= 128) {
            alert("must be greater than 8 or less than 128")
            return getLength();
        }
        else {
            return length;
        }
    }

}

function verifyParametersAndGenerateOptionsString () {
    const confirmTheUpperCase = confirm("confirm if you want upper case in password");
    const confirmTheLowerCase = confirm("confirm if you want lower case in password");
    const confirmTheNumber = confirm("confirm if you want numbers in password");
    const confirmTheSpecialCharacter = confirm("confirm if you want special characters in your password");
    // a while loop for if answer is outside the parameters 
    while (confirmTheUpperCase === false && confirmTheLowerCase === false && confirmTheNumber === false && confirmTheSpecialCharacters === false) {
      alert("must chose at least one criteria");
        return verifyParametersAndGenerateOptionsString();
    }    
    let theCharacters = []
    //to merge everything 
    if (confirmTheNumber) {
      theCharacters = theCharacters.concat(number)
    }
    
    if (confirmTheSpecialCharacter) {
      theCharacters = theCharacters.concat(specialCharacters)
    }
    
    if (confirmTheUpperCase) {
      theCharacters = theCharacters.concat(upperCase)
    }
    
    if (confirmTheLowerCase) {
      theCharacters = theCharacters.concat(lowerCase)
    }
    return theCharacters.join("");
}

// Math.floor(Math.random() * theCharacters.length)

function generatePassword() {
    const length = getLength();
    console.log("length: " + length)
    const options = verifyParametersAndGenerateOptionsString()
    console.log(options)
    let password = "";
    for (let i = 0; i < length; i++ ) {
        password+=options[Math.floor(Math.random() * options.length)]
    }
    const passwordText = document.querySelector("#password");
    passwordText.textContent = password;
}


