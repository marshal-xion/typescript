"use strict";
console.log("Generic Stack Implementation");
/* Implement a generic Stack class in TypeScript that supports
push, pop, peek, and isEmpty operations.
Ensure type safety using generics, and handle edge cases like
popping from an empty stack.
Write a function that uses the Stack to reverse a given array. */
class Staack {
    //private array to store stack items
    items = [];
    //pushes an item onto the stack
    push(item) {
        this.items.push(item);
    }
    //Removes and returns the last item (top) from the stack
    pop() {
        return this.items.pop();
    }
    //Returns the last item (top) of the stack without removing it
    peek() {
        return this.items.length > 0 ? this.items[this.items.length - 1] : undefined;
    }
    //Returns true if the stack is empty, otherwise false
    isEmpty() {
        return this.items.length === 0;
    }
    // Returns the number of items in the stack
    size() {
        return this.items.length;
    }
}
// Function to reverse an array using a generic Stack
function reveerseArray(arr) {
    // Create a new stack instance to hold the array elements
    const stack = new Staack();
    // Push each item from the original array onto the stack
    for (const item of arr) {
        stack.push(item);
    }
    // Initialize an array to store the reversed elements
    const reversed = [];
    // Pop elements from the stack and push them into the reversed array
    // This will reverse the order since a stack is LIFO (Last In, First Out)
    while (!stack.isEmpty()) {
        // It tells the TypeScript compiler: “I know this value is not null or undefined, 
        // even if the type system thinks it might be.”
        reversed.push(stack.pop());
    }
    // Return the reversed array
    return reversed;
}
const numberStaack = new Staack();
numberStaack.push(1);
numberStaack.push(1);
numberStaack.push(1);
console.log("Top Element:", numberStaack.peek()); //3
console.log("Popped", numberStaack.pop()); //3
console.log(" is empty?", numberStaack.isEmpty()); //false
const stringArray = ["a", "b", "c"];
console.log("original array", stringArray);
console.log("reversed array", reveerseArray(stringArray)); // ["c","b","a"]
