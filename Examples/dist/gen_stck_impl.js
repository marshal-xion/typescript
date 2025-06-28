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
function reveerseArray(arr) {
    const stack = new Staack();
    for (const item of arr) {
        stack.push(item);
    }
    const reversed = [];
    while (!stack.isEmpty()) {
        reversed.push(stack.pop());
    }
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
