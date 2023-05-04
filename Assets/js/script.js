// Assigned criteria for variables. ex: a hat filled with these characters.
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
var lower = "abcdefghijklmnopqrstuvwxyz".split('')
var numbers = "1234567890".split('')
var symbols = "!@#$%^&*()_+".split('')

function genPassword() {
  var pre = []
  var post = ""
  // Added prompt for criteria wanted, so its selectable and optionable.
  var passwordLength = prompt("How long would you like your password to be? (8-128)")
  if (passwordLength < 8 || passwordLength > 128) {
    // Basically error message to follow minimum standards. 
    alert("Your password must be between 8-128.")
    genPassword()
  } else {
    if (confirm("Do you want uppercase letters in your password?")) {
      // .concat takes a value, and adds to the end of it. ex: "ca".concat("t") = "cat"
      pre = pre.concat(upper)
    }
    if (confirm("Do you want lowercase letters in your password?")) {
      pre = pre.concat(lower)
    }
    if (confirm("Do you want numbers in your password?")) {
      pre = pre.concat(numbers)
    }
    if (confirm("Do you want symbols in your password?")) {
      pre = pre.concat(symbols)
    }
    // If they do not select a character at ALL, they will get this prompt to retrieve persoanlized password. 
    if (pre.length === 0) {
      alert("Please choose one type of character to generate a password.")
      genPassword()
    } else {
      // Starting a minimum base. [0]
      for (let i = 0; i < passwordLength; i++) {
        var rando = Math.floor(Math.random() * pre.length)
        post += pre[rando]
      }
    }
    return post
  }
}

// wrote genPassword in place of password
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Added event listener to generate password. Clickable button 
generateBtn.addEventListener("click", writePassword)