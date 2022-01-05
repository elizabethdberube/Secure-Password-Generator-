// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = (" 1234567890qwert\"yuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
var passwordLength = 12;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  if (confirm("Would you like to customize your password criteria?")) {
    passwordLength = parseInt(prompt("How many characters would like in your password?"));
    if (passwordLength < 8) {
      alert("Sorry, that's too short :( Password must be at least 8 characters");
      return "";
    }

    if (passwordLength > 128 ) {
      alert("Sorry, that's too big :( Password must be at less than 128 characters");
      return "";
    }
    chars = "";
     
    if (confirm("Would you like to use lowercase characters?")) {
      chars += "qwertyyuiopasdfghjklzxcvbnm";

    }

    // uppercase, numeric, and/or special characters
    if (confirm("Would you like to use uppercase characters?")) {
      chars += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }

    if (confirm("Would you like to use numeric characters?")) {
      chars += "1234567890";
    }

    if (confirm("Would you like to use special characters?")) {
      chars += "!#$%&'()*+,-./:;<=>?@[\]\"^_`{|}~";
    }

    if (chars == ""){
      alert("You must select at least one character type");
    }
  }

  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


