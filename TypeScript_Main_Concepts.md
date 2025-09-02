## Main Concepts in TypeScript

###  Variable Declarations
- **var** → Function scoped, can be re-declared & updated (avoid in modern code).  
- **let** → Block scoped, can be updated but not re-declared.  
- **const** → Block scoped, cannot be re-declared or updated (used for constants, arrays, objects).  

### Arrays
- Ordered collection of elements.  
```let arr: number[] = [1, 2, 3];```

### Objects
- Key-value pairs.
```let person: { name: string; age: number } = { name: "Ali", age: 25 };```

### Array Methods

- map() → Transforms array elements and returns a new array.
- ilter() → Returns a new array with elements that meet a condition.
- forEach() → Iterates through the array but does not return a new array.

```
let arr: number[] = [1, 2, 3];
let doubled = arr.map(num => num * 2); // [2, 4, 6]
let even = arr.filter(num => num % 2 === 0); // [2]
arr.forEach(num => console.log(num)); // 1, 2, 3
```
  

