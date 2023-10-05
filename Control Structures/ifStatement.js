//If the condition is true, the statement executes. If the condition is false, nothing happens.
const num = 1;

if (num > 6) {
  console.log("The number is positive.");
}

//Check if a number is positive or negative

const number = 3;

if (number > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}

//Switch Statement

let value = 5;

switch (value) {
  case 0:
    console.log("Value is 0");
    break;
  case 1:
    console.log("Value is 1");
    break;
  case 2:
    console.log("Value is 2");
    break;
  default:
    console.log("Value is greater than 2");
}

//Ternary Operator
//The ternary operator is the only JavaScript operator that takes three operands.
//The condition is evaluated as true or false.
//A question mark (?) separates our conditional from our true expression.
//A colon (:) separates our true expression from our false expression.

let numero = 10;

let result = numero >= 0 ? "Positive" : "Negative";

console.log(`The number is ${result}`);

//using For Loop to iterate for even numbers from 0 to 10

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Using Break to Exit a Loop
//The break statement terminates the current loop, switch, or label statement and
// transfers program control to the statement following the terminated statement.
//The break statement includes an optional label that allows the program to break out of a labeled statement.

let collection = ["x", "y", 3, 5, "a"];
let containsNumber = false;
for (i = 0; i < collection.length; i++) {
  if (typeof collection[i] === "number") {
    containsNumber = true;
    console.log("The number found:" + collection[i]);
    break;
  }
}
