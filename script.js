//generate character function by using Math.
var uppercase = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
var lowerCase = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
var number = function(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
var spicalChar = function (){
  var symbols ='!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random()* symbols.length)];
};

// input function (asking the user for input password length, password characters) 
var lengthInput = function (){
    // prompt the user for password length
  var userInput = window.prompt('Enter password length from 8 to 128 characters.');
  userInput = parseInt(userInput);
//check the user input
if (userInput >=8 && userInput<=128){
  window.alert('You select '+ userInput+ ' characters');
  return userInput;
  //1-if the user enter less or more than 128 
  //2-alert the user that they need to enter a valid input
  //3- recall the function
}else{
  window.alert ('Please enter a valid input');
lengthInput();
}
};

//asking the user for uppercase alphabet function
var upperInput= function(){
  //ask the user if they like to add uppercase 
  var userUppercaseIn = window.confirm('Would you like UPPERCASE characters');
  // check the return value of the user selection
  if (userUppercaseIn){
    //inform the user if the return value is true
    window.alert('you included UPPERCASE');
   return true;
    //inform the user if the return value is false
  }else{
    window.alert('you choose not to include UPPERCASE characters');
  }
return false
};


//asking the user for lowecase alphabet
var lowerInput= function(){
    //ask the user if they like to add lowercase
  var userLowercaseIn = window.confirm('Would you like lowercase characters');
   // check the return value of the user selection
  if (userLowercaseIn){
        //inform the user if the return value is true
    window.alert('you included lowercase characters');
   return true;
       //inform the user if the return value is false
  }else{
    window.alert('you choose not to include lowercase characters');
  }
return false
};

//asking the user for numbers
var numberInput= function(){
    //ask the user if they like to add numbers
  var userNumberIn = window.confirm('would you like to use numbers');
     // check the return value of the user selection
  if (userNumberIn){
      //inform the user if the return value is true
    window.alert('you included unmbers');
   return true;
     //inform the user if the return value is false
  }else{
    window.alert('you choose not to include numbers');
  }
return false
};

//asking the user for number alphabet
function symbolInput() {
   //ask the user if they like to add symbol
  var usersymbolIn = window.confirm('would you like to use spical characters');
     // check the return value of the user selection
  if (usersymbolIn) {
    //inform the user if the return value is true
    window.alert('you included spical characters');
    return true;
    //inform the user if the return value is false
  } else {
    window.alert('you choose not to include spical characters');
  }
  return false;
};
 
//create generatedPassword function to store the input function value
var generatedPassword =function() {
  var passwordLength =lengthInput();
  var isUpperCase = upperInput();
  var isLowerCase = lowerInput();
  var isNumbers = numberInput();
  var isSymbols = symbolInput();
    //ensure the user select at least one password category 
    if (isUpperCase === false && isLowerCase === false && isNumbers === false && isSymbols ===false){
      window.alert('you did not select any character type, please select at least one type.');
      upperInput();
      lowerInput();
      numberInput();
      symbolInput();
    }

    var userInput = {
      passwordLength : passwordLength,
      isUpperCase : isUpperCase,
      isLowerCase : isLowerCase,
      isNumbers: isNumbers,
      isSymbols :isSymbols
    };
    return userInput;
    }
    // function for getting a random element from an array
    function randomChar (array){
      var randIndex = Math.floor(Math.random() *array.length); 
      var randEl = array[randIndex];
      return randEl;
    }
    // function for getting a random element from an array
    var generatePassword = function() {
      var category = generatedPassword();

      // variable to store password result
      var output =[];
      //array to store types of characters that will be included in the password
      var possCharacters =[];
      // array to store one of each type of selected category to ensure each one will be used 
      var charArray =[];

      // 1- check if the generatedPassword function has UpperCase then 
      //2- add them to possArray
      //3- push it to charArray
      if (category.isUpperCase){
        possCharacters = possCharacters.concat(uppercase());
        charArray.push(randomChar(uppercase()));
      }
       //1- check if the generatedPassword function has lowerCase then 
       //2- add them to possArray
       //3- push it to charArray
      if (category.isLowerCase){
        possCharacters = possCharacters.concat(lowerCase());
        charArray.push(randomChar(lowerCase()));
      }
       //1-check if the generatedPassword function has lowerCase then 
      //2- add them to possArray
      //3- push it to charArray
      if (category.isNumbers){
        possCharacters = possCharacters.concat(number());
        charArray.push(randomChar(number()));
      }
       //1- check if the generatedPassword function has lowerCase then 
       //2- add them to possArray
       //3- push it to charArray
      if (category.isSymbols){
        possCharacters = possCharacters.concat(spicalChar());
        charArray.push(randomChar(spicalChar()));
      }
       //1- For loop to iterate over the password length from the UserInput object
       //2-selecting random indices from the array of possCharacters
       //3- contact those characters into the output variable by using the push method

       for (var i= 0; i <category.passwordLength; i++ ){
         var charactersEl = randomChar(possCharacters);
         output.push(charactersEl);
       }
       // create a for loop to mix the output characters 
       for (var i =0; i< charArray.length; i++ ) {
         output[i] =charArray[i];
       }
       // Transform the result into a string and pass into writePassword
       return ('password!');
    }
    // Assignment Code
var generateBtn = document.querySelector("#generate");
  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// all done 