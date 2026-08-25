// Create a multiline string using template literals
const aboutMe = `
Hello, my name is Imaan.
I am learning JavaScript.
Template literals make multiline strings easy to create.
`;

console.log(aboutMe);

// Create a function that uses template literals for HTML generation
function createCard(name, role) {
    return `
    <div class="card">
        <h2>${name}</h2>
        <p>${role}</p>
    </div>
    `;
}

console.log(createCard("Imaan", "Web Developer Student"));

// Convert regular functions to arrow functions

// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function version
const addArrow = (a, b) => a + b;

console.log("Regular Function Result:", add(5, 3));
console.log("Arrow Function Result:", addArrow(5, 3));

// Use arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

// Using map() with an arrow function
const doubledNumbers = numbers.map(num => num * 2);

console.log("Original Numbers:", numbers);
console.log("Doubled Numbers:", doubledNumbers);

// Additional example using filter()
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);
