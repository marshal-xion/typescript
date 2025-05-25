console.log("1) ==========T parameter=========");

//T is a type parameter
function getValue<T>(item: T): T {
    return item;
}


//we can call with any type
const stringcall = getValue<string>("hello");
const numbercall = getValue<number>(5);
const nulla = getValue<null>(null);
const undef = getValue<undefined>(undefined);
console.log(stringcall);
console.log(numbercall);
console.log(nulla);
console.log(undef);


// Generics are type safe else we can use any type to ignore generics that will loose type safety.
console.log("2) ===========T[] array parameter=============");
function getFirstElement<T>(item1: T[]): T{
    return item1[0];
}

const stringarr = getFirstElement([1,2,3]);
const numarr = getFirstElement(["a", "b", "c"]);
console.log(stringarr);
console.log(numarr);




console.log("3) ===========Generic constraints=============");

//When you use generics, sometimes you want to restrict the types that can be passed in.
// This is where extends comes in.

//tells that t must be an object that has length property of type number
function logLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(logLength('hello')); // fine
console.log(logLength([1, 2, 3])); // fine
//logLength(42);       //  Error: number doesn't have a `length`
console.log(logLength({length: 10})); //fine custom object with length property


//constraint to an interface

interface Person {
  name: string;
  age: number;
}

function greet<T extends Person>(person: T): string {
  return `Hello, ${person.name}, age ${person.age}`;
}

console.log(greet({ name: "Alice", age: 30 })); // fine
//greet({ name: "Bob" });            //  Missing age


// constraint to keyof (object property keys)

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, username: "john" };

console.log(getProperty(user, "id"));       // fine
console.log(getProperty(user, "username")); //fine
//getProperty(user, "email");    // Error: 'email' is not in user


//constraint to array like objects

function firstElement<T extends any[]>(arr: T): T[0] {
  return console.log(arr[0]);
}

const first = firstElement([10, 20, 30]);  // 10
//This enforces that the input is an array and allows you to safely return the first element.




//constraint with union types

function formatStatus<T extends "success" | "error" | "pending">(status: T): string {
  return `Status is: ${status}`;
}

formatStatus("success"); // fine
//formatStatus("loading"); //  not allowed
//You’re limiting the input to a specific set of strings — 
// useful in status handling, roles, etc.




//constraint to base class

class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog1 extends Animal {
  bark() {
    console.log("Woof!");
  }
}

function makeItMove<T extends Animal>(creature: T) {
  creature.move(); // safe to call
}

makeItMove(new Dog1());     // fine
//makeItMove({});            //Error: Not an Animal
//This ensures that only subclasses of Animal can be used.