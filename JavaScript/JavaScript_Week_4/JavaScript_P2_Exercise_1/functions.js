// Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number.
function multiply(num1, num2, num3) {
  if (num1 === num2 || num1 === num3 || num2 === num3) {
    return "Numbers must not be the same";
  }

  return num1 * num2 * num3;
}

// Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***
const convertToSeconds = function(minutes) {
  return minutes * 60;
};

console.log(convertToSeconds(5));

// Create a function called fahrenheitToCelsius that takes the temperature as an parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(77));

// Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("JaveScript"));

// Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a console.log() inside of the function***
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("JavaScript"));

// Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Testing with 4 numbers
console.log(isPrime(2));     // true
console.log(isPrime(10));    // false
console.log(isPrime(17));    // true
console.log(isPrime(21));    // false