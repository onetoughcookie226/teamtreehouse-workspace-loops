/**
 * Created by vagrant on 7/5/17.
 */
//Open up a prompt dialogue and asks for a password
var input;
var correctInput = "sesame"
var valid = false;
//pup open the prompt until the answer is valid
do {
    input = prompt ("Please enter the password");
    if (input === correctInput) {
        valid = true;
    }
//as long as the condition is true (the user has not guessed the right answer)
} while (!valid)
 //Exit the loop and print a message
 document.write ("<p>You've got it!!</p>");


