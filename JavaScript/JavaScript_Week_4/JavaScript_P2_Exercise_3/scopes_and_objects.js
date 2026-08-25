// Global scope variable
let globalCount = 10;

function showLocalScope() {
  // Local variable
  let localCount = 5;

  console.log("Inside function:");
  console.log("  Local Count:", localCount);
  console.log("  Global Count:", globalCount);
}

showLocalScope();

// console.log(localCount);
// This would cause an error because localCount only exists inside the function.

function modifyVariables() {
  let localCount = 20;

  // Modify global variable
  globalCount++;

  // Modify local variable
  localCount++;

  console.log("Modified values:");
  console.log("  Local Count:", localCount);
  console.log("  Global Count:", globalCount);
}

modifyVariables();

console.log("Global Count Outside Function:", globalCount);

function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;

  this.introduce = function () {
    console.log(`Hi, my name is ${this.name}. I study ${this.course}.`);
  };
}

const student1 = new Student("Imaan", 23, "Web Development");
const student2 = new Student("Abdurahman", 22, "Civil Engineering");
const student3 = new Student("Ayesha", 20, "Computer Science");

student1.introduce();
student2.introduce();
student3.introduce();

const person = {
  firstName: "Imaan",
  lastName: "Abrahams",
  address: {
    street: "20 Pilot Way",
    city: "Cape Town",
    country: "South Africa",
  },
  hobbies: {
    indoor: "Coding",
    outdoor: "Hiking",
  },
};

console.log("City:", person.address.city);
console.log("Indoor hobby:", person.hobbies.indoor);