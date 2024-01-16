let animalArray: string [] = ["apa", "orangutang", "gorilla", "get", "giraff"];

// console.log(animalArray);

for (let i = 0; i < animalArray.length; i++) {
    console.log(animalArray[i]);
}

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
