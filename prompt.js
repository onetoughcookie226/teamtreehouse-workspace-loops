/**
 * Created by vagrant on 7/5/17.
 */
//Open up a prompt dialogue and asks for users email address
var input;
var correctInput = "sesame"
var valid = false;
//pup open the prompt until the answer is valid
do {
    input = prompt ("Please enter your email address");
    if (input === correctInput) {
        valid = true;
    }
} while (!valid)
 //Exit the loop and print a message
 document.write ("<p>You've got it!!</p>");


