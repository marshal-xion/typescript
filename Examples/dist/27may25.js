"use strict";
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([])); // Output: 0
console.log(sumArray([5])); // Output: 5
function getActiveUsers(users) {
    return users.filter(user => user.isActive);
}
const users = [
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 30, isActive: false },
    { name: "Charlie", age: 35, isActive: true }
];
console.log(getActiveUsers(users));
let x = getActiveUsers(users);
console.log(x[0]);
console.log(x[0].name);
console.log(x[0].age);
console.log(x[1]);
console.log(x[1].name);
console.log(x[1].age);
function reverseArray(items) {
    return items.slice().reverse();
}
//  Why Use slice() Before reverse()?
//Immutability: reverse() directly modifies the original array by rearranging its elements in reverse order.
// If sparkle you want to keep the original array unchanged (which is often a good practice for predictable
// code and avoiding side effects), you need to create a copy first.How slice() Helps: The slice() method
// (with no arguments) returns a shallow copy of the entire array. This copy is a new array that you can
// safely modify without affecting the original.
console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // Output: ["c", "b", "a"]
console.log(reverseArray([true, false, true])); // Output: [true, false, true]
const uu1 = {
    name: "jane",
    greet(message) {
        console.log(`${message}, ${this.name}!`);
    },
};
const v1 = { name: "toy" };
uu1.greet.call(v1, "hello"); // output hello toy!
const User1 = {
    name: "Alice",
    greet(message, punctuation) {
        console.log(`${message}, ${this.name}${punctuation}`);
    },
};
const anotherUser1 = { name: "Bob" };
const args1 = ["Hi", "!"];
// Borrow the greet method and call it with arguments as an array
User1.greet.apply(anotherUser1, args1); // Output: Hi, Bob!
const User2 = {
    name: "Alice",
    greet(message) {
        console.log(`${message}, ${this.name}!`);
    },
};
const anotherUser2 = { name: "Bob" };
// Create a new function with 'this' bound to anotherUser2
const boundGreet = User2.greet.bind(anotherUser2);
// Call the bound function later
boundGreet("Hey"); // Output: Hey, Bob!
// Example with preset arguments
const boundGreetWithMessage = User2.greet.bind(anotherUser2, "Hello");
boundGreetWithMessage(); // Output: Hello, Bob!
