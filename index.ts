#! /usr/bin/env node

import inquirer from "inquirer";

export const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statement
if (answer.Operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.Operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.Operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.Operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select valid operator");
}
