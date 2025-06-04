//tsc .\4jun25.ts --target ES2015 --lib ES2015,DOM
//Iterators and Generators
class NumberIterator {
    constructor(start, max) {
        this.current = start;
        this.max = max;
    }
    next() {
        if (this.current <= this.max) {
            return { value: this.current++, done: false };
        }
        return { value: undefined, done: true };
    }
}
const iter = new NumberIterator(1, 3);
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: undefined, done: true }
const add = (x, y) => x + y;
console.log(add(2, 3)); // Output: 5
const subtract = (x, y) => x - y;
console.log(subtract(5, 3)); // Output: 2
function mapArray(arr, fn) {
    return arr.map(fn);
}
const numbers = [1, 2, 3];
const strings = mapArray(numbers, (n) => n.toString());
console.log(strings); // Output: ["1", "2", "3"]
const doubled = mapArray(numbers, (n) => n * 2);
console.log(doubled); // Output: [2, 4, 6]
const log1 = (message, ...args) => {
    console.log(message, ...args);
};
log1("Error", 404, "Not Found"); // Output: Error 404 Not Found
log1("Info"); // Output: Info
