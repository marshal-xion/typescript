//tsc .\7jun25.ts --target ES2015 --lib ES2015,DOM



console.log("Basic Function Declaration");


function calculateSum(a: number, b:number): number{
    return a+b;
};
console.log(calculateSum(2,5));





console.log("Function Expression");


const multiplyNumbers = function(x: number, y: number): number{
    return x * y;
};
console.log(multiplyNumbers(2,5));





console.log("Arrow Function");


const divideNumbers = (a: number, b: number): number => a/b;
console.log(divideNumbers(10,2));





console.log("Function with Optional Parameter");

function greetUser(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}
console.log(greetUser("Alice")); 
console.log(greetUser("Bob", "Welcome"))





console.log("Function with Default Parameter");

function welcomeMessage(name: string, message: string = "Hi"): string {
    return `${message}, ${name}!`;
}
console.log(welcomeMessage("Charlie")); 
console.log(welcomeMessage("Dave", "Greetings"));





console.log("Rest Parameters");

function sumAllNumbers(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum+num, 5);
}
console.log(sumAllNumbers(1, 2, 3, 4)); 





console.log("Function Overloading");

function combineInputs(a: number, b: number): number;
function combineInputs(a: string, b:string): string;
function combineInputs(a: any, b: any): any {
    return a + b;
}
console.log(combineInputs(2,3));
console.log(combineInputs('hello', ' there'));





console.log("Function with Union Types");

function displayValue(value: string | number): string {
    return `value ${value}`;
}
console.log(42);
console.log("hello");





console.log("Function with Type Alias");

type MathOperation  = (x:number, y:number) => number;
const subtract: MathOperation = (x,y) => x-y;
console.log(subtract(10,4));





console.log("Function with Callback");

function processData(data: string, callback: (result: string) => void): void {
    callback(data.toUpperCase());
}
processData("hello", result => console.log(result));





console.log("Async Function");

async function fetchData(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Data fetched"), 2000));
}
fetchData().then(data => console.log(data)); 





console.log("Generator Function");

function* numberGenerator(): Generator<number> {
    yield 1;
    yield 2;
    yield 3;
}
const gen = numberGenerator();
console.log(gen.next().value); 
console.log(gen.next().value);





console.log("Function with Never Return Type");

function throwError(message: string): never {
    throw new Error(message);
}
//console.log(throwError("Something went wrong")); // Throws error





console.log("Function with Void Return Type");

function logMessage(message: string): void {
    console.log(message);
}
logMessage("Logging a message"); // Output: Logging a message





console.log("Function with Unknown Parameter");

function processUnknown(input: unknown): string {
    if (typeof input === "string") {
        return input;
    }
    return "Unknown input";
}
console.log(processUnknown("Test")); // Output: Test
console.log(processUnknown(123)); // Output: Unknown input





console.log("Function with Type Assertion");

function getLength(input: any): number {
    return (input as string).length;
}
console.log(getLength("Hello")); // Output: 5





console.log("Function with Intersection Types");

type Admin1 = { admin: boolean };
type User21 = { name: string };
function createAdminUser(user: User21 & Admin1): string {
    return `${user.name} is admin: ${user.admin}`;
}
console.log(createAdminUser({ name: "Eve", admin: true })); // Output: Eve is admin: true





console.log("Function with Literal Types");

function setStatus(status: "active" | "inactive"): string {
    return `Status set to ${status}`;
}
console.log(setStatus("active"));  





console.log("Higher-Order Function");

function wrapFunction(fn: (x: number) => number): (x: number) => number {
    return (x: number) => fn(x) * 2;
}
const doubleSquare = wrapFunction(x => x * x);
console.log(doubleSquare(5));  






console.log("Recursive Function");

function factorial(n: number): number {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));  





console.log("Basic Class");

class Person {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    
    greet(): string {
        return `Hello, ${this.name}`;
    }
}

const person = new Person("Frank");
console.log(person.greet());





console.log("Class with Public and Private Members");

class Employee {
    private id: number;
    public name: string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

const emp = new Employee(1, "Grace");
console.log(emp.getDetails());





console.log("Class with Protected Members");

class Manager {
    protected department: string;
    constructor(department: string){
        this.department = department;
    }
}
class SeniorManager extends Manager {
    getDepartment(): string{
        return this.department;
    }
}

const sm = new SeniorManager("IT");
console.log(sm.getDepartment()); 





console.log("Class with Readonly Property");

class Product {
    readonly productId: number;
    constructor(productId: number) {
        this.productId = productId;
    }
}
const prod = new Product(101);
console.log(prod.productId); 





console.log("Class with Static Members");

class Counter {
    static count: number = 0;
    constructor() {
        Counter.count++;  // static count needs to be called with classname
    }
    static getCount(): number {
        return Counter.count;
    }
}
console.log(Counter.getCount()); 
new Counter();
new Counter();
console.log(Counter.getCount()); 





console.log("Abstract Class");

abstract class Shape {
    abstract getArea(): number;
}

class Square extends Shape {
    side: number;
    constructor(side: number){
        super();
        this.side = side;
    }
    getArea(): number {
        return this.side * this.side;
    }
}

const square = new Square(4);
console.log(square.getArea());





console.log("Class with Getters and Setters");

class UserProfile {
    private _username: string;
    constructor(username: string) {
        this._username = username;
    }
    get username(): string {
        return this._username;
    }
    set username(value: string) {
        if (value.length > 0) {
            this._username = value;
        }
    }
}
const profile = new UserProfile("Helen");
profile.username = "Ivy";
console.log(profile.username); 





console.log("Class Implementing Interface");

interface Printable {
    print(): string;
}
class DocumentItem implements Printable {
    content: string;
    constructor(content: string) {
        this.content = content;
    }
    print(): string {
        return this.content;
    }
}
const doc = new DocumentItem("Report");
console.log(doc.print()); 