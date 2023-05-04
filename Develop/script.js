// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
var lower = "abcdefghijklmnopqrstuvwxyz".split('')
var numbers = "1234567890".split('')
var symbols = "!@#$%^&*()_+".split('')

function genPassword() {
  var pre = []
  var post = ""
  var passwordLength = prompt("How long would you like your password to be? (8-128)")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8-128.")
    genPassword()
  } else {
    if (confirm("Do you want uppercase letters in your password?")) {
      // .concat takes a value, and adds to the end of it ex: "ca".concat("t") = "cat"
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
    if (pre.length === 0) {
      alert("Please choose one type of character to generate a password.")
      genPassword()
    } else {
      for (let i = 0; i < passwordLength; i++) {
        var rando = Math.floor(Math.random() * pre.length)
        post += pre[rando]
      }
    }
    return post
  }
}

// Write password to the #password input
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)