/**
 * Created by vagrant on 7/4/17.
 */
//
// var counter = 0;
// while (counter < 10)  {
//     var randNum = randomNumber(6);
//     console.log(counter);
//     document.write(randNum + ' ');
//     counter += 1;
//
// }

var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

//Create a random number from 1 to 10000. This is the number computer needs to guess

function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
}

//Enter a while loop - inside this loop the computer will guess a random number.
//If the number the computer guesses matches the number generated at the beginning of the program the loop ends.
//if not valid the loop continues until the correct number is guessed.

while (guess !== randomNumber) {
    guess = getRandomNumber(upper);
    attempts += 1;
}

//Exit the loop and print the random number and number of times it took the computer to guess it.
document.write("<p>The random number was " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + "attempts to get it right</p>");


