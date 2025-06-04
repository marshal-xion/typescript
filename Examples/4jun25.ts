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