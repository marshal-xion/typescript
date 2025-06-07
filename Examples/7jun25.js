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
console.log(throwError("Something went wrong")); // Throws error
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
