# password-generator

## User story 
AS AN employee with access to sensitive data I WANT to randomly generate a password that meets certain criteria SO THAT I can create a strong password that provides greater security.

## Acceptance Criteria
## user requirement
GIVEN I need a new, secure password
## the App functionality requirement that must have 
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


## Designing the app 
## please refer to the process flow chart in the assets directory 
1- Generate character function by using Math.
2- create an input function (asking the user for input password length and password characters)
3- on each input prompt there will be an if condition to validate the input 
    3-1- in the Length input the user must select a number between 8 and 128, otherwise, we need to recall the function.
    3-2- other prompt (uppercase, lowercase, number, and special characters) an if condition will check the selection of the user and return a message of including that type of character or not. 
4- Create generatedPassword function to store and call the input function value  
5- ensure the user select at least one password category by checking the return value of the input function if all the return value is false then re-call the input function to ensure there is at least one of them is true. 
6- create an object called userInput to store the input boolean status 
7- Create a function for getting a random element from an array
8- Create a function for getting a random element from an array
9- Creating a variable to store password results, it must be empty at the beginning
10- Creating an array to store types of characters that will be included in the password
11- Creating an array to store one of each type of selected category to ensure each one will be used in the password 
12- creat if condition to check 
    12-1 check if the generatedPassword function has UpperCase then 
    12-2 add them to possArray
    12-3 push it to charArray
13- create if condition to check 
    13-1- check if the generatedPassword function has lowerCase then 
    13-2- add them to possArray
    13-3- push it to charArray
14- Create if condition to check 
    14-1- check if the generatedPassword function has lowerCase then 
    14-2- add them to possArray
    14-3- push it to charArray
15- create a for loop to 
    15-1- For loop to iterate over the password length from the UserInput object.
    15-2-selecting random indices from the array of possCharacters.
    15-3- contact those characters into the output variable by using the push method.
16- mixing the password to generate a random order by using for loop 


## Testing phase
1- the app is tested more than once with multiple users to ensure that it meets the must-have requirement. the testing result was successful, therefore the app was moved to production.

## feature to be added in the future
1- improve the GUI by allowing the user to check or uncheck the password option instead of prompting questions, which will help the user experience and reduce the response time. 
2- create a text area for the user to enter the password length. 
3- create a clipboard to copy the password 
4- Add a password vault to store each password been generated in a secure way. 