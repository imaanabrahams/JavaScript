// CONDITIONAL STATEMENTS

// Write a condition to check if someones favourite color is red - this means you need and 'if' because the word check is there. Write a condition to see of a color is red color == red thats the answer. Write a conditional statement to check if someones favorite color is red key words- conditional statement and checl. this means that you're going to need a condition brackets in coding [] parenthesis in coding():
//if(condition) -- checks if true
//-------let person1 = "white";

//----if (person1 == red){
  //------console.log(`Their favourite color is red.`)
//------}


// Write a conditional statement to check if someones favorite color is red and if it is not mention that they are being difficult:
//-------let person1 = "white";

//----if (person1 == red){
  //------console.log(`Their favourite color is red.`)
//------}
// else{
  //  console.log(`You are a couch potato`)
  // }

// Write a conditional statement to check if someones favorite color is red and if it is not mention that they are being difficult. Make sure to check if their favourite color is black too:
//-------let person1 = "white";

//----if (person1 == red){
  //------console.log(`Their favourite color is red.`);
//------}
//---- else if(person1 =="black"){
//condole.log(`Their favourite color is black`)
//}
// else{
  //  console.log(`You are a couch potato`);
  // }

// Write a conditional statement to check if someones favorite color is red and if it is not mention that they are being difficult. Make sure to check if their favourite color is black too. Make sure to check if the person has a favourite color is black too.
//Make sure to check if the person's favourite colour is not undefined.

let person1 = "white";   // index.html
// () Parenthesis
if (person1 == "red"){
console.log("Their favourite color is red.");
}
else if(person1 =="black"){
console.log("Their favourite color is black.")
}
// You can also use (person1) or (!person1) when using an else if to find if something has no value.
else if (person1 == undefined){
  console.log("Wow this person has no favourite color.");
}
else{
 console.log("You are a couch potato.");
}


// person1 = "White"
switch (true) { //Has a key present and you cannot check for a range of values eg. person1 >= 12. And you cannot use -- person1 == "white" and person1 !=  undefined.
  case (person1 == "Red" && person1 != undefined) || 

  person1 == "Green":
    console.log("Their favourtie color is red")
    break;    // We use breaks in order to break the loop
  case "Red":
    console.log("Their favoiurite color is red")
    break;
  case "Black":
    console.log("Their favoiurite color is black")
    break;
  case undefined:
    console.log("Wow this person has no favourtie color.")
    break;
  
    default:   //else
    console.log("Your color is " + person1);
    break;
}


// let person1 = "White"

console.log(person1 == "Red"   // Condition
  ? 
  "There color is Red"    // True
  : 
  "It is not Red"       // False
);   
  // This is a ternary operator and it is used to check if something is true or false. It is a shorthand for an if else statement. The first part is the condition, the second part is the value if the condition is true, and the third part is the value if the condition is false. It saves you space but the downside is that you cannot have multiple conditions.


// LOOPS

let fruits = ["Pineapple", "Mango", "Apricot"];
    // Starting point, condition, increment/decrement
for (let i = 0;        i < fruits.length;     i++) {
    console.log(fruits[i]);
}

// Create a for loop that prints the vegetables in a number order.
// vegetables: ["Lettuce", "Tomato", "Avocado", "Carrot"]
let vegetables = ["Lettuce", "Tomato", "Avocado", "Carrot"];

for (let i = 0 ; i < vegetables.length; i++) {
  console.log(vegetables[i] + " is number " + (i+1) + " on the list.");
  // console.log(i+1 + "." + vegetables[i]);
}

// Check if there is a carrot or avocado in your list.
for (let i = 0 ; i < vegetables.length; i++) {
  if (vegetables[i] == "Carrot" || vegetables[i] == "Avocado") {
    console.log("There is a " + vegetables[i] + " in the list.");
  }
}

// Create a for of loop that prints the vegetables in a number order. The for of loop brings you to the answer quicker and it all depends on what code you want to write.
for (let a of vegetables) {
  console.log(a);
}