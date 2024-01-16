let animalArray = ["apa", "orangutang", "gorilla", "get", "giraff"];
// console.log(animalArray);
for (let i = 0; i < animalArray.length; i++) {
    console.log(animalArray[i]);
}
function greet(person) {
    return `Hello ${person.name}! ${person.name} is ${person.age} years old, student: ${person.isStudent}`;
}
let student1 = { name: "Alexander", age: 21, isStudent: true };
console.log(greet(student1));
