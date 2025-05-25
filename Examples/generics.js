var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("1) ==========T parameter=========");
//T is a type parameter
function getValue(item) {
    return item;
}
//we can call with any type
var stringcall = getValue("hello");
var numbercall = getValue(5);
var nulla = getValue(null);
var undef = getValue(undefined);
console.log(stringcall);
console.log(numbercall);
console.log(nulla);
console.log(undef);
// Generics are type safe else we can use any type to ignore generics that will loose type safety.
console.log("2) ===========T[] array parameter=============");
function getFirstElement(item1) {
    return item1[0];
}
var stringarr = getFirstElement([1, 2, 3]);
var numarr = getFirstElement(["a", "b", "c"]);
console.log(stringarr);
console.log(numarr);
console.log("3) ===========Generic constraints=============");
//When you use generics, sometimes you want to restrict the types that can be passed in.
// This is where extends comes in.
//tells that t must be an object that has length property of type number
function logLength(item) {
    return item.length;
}
console.log(logLength('hello')); // fine
console.log(logLength([1, 2, 3])); // fine
//logLength(42);       //  Error: number doesn't have a `length`
console.log(logLength({ length: 10 })); //fine custom object with length property
function greet(person) {
    return "Hello, ".concat(person.name, ", age ").concat(person.age);
}
console.log(greet({ name: "Alice", age: 30 })); // fine
//greet({ name: "Bob" });            //  Missing age
// constraint to keyof (object property keys)
function getProperty(obj, key) {
    return obj[key];
}
var user = { id: 1, username: "john" };
console.log(getProperty(user, "id")); // fine
console.log(getProperty(user, "username")); //fine
//getProperty(user, "email");    // Error: 'email' is not in user
//constraint to array like objects
function firstElement(arr) {
    return console.log(arr[0]);
}
var first = firstElement([10, 20, 30]); // 10
//This enforces that the input is an array and allows you to safely return the first element.
//constraint with union types
function formatStatus(status) {
    return "Status is: ".concat(status);
}
formatStatus("success"); // fine
//formatStatus("loading"); //  not allowed
//You’re limiting the input to a specific set of strings — 
// useful in status handling, roles, etc.
//constraint to base class
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog1;
}(Animal));
function makeItMove(creature) {
    creature.move(); // safe to call
}
makeItMove(new Dog1()); // fine
//makeItMove({});            //Error: Not an Animal
//This ensures that only subclasses of Animal can be used.
