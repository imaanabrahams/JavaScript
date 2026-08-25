// Question 1 - Sum Function
function sum(num) {

  // Check if value is a number 
  if (typeof num !== "number" || num % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;

  for (let i = 0; i <= num; i++) {
    total += i;
  }

  return total;
}

// Tests
console.log(sum(5));        // 15
console.log(sum(10));       // 55
console.log(sum("5"));      // The value passed is not a number
console.log(sum(4.5));      // The value passed is not a number

// Question 2 - Factorial Function
function factorial(num) {

  let answer = 1;
  let display = "";

  for (let i = num; i >= 1; i--) {
    answer *= i;

    display += i;

    if (i !== 1) {
      display += "+";
    }
  }

  console.log(display);  // Shows multiplication process
  return answer;
}

// Tests
console.log(factorial(4));   // 24
console.log(factorial(5));   // 120

// Question 3 Funkymath Function
function funkyMath(a, b, c, d) {

  // If 2 arguments 
  if (arguments.length === 2) {
    return a - b;
  }

  // If 3 arguments
  else if (arguments.length === 3) {
    return a + b + c;
  }

  // If 4 arguments
  else if (arguments.length === 4) {

    let firstPair = a + b;
    let secondPair = c +d;

    return firstPair / secondPair;
  }

  else {
    return "Invalid number of arguments";
  }
}

// Tests
console.log(funkyMath(10, 5));        // 5
console.log(funkyMath(2, 3, 4));      // 9
console.log(funkyMath(8, 2, 3, 5));   // 1.25

// Question 4 - Remove odd numbers from array
let numbers = [1, 2, 33, 45, 6, 44];

let oddNumbers = [];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {

  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  } else {
    evenNumbers.push(numbers[i]);
  }
}

// Aarrange odd numbers from smallest to biggest
oddNumbers.sort(function(a, b) {
  return a - b;
});

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

// Question 5 - Object 'ME'
let me = {
  firstName: "Imaan",
  lastName: "Abrahams",
  age: 23,
  favouriteColour: "Green",
  dreamCar: "Nissan GTR r34"
};

// Add favourite food
me.favourtieFood = "Pasta";

// Delete age property
delete me.age;

console.log(me);