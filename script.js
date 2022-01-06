
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
     // Length must be greater than 8
    if (passwordLength < 8) {
      alert("Sorry, that's too short :( Password must be at least 8 characters");
      return "";
    }
    // Length must be less than 128
    if (passwordLength > 128) {
      alert("Sorry, that's too big :( Password must be at less than 128 characters");
      return "";
    }
    chars = "";
    // Lowercase characters
    if (confirm("Would you like to use lowercase characters? To proceed without lowercase characters select Cancel.")) {
      chars += "qwertyyuiopasdfghjklzxcvbnm";

    }
    // Uppercase characters
    if (confirm("Would you like to use uppercase characters? To proceed without uppercase characters select Cancel.")) {
      chars += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    // Numeric characters
    if (confirm("Would you like to use numeric characters? To proceed without numeric characters select Cancel.")) {
      chars += "1234567890";
    }
    // Special characters
    if (confirm("Would you like to use special characters? To proceed without special characters select Cancel.")) {
      chars += "!#$%&'()*+,-./:;<=>?@[\]\"^_`{|}~";
    }
    // Alert for blank entry
    if (chars == "") {
      alert("You must select at least one character type");
    }
  }
  // Loop to generate password
  var password = "";
  for (var i = 1; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


