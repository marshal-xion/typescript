//union 
console.log("1) =====UNION RESULTS======")
let value: string | number
value = "name"
console.log(value)  //name
value = 5
console.log(value)  //5


//type narrowing - check type at runtime to safely access members
// tools for narrowing -
// typeof, instanceof, in


console.log("2) =====TYPEOF NARROWING======")

//Use when You are narrowing union types that include primitives: 
// string, number, boolean, bigint, symbol, undefined, or function.

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // OK: id is string here
  } else {
    console.log(id.toFixed(2));    // OK: id is number here
  }
}

printId("hello") // HELLO
printId(5)  // 5.00



console.log("3) =====INSTANCEOF NARROWING======")
//You're working with objects created using class, 
// and you want to check which class it belongs to.
// You’re using class to create instances
// You want to narrow by checking an object’s prototype chain

class Dog {
    bark(){ console.log("woof")}
}
class Cat {
    meow(){ console.log("meow")}
}
function speak(pet:Dog|Cat): void {
    if (pet instanceof Dog) {pet.bark()}
    else pet.meow()
}

speak(new Dog())
speak(new Cat())



console.log("4) =====IN NARROWING======")
//You're working with object types (usually from type or interface) 
// that have different property names, and you want to narrow based 
// on which property exists.
// You're dealing with objects with different shapes
//Each type has unique property keys
//Works well with type or interface (not classes)




type Car = { drive: () => void };  // object must have a property of drive
type Boat = { sail: () => void };  // object must have a property of sail

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive(); // OK: vehicle is Car
    console.log("vroom")
  } else {
    vehicle.sail(); // OK: vehicle is Boat
    console.log("pewpew")
  }
}

const myCar: Car = { drive: () => {}}
move(myCar)

const myBoat: Boat = { sail: () => {}}
move(myBoat)

console.log("=====CUSTOM TYPE GUARDS======")

function isString(value: string | number): value is string {
  return typeof value === "string";
}

function print1(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // ✅ value is narrowed to string
  } else {
    console.log(value.toFixed(2));    // ✅ value is number
  }
}

print1("string")
print1(5)


console.log("5) =====check if admin user  (using in)======")

//check if admin user  (using in)

type Admin = {role: "admin"; accessLevel: number }
type User = {username: string}

function isAdmin(person: Admin | User) : boolean {
  return "accessLevel" in person; // checks if person object has key accesslevel
}

const admin1: Admin = { role:"admin", accessLevel: 3}
const user1: User = { username: "hello"}

console.log(isAdmin(admin1))
console.log(isAdmin(user1))

function printPerson(person: Admin | User) {
  if ("accessLevel" in person) {
    console.log(`Admin with access: ${person.accessLevel}`);
  } else {
    console.log(`User: ${person.username}`);
  }
}

const ad1: Admin = { role: "admin", accessLevel: 4}
const u1: User = {username: "meena"}

printPerson(ad1)
printPerson(u1)




console.log("6) Double Value (string = repeat, number = double)")

function doub(value: string|number): string|number {
  return typeof value === "string" ? value+value : value*2;
}
console.log(doub("hello"))
console.log(doub(5))




console.log("7. Print Value (Handle null | undefined | string")

function printVal(value: string|null|undefined): void {
  if (value == null){
    console.log("nulllaa")
  }
  else{
    console.log(value)
  }
  if(value === null) {
    console.log("its null")
  }
  else{
    if (value === undefined) {
      console.log("its undefined")
    }
    else{
      console.log("dayuuum")
    }
  }
}

printVal(null)
printVal("hello")
printVal(undefined)




console.log ("8) Custom Type guard ")
//value is string is type guarding string where if value is string 
// then it will return true (typeof value === "string")
function isString1(value: string | number): value is string {
  return typeof value === "string";
}

function log(value: string | number) {
  if (isString1(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(1));
  }
}

log("Hello")
log(5)