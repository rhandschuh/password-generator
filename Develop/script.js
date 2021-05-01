document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays of characters, numbers, lower, and upcase
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["~", "&", "%", ",", "*", "+", "-", ".", "/", "<", ">", "?", "!"];

//declaring my variables
var theLength = "";
var confirmTheLowerCase;
var confirmTheUpperCase;
var confirmTheNumber;
var confirmTheSpecialCharacters;
var confirmLength;
//asking how many characters for password
function generatePassword() {
  let theLength = (prompt("How many characters for your password? Must be between 8 and 128 characters"))
  while (confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters");
    var theeLength = (prompt("How many characters for password?"));
  }
  // telling the user the amount of characters that the password will have 
  
  alert(`Your password will have ${theLength} characters`);
  
  // Determine parameters of password 
  var confirmTheUpperCase = confirm("confirm if you want numbers in password");
  var confirmTheLowerCase = confirm("confirm if you want lower case in password");
  var confirmTheNumber = confirm("confirm if you want numbers in password");
  var confirmTheSpecialCharacter = confirm("confirm if you want special characters in your password");
  // a while loop for if answer is outside the parameters 
  while (confirmTheUpperCase === false && confirmTheLowerCase === false && confirmTheNumber === false && confirmTheSpecialCharacters === false) {
    alert("must chose at least one criteria");
    var confirmTheNumber = confirm("confirm if you want numbers in password");
    var confirmTheSpecialCharacter = confirm("confirm if you want special characters in password");
    var confirmTheLowerCase = confirm("confirm if you want lower case in password");
    var confirmTheUpperCase = confirm("confirm if you want upper case in password");
  }
  
  
  //an empty string to log stuff
  var theCharacters = []
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
  console.log(theCharacters)
  for (var i = 0; i < theLength; i++) {
    aPassword = aPassword + theCharacters[Math.floor(Math.random() * theCharacters.length)];
    console.log(aPassword)
    return aPassword;
  }
}

function getInput(){
  var userInput = prompt("Please input a number between 8 and 128");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert(`Your password will be ${writePassword}`);
}

