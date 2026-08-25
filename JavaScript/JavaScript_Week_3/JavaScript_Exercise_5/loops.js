// Create an array called numbers with values 1 through 5 
let numbers = [1, 2, 3, 4, 5];

// Write a for loop that prints each number in the array 
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Write a while loop that counts down from 5 to 1 
let count = 5;

while (count >= 1) {
  console.log(count);
  count--;
}

// Create a loop that prints only even numbers from the numbers array 
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// Create a loop that calculates the sum of all numbers in the array
console.log("Sum of all numbers: " + sum);