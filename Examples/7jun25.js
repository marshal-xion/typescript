//tsc .\7jun25.ts --target ES2015 --lib ES2015,DOM
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("Basic Function Declaration");
function calculateSum(a, b) {
    return a + b;
}
;
console.log(calculateSum(2, 5));
console.log("Function Expression");
const multiplyNumbers = function (x, y) {
    return x * y;
};
console.log(multiplyNumbers(2, 5));
console.log("Arrow Function");
const divideNumbers = (a, b) => a / b;
console.log(divideNumbers(10, 2));
console.log("Function with Optional Parameter");
function greetUser(name, greeting) {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}
console.log(greetUser("Alice"));
console.log(greetUser("Bob", "Welcome"));
console.log("Function with Default Parameter");
function welcomeMessage(name, message = "Hi") {
    return `${message}, ${name}!`;
}
console.log(welcomeMessage("Charlie"));
console.log(welcomeMessage("Dave", "Greetings"));
console.log("Rest Parameters");
function sumAllNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 5);
}
console.log(sumAllNumbers(1, 2, 3, 4));
console.log("Function Overloading");
function combineInputs(a, b) {
    return a + b;
}
console.log(combineInputs(2, 3));
console.log(combineInputs('hello', ' there'));
console.log("Function with Union Types");
function displayValue(value) {
    return `value ${value}`;
}
console.log(42);
console.log("hello");
console.log("Function with Type Alias");
const subtract = (x, y) => x - y;
console.log(subtract(10, 4));
console.log("Function with Callback");
function processData(data, callback) {
    callback(data.toUpperCase());
}
processData("hello", result => console.log(result));
console.log("Async Function");
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(() => resolve("Data fetched"), 2000));
    });
}
fetchData().then(data => console.log(data));
console.log("Generator Function");
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = numberGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log("Function with Never Return Type");
function throwError(message) {
    throw new Error(message);
}
//console.log(throwError("Something went wrong")); // Throws error
console.log("Function with Void Return Type");
function logMessage(message) {
    console.log(message);
}
logMessage("Logging a message"); // Output: Logging a message
console.log("Function with Unknown Parameter");
function processUnknown(input) {
    if (typeof input === "string") {
        return input;
    }
    return "Unknown input";
}
console.log(processUnknown("Test")); // Output: Test
console.log(processUnknown(123)); // Output: Unknown input
console.log("Function with Type Assertion");
function getLength(input) {
    return input.length;
}
console.log(getLength("Hello")); // Output: 5
console.log("Function with Intersection Types");
function createAdminUser(user) {
    return `${user.name} is admin: ${user.admin}`;
}
console.log(createAdminUser({ name: "Eve", admin: true })); // Output: Eve is admin: true
console.log("Function with Literal Types");
function setStatus(status) {
    return `Status set to ${status}`;
}
console.log(setStatus("active"));
console.log("Higher-Order Function");
function wrapFunction(fn) {
    return (x) => fn(x) * 2;
}
const doubleSquare = wrapFunction(x => x * x);
console.log(doubleSquare(5));
console.log("Recursive Function");
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));
console.log("Basic Class");
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}`;
    }
}
const person = new Person("Frank");
console.log(person.greet());
console.log("Class with Public and Private Members");
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
const emp = new Employee(1, "Grace");
console.log(emp.getDetails());
console.log("Class with Protected Members");
class Manager {
    constructor(department) {
        this.department = department;
    }
}
class SeniorManager extends Manager {
    getDepartment() {
        return this.department;
    }
}
const sm = new SeniorManager("IT");
console.log(sm.getDepartment());
console.log("Class with Readonly Property");
class Product {
    constructor(productId) {
        this.productId = productId;
    }
}
const prod = new Product(101);
console.log(prod.productId);
console.log("Class with Static Members");
class Counter {
    constructor() {
        Counter.count++; // static count needs to be called with classname
    }
    static getCount() {
        return Counter.count;
    }
}
Counter.count = 0;
console.log(Counter.getCount());
new Counter();
new Counter();
console.log(Counter.getCount());
console.log("Abstract Class");
class Shape {
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}
const square = new Square(4);
console.log(square.getArea());
console.log("Class with Getters and Setters");
class UserProfile {
    constructor(username) {
        this._username = username;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        if (value.length > 0) {
            this._username = value;
        }
    }
}
const profile = new UserProfile("Helen");
profile.username = "Ivy";
console.log(profile.username);
console.log("Class Implementing Interface");
class DocumentItem {
    constructor(content) {
        this.content = content;
    }
    print() {
        return this.content;
    }
}
const doc = new DocumentItem("Report");
console.log(doc.print());
