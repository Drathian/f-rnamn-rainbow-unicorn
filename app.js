let animalArray = ["apa", "orangutang", "gorilla", "get", "giraff"];
function greet(person) {
    return `Hello ${person.name}! ${person.name} is ${person.age} years old, student: ${person.isStudent}`;
}
let student1 = { name: "Alexander", age: 21, isStudent: true };
console.log(greet(student1));
