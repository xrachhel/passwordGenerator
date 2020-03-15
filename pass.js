// Create password
function passwordButton() {
        var userLength = prompt("How long would you like your password to be? (Choose between 8-128 characters)")
        // If password is too short/long, prompt user to enter a length within range
        if (userLength < 8 || userLength > 128) {
            var userLength = prompt("Please enter a number between 8 to 128")
        }
        // Ask user what type of characters they would like password to contain
        if(userLength >= 8 || userLength <= 128) {
            var special = confirm("Would you like it to contain special characters?")
            var number = confirm("Would you like it to contain numeric characters?")
            var lowerCase = confirm("Would you like it to contain lowercase characters?")
            var upperCase = confirm("Would you like it to contain uppercase characters?")
            // If none are chosen, users prompted to choose again
            if (special === false && number === false && lowerCase === false && upperCase === false) {
                alert("Please pick at least one character type")
                var special = confirm("Would you like it to contain special characters?")
                var number = confirm("Would you like it to contain numeric characters?")
                var lowerCase = confirm("Would you like it to contain lowercase characters?")
                var upperCase = confirm("Would you like it to contain uppercase characters?")
            }
            // Conditional statements for different combinations of character types
            else if (special === true && number === false && lowerCase === false && upperCase === false) {
                function makepassword(length) {
                    var result = "";
                    var characters = "!#$%&^@*()+-_{}[]`~/|<>";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === false && number === true && lowerCase === false && upperCase === false) {
                function makepassword(length) {
                    var result = "";
                    var characters = "1234567890";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === false && number === false && lowerCase === true && upperCase === false) {
                function makepassword(length) {
                    var result = "";
                    var characters = "abcdefghijklmnopqrstuvwxyz";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === false && number === false && lowerCase === false && upperCase === true) {
                function makepassword(length) {
                    var result = "";
                    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === true && number === true && lowerCase === false && upperCase === false) {
                function makepassword(length) {
                    var result = "";
                    var characters = "!#$%&^@*()+-_{}[]`~/|<>1234567890";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === true && number === false && lowerCase === true && upperCase === false) {
                function makepassword(length) {
                    var result = "";
                    var characters = "!#$%&^@*()+-_{}[]`~/|<>abcdefghijklmnopqrstuvwxyz";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === true && number === false && lowerCase === false && upperCase === true) {
                function makepassword(length) {
                    var result = "";
                    var characters = "!#$%&^@*()+-_{}[]`~/|<>ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === false && number === true && lowerCase === true && upperCase === false) {
                function makepassword(length) {
                    var result = "";
                    var characters = "1234567890abcdefghijklmnopqrstuvwxyz";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === false && number === true && lowerCase === false && upperCase === true) {
                function makepassword(length) {
                    var result = "";
                    var characters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === false && number === false && lowerCase === true && upperCase === true) {
                function makepassword(length) {
                    var result = "";
                    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === true && number === true && lowerCase === true && upperCase === false) {
                function makepassword(length) {
                    var result = "";
                    var characters = "!#$%&^@*()+-_{}[]`~/|<>1234567890abcdefghijklmnopqrstuvwxyz";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === true && number === true && lowerCase === false && upperCase === true) {
                function makepassword(length) {
                    var result = "";
                    var characters = "!#$%&^@*()+-_{}[]`~/|<>1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === true && number === false && lowerCase === true && upperCase === true) {
                function makepassword(length) {
                    var result = "";
                    var characters = "1#$%&^@*()+-_{}[]`~/|<>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === false && number === true && lowerCase === true && upperCase === true) {
                function makepassword(length) {
                    var result = "";
                    var characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            }
            else if (special === true && number === true && lowerCase === true && upperCase === true) {
                function makepassword(length) {
                    var result = "";
                    var characters = "1#$%&^@*()+-_{}[]`~/|<>1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }
                document.getElementById("userpass").textContent = makepassword(userLength);
            };
        };
    };

// Copy created password to clipboard
function copyClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("userpass"))
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Copied your new password!")
};




