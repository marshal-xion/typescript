"use strict";
//class for managing a library
//import { email } from "zod/v4";
class Book {
    title;
    author;
    isBorrowed = true;
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isBorrowed = this.isBorrowed;
    }
    borrow() {
        if (this.isBorrowed) {
            return `${this.title} is already borrowed.`;
        }
        this.isBorrowed = true;
        return `${this.title} has been borrowed.`;
    }
    returnBook() {
        if (!this.isBorrowed) {
            return `${this.title} is not borrowed.`;
        }
        this.isBorrowed = false;
        return `${this.title} has been returned.`;
    }
}
const book = new Book("Heelooo book", "author wen");
console.log(book.borrow());
console.log(book.borrow());
console.log(book.returnBook());
console.log(book.returnBook());
// Mock API function that returns a Promise
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId <= 0) {
                reject(new Error("Invalid user ID"));
            }
            resolve({ id: userId, name: `User ${userId}`, email: `user${userId}@example.com` });
        }, 1000);
    });
}
async function getUser(userId) {
    try {
        const user = await fetchUserData(userId);
        return user;
    }
    catch (error) {
        console.error("Error fetching user:", error instanceof Error ? error.message : "Unknown error");
        return null;
    }
}
// Test cases
(async () => {
    console.log(await getUser(1)); // Output: { id: 1, name: "User 1", email: "user1@example.com" }
    console.log(await getUser(-1)); // Output: null (with error logged)
})();
//stack datastructure
class Stack {
    items = [];
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.peek()); // Output: 2
console.log(numberStack.pop()); // Output: 2
console.log(numberStack.pop()); // Output: 1
console.log(numberStack.pop()); // Output: undefined
console.log(numberStack.isEmpty()); // Output: true
const stringStack = new Stack();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.size()); // Output: 2
console.log(stringStack.peek()); // Output: "world"
