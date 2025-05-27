function sumArray(numbers) {
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([])); // Output: 0
console.log(sumArray([5])); // Output: 5
function getActiveUsers(users) {
    return users.filter(function (user) { return user.isActive; });
}
var users = [
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 30, isActive: false },
    { name: "Charlie", age: 35, isActive: true }
];
console.log(getActiveUsers(users));
var x = getActiveUsers(users);
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
