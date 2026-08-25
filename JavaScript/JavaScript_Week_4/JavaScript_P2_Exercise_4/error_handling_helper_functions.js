// Error Handling & Helper Functions

// Create a function that validates user input
function validateUserInput(name, age) {
  try {
    if (!name || typeof name !== "string") {
      throw new Error("Name must be valid string.");
    }
    if (typeof age !== "number" || age < 0) {
      throw new Error("Age must be a positive number.");
    }
    console.log(`User Validated: ${name}, Age: ${age}`);
  } catch (error) {
    console.error("Validation Error:", error.message);
  }
}
// Test Validation Function
validateUserInput("Imaan", 23);
validateUserInput("", 23);
validateUserInput("Abdurahmaan", -22);


// Create a function that demonstrates multiple error types
function demonstrateMultipleErrors(type) {
  try {
    if (type === "reference") {
      console.log(nonExistentVariable);
    } else if (type === "type") {
      let number = 10;
      number.toUpperCase();
    } else if (type === "custom") {
      throw new Error("This is a custom error.");
    }else {
      console.log("No error occurred.");
    }
  } catch (error) {
    console.error('${error.name}: ${error.message}');
  }
}
// Test Error Types
demonstrateMultipleErrors("reference");
demonstrateMultipleErrors("type");
demonstrateMultipleErrors("custom");
demonstrateMultipleErrors("none");


// Create a collection of helper functions for string manipulation
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function countCharacters(str) {
  return str.length;
}
// Test String Helpers
console.log(capitalizeString("hello"));
console.log(reverseString("javascript"));
console.log(countCharacters("Programming"));


// Create helper functions for array operations
function getArraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function getLargestNumber(arr) {
  return Math.max(...arr);
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// Test Array Helpers
const numbers = [1, 2, 3, 4, 5, 5, 6];

console.log("Sum:", getArraySum(numbers));
console.log("Largest:", getLargestNumber(numbers));
console.log("Without Duplicates:", removeDuplicates(numbers));