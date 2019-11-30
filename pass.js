confirm("Hi! Welcome to the password generator! Are you ready to create a new password?")

var length = prompt("How long would you like your password to be? (Choose between 8-128 characters)")
if(length < 8 || length > 128){
    var length = prompt("Please enter a number between 8 to 128")
}

var special = confirm("Would you like it to contain special characters?")
var number = confirm("Would you like it to contain numeric characters?")
var lowerCase = confirm("Would you like it to contain lowercase characters?")
var upperCase = confirm("Would you like it to contain uppercase characters?")
if(special === false && number === false && lowerCase === false && upperCase === false){
    alert("Please pick at least one character type")
    var special = confirm("Would you like it to contain special characters?")
    var number = confirm("Would you like it to contain numeric characters?")
    var lowerCase = confirm("Would you like it to contain lowercase characters?")
    var upperCase = confirm("Would you like it to contain uppercase characters?")
}