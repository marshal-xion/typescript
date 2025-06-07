//tsc .\4jun25.ts --target ES2015 --lib ES2015,DOM

//Iterators and Generators

class NumberIterator implements Iterator<number> {
  private current: number;
  private max: number;

  constructor(start: number, max: number) {
    this.current = start;
    this.max = max;
  }

  next(): IteratorResult<number> {
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


//generator

// function* numberGenerator(max: number): Generator<number, void, unknown> {
//   for (let i = 1; i <= max; i++) {
//     yield i;
//   }
// }

// const gen = numberGenerator(3);
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: false }
// console.log(gen.next()); // { value: undefined, done: true }


// call signature

type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (x, y) => x + y;

console.log(add(2, 3)); // Output: 5
// console.log(add("2", "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'


interface MathOperation1 {
  (a: number, b: number): number; // Call signature
}

const subtract1: MathOperation1 = (x, y) => x - y;

console.log(subtract1(5, 3)); // Output: 2


interface Counter {
  (start: number): number; // Call signature
  reset(): void; // Method
  value: number; // Property
}

/* const createCounter = (): Counter => {
  let count: number;
  const counter: Counter = (start: number) => {
    count = start;
    return count++;
  };
  counter.reset = () => {
    count = 0;
  };
  counter.value = 0;
  return counter;
};

const counter = createCounter();
console.log(counter(10)); // Output: 10 (sets count to 10, returns 10)
console.log(counter(0));  // Output: 10 (increments count to 11, returns 10)
counter.reset();
console.log(counter.value); // Output: 0
console.log(counter(5));   // Output: 5 (sets count to 5, returns 5) */


// interface OverloadedFunction {
//   (input: string): string; // Overload 1: string input
//   (input: number): number; // Overload 2: number input
// }

// const process: OverloadedFunction = (input: any) => {
//   if (typeof input === "string") {
//     return input.toUpperCase();
//   }
//   return input * 2;
// };

// console.log(process("hello")); // Output: HELLO
// console.log(process(5));      // Output: 10
// // console.log(process(true)); // Error: No overload matches this call


type MapFunction<T, U> = (item: T, index: number) => U;

function mapArray<T, U>(arr: T[], fn: MapFunction<T, U>): U[] {
  return arr.map(fn);
}

const numbers = [1, 2, 3];
const strings = mapArray(numbers, (n) => n.toString());
console.log(strings); // Output: ["1", "2", "3"]

const doubled = mapArray(numbers, (n) => n * 2);
console.log(doubled); // Output: [2, 4, 6]


interface Logger {
  (message: string, ...args: any[]): void;
}

const log1: Logger = (message, ...args) => {
  console.log(message, ...args);
};

log1("Error", 404, "Not Found"); // Output: Error 404 Not Found
log1("Info"); // Output: Info



/* interface Process {
  (input: string): string;
  (input: number): number;
}
const process: Process = (input: any) => (typeof input === "string" ? input.toUpperCase() : input * 2);
console.log(process("hi")); // Output: HI
console.log(process(3)); // Output: 6 */


// //interface Process {
//   (input: string): string;
//   (input: number): number;
// }

// const process: Process = (input: string | number): string | number => {
//   if (typeof input === "string") {
//     return input.toUpperCase();
//   }
//   return input * 2;
// };

// console.log(process("hello")); // Output: HELLO
// console.log(process(5)); // Output: 10


function process11(input: string): string;
function process11(input: number): number;
function process11(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input * 2;
}

console.log(process11("hello")); // Output: HELLO
console.log(process11(5)); // Output: 10



class Range1 implements Iterable<number> {
  constructor(private start: number, private end: number) {}
  [Symbol.iterator](): Iterator<number> {
    let current = this.start;
    return {
      next: (): IteratorResult<number> => {
        if (current <= this.end) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}
for (const num of new Range1(1, 3)) {
  console.log(num); // Output: 1, 2, 3
}