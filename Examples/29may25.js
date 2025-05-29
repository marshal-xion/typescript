/* //class for managing a library

import { email } from "zod/v4";

class Book {
    title: string;
    author: string;
    isBorrowed: boolean = true;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
        this.isBorrowed =this.isBorrowed;
    }

    borrow(): string{
        if(this.isBorrowed){
            return `${this.title} is already borrowed.`;
        }
        this.isBorrowed = true;
        return `${this.title} has been borrowed.`;
    }

    returnBook(): string {
        if(!this.isBorrowed){
            return `${this.title} is not borrowed.`;
        }
        this.isBorrowed = false;
        return `${this.title} has been returned.`;
    }
}

const book = new Book("Heelooo book","author wen");
console.log(book.borrow())
console.log(book.borrow())
console.log(book.returnBook())
console.log(book.returnBook())



//async function to fetch and parse data

interface User {
    id: number;
    name: string;
    email: string;
}

// Mock API function that returns a Promise
function fetchUserData(userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId <= 0) {
                reject(new Error("Invalid user ID"));
            }
            resolve({ id: userId, name: `User ${userId}`, email: `user${userId}@example.com` });
        }, 1000);
    });
}

async function getUser(userId: number): Promise<User | null> {
    try {
        const user = await fetchUserData(userId);
        return user;
    } catch (error) {
        console.error("Error fetching user:", error instanceof Error ? error.message : "Unknown error");
        return null;
    }
}

// Test cases
(async () => {
    console.log(await getUser(1)); // Output: { id: 1, name: "User 1", email: "user1@example.com" }
    console.log(await getUser(-1)); // Output: null (with error logged)
})();

 */
//stack datastructure
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.peek()); // Output: 2
console.log(numberStack.pop()); // Output: 2
console.log(numberStack.pop()); // Output: 1
console.log(numberStack.pop()); // Output: undefined
console.log(numberStack.isEmpty()); // Output: true
var stringStack = new Stack();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.size()); // Output: 2
console.log(stringStack.peek()); // Output: "world"
