let animalArray: string [] = ["apa", "orangutang", "gorilla", "get", "giraff"];

interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

function greet(person: Person) {
    return `Hello ${person.name}! ${person.name} is ${person.age} years old, student: ${person.isStudent}`;
}

let student1: Person = {name: "Alexander", age: 21, isStudent: true};

console.log(greet(student1));
