// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSymbol;
var userChoices;

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// This will start the Function
function generatePassword() {
  // Ask for user Input
  passwordLength = prompt('How many characters would you like your password? Choose between 8 and 128.');
  console.log('Password length ' + passwordLength);
  
  if(!passwordLength) {
    alert('Please enter a value :)');

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt('You must choose between 8 and 128');
    console.log('Password length ' + passwordLength);
  
  } else { 
    confirmLower = confirm('Do you want lowercase letters to be included?');
    console.log('Lower case ' + confirmLower);
    confirmUpper = confirm('Do you want uppercase letters to be included?');
    console.log('Upper case ' + confirmUpper);
    confirmNumber = confirm('Do you want numbers to be included?');
    console.log('Number ' + confirmNumber);
    confirmSymbol = confirm('Do you want symbols to be included?');
    console.log('Symbol ' + confirmSymbol);

  };

  // If no criteria is choosen
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSymbol) {
    userChoices = alert('Please choose a criteria');
  // If 4 criteria are choosen
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSymbol) {
    userChoices = lowerCase.concat(upperCase, numbers, symbol);
    console.log(userChoices);
  }
  // If 3 criteria are choosen
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmSymbol) {
    userChoices = lowerCase.concat(upperCase, symbol);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber && confirmSymbol) {
    userChoices = lowerCase.concat(numbers, symbol);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber && confirmSymbol) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // If 2 criteria are choosen
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSymbol) {
    userChoices = lowerCase.concat(symbol);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSymbol) {
    userChoices = upperCase.concat(symbol);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmSymbol) {
    userChoices = numbers.concat(symbol);
    console.log(userChoices);
  }
  // If 1 criteria is choosen
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmSymbol) {
    userChoices = symbol;
    console.log(userChoices);
  };

  // Empty variable for the password lenght
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log('Your New Password is : ' + password);
  return password;
  
}
