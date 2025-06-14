// Task No 1
// addTwoNumbers
// Write a function that takes two numbers and returns their sum.

function addTwoNumbers() {
  const number1 = +prompt('Enter first number:');
  const number2 = +prompt('Enter second number:');
  const sum = number1 + number2;
  alert("Your Enter NO: " + `${number1} + ${number2} = ` + sum);
}

// Task No 2
// subtractNumbers
// Create a function that takes two numbers and returns the result of the first number
// minus the second.

function subtractNumbers() {
  const No1 = +prompt('Enter first number:');
  const No2 = +prompt('Enter second number:');
  const sum = No1 - No2;
  alert("Your Enter Number: " + `${No1} - ${No2} = ` + sum);
}

// Task No 3
// multiplyNumbers
// Write a function that multiplies two numbers and returns the result.


function multiplyNumbers() {
  const No1 = +prompt('Enter first number:');
  const No2 = +prompt('Enter second number:');
  const sum = No1 * No2;
  alert("Your Enter Number: " + `${No1} x ${No2} = ` + sum);
}

// Task No 4
// divideNumbers
// Create a function that takes two numbers and returns the result of dividing the first by
// the second.

function divideNumbers() {
  const No1 = +prompt('Enter first number:');
  const No2 = +prompt('Enter second number:');
  const sum = No1 / No2;
  alert("Your Enter Number: " + `${No1} / ${No2} = ` + sum);
}

// Task No 5
// getRemainder
// Write a function that takes two numbers and returns the remainder when the first
// number is divided by the second.

function getRemainder() {
  const No1 = +prompt('Enter first number:');
  const No2 = +prompt('Enter second number:');
  const sum = No1 % No2;
  alert("Your Remainder Number: " + sum + ` \n ${No1} % ${No2} = ` + sum);
}

// Task No 6
// isPositive
// Write a function that checks if a number is positive. If it is, return "Positive",
// otherwise return "Not Positive".


function isPositive() {
  const No1 = +prompt('Enter any Random number...');
  if (No1 >= 0) {
    return alert(No1 + " Positive Number:");
  } else {
    return alert(No1 + " Not Positive Number:");
  }
}

// Task No 7
// isNegative
// Create a function that checks if a number is negative. If it is, return "Negative", else
// return "Not Negative".

function isNegative() {
  const No1 = +prompt('Enter any Random number...');
  if (No1 < 0) {
    return alert(No1 + " Negative Number:");
  } else {
    return alert(No1 + " Not Negative Number:");
  }
}

// Task No 8
// checkEven
// Write a function that takes a number and returns "Even" if the number is even,
// otherwise "Odd".

function checkEven() {
  const No1 = +prompt('Enter any Random number...');
  if (No1 % 2 == 0) {
    return alert(No1 + " Even Number:");
  } else {
    return alert(No1 + " Odd Number:");
  }
}

// Task No 9
// isEqual
// Write a function that takes two numbers and returns "Equal" if they are the same,
// otherwise "Not Equal".

function isEqual() {
  const No1 = +prompt('Enter first number:');
  const No2 = +prompt('Enter second number:');
  if (No1 === No2) {
    return alert(`${No1} & ${No2} ` + " \nBoth are Equal Numbers:");
  } else {
    return alert(`${No1} & ${No2} ` + " \nNot Equal Numbers:");
  }
}

// Task No 10
// compareNumbers
// Create a function that returns "Greater" if the first number is greater than the second,
// else return "Smaller".


function compareNumbers() {
  const No1 = +prompt('Enter first number:');
  const No2 = +prompt('Enter second number:');
  if (No1 > No2) {
    return alert(`the first No: ${No1} is Greater then ${No2} No.`);
  } else {
    return alert(`the first No:${No1} is Smaller then Second ${No2} No.`);
  }
}

// Task No 11
// getFullName
// Write a function that takes a first name and last name, and returns the full name.

function getFullName() {
  const Name1 = prompt('Enter first Name:');
  const Name2 = prompt('Enter Last Name:');
  const sum = Name1 + " " + Name2;
  alert("Your Full Name is : " + sum);
}

// Task No 12
// getGrade
// Create a function that takes a number (0–100) and returns:
// ● "Pass" if the score is 40 or more
// ● "Fail" if it is less than 40

function getGrade() {
  const No1 = +prompt('Enter Random number:');
  if (No1 >= 40) {
    return alert(`this No: ${No1} is valid (PASS)`);
  } else {
    return alert(`this No: ${No1} is Invalid (Failed)`);
  }
}

// Task No 13
// . isTeenager
// Write a function that takes an age and returns "Teenager" if the age is between 13
// and 19, otherwise return "Not a Teenager".

function isTeenager() {
  const No1 = +prompt('Enter Random Age:');
  if (No1 >= 13 && No1 <= 19) {
    return alert(`this Age: ${No1} is valid (TEENAGER)`);
  } else {
    return alert(`this Age: ${No1} is Invalid (NOT A TEENAGER)`);
  }
}

// Task No 14
// greetUser
// Write a function that takes a name and returns a greeting like "Hello, Ahmed!".

function greetUser() {
  const Name1 = prompt('Enter FUll Name:');
  alert("Asalam O alikum! " + Name1);
}

// Task No 15
// isEligibleToVote
// Create a function that takes age and returns "Eligible" if age is 18 or above,
// otherwise "Not Eligible".

function isEligibleToVote() {
  const No1 = +prompt('Enter Random Age:');
  if (No1 >= 18) {
    return alert(`this Age: ${No1} is valid (Eligible)`);
  } else {
    return alert(`this Age: ${No1} is Invalid (Not Eligible)`);
  }
}

// Task No 16
// findAbsoluteValue
// Write a function that returns the absolute value of a number (no Math.abs, use if-else
// only).

function findAbsoluteValue() {
  const No1 = +prompt('Enter any number:');
  let absValue;
  if (No1 < 0) {
    absValue = -No1;
  } else {
    absValue = No1;
  }
  alert("Absolute value is: " + absValue);
}

// Task No 17
// checkTemperature
// Write a function that takes a temperature and returns:
// ● "Hot" if temperature is above 30
// ● "Cold" if below 10
// ● "Normal" otherwise





// Task No 18
// getTriangleType
// Create a function that takes 3 sides and returns:
// ● "Equilateral" if all are equal
// ● "Isosceles" if any two are equal
// ● "Scalene" if all are different








// Task No 19
// calculateDiscountedPrice
// Write a function that takes a price and discount percentage, and returns the discounted
// price.









// Task No 20
// isPasswordValid
// Write a function that takes a password and checks if its length is 8 characters or more.
// Return "Valid Password" or "Too Short".


