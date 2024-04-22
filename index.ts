#! /usr/bin/env node



import inquirer from "inquirer";
// 1) computer will generate a random number.
// 2) user input for guessing number.
// 3) compare user input with computer generated number and show result.

const randomNumber = Math.round(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "please guess a number betwwen 1 to 6",
  },
]);
if (answers.userGuessNumber === randomNumber) {
  console.log(
    "congratutation! you guessed right number " +
      answers.userGuessNumber +
      " the random number was " +
      randomNumber
  );
} else {
  console.log(
    "sorry you guseed wrong number " +
      answers.userGuessNumber +
      " the random number was " +
      randomNumber
  );
}
