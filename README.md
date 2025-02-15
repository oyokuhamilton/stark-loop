Stark Loop is a fully **custom looping utility** for JavaScript that does **not** rely on built-in loops (`for`, `while`, `forEach`). Instead, it uses **recursion** to iterate over arrays and objects in a unique way.

## Features

✅ **No built-in loops** (pure recursion-based iteration)  
✅ **Supports both arrays & objects** seamlessly  
✅ **Consistent callback parameters** → `(value, key/index)`  
✅ **Encapsulated in a static OOP class** for modularity  
✅ **Predictable behavior** (stores keys upfront to avoid modification issues)  

## Installation

You can install Stark Loop via **NPM**:

```sh
npm install stark-loop
```

## Usage

### Importing the Package

```javascript
const StarkLoop = require('stark-loop');
```

### Iterating Through an Array

```javascript
StarkLoop.iterate([10, 20, 30], (value, index) => {
  console.log(value, index);
});
```
**Output:**
```
10 0
20 1
30 2
```

### Iterating Through an Object

```javascript
StarkLoop.iterate({ a: 100, b: 200 }, (value, key) => {
  console.log(value, key);
});
```
**Output:**
```
100 a
200 b
```

## Why Stark Loop?
Unlike traditional loops (`for`, `while`, `forEach`), Stark Loop offers:
- **Custom iteration logic** → No dependency on JavaScript's built-in looping constructs.
- **Consistency** → Always returns `(value, key/index)`, whether iterating over arrays or objects.
- **Predictability** → Stores keys at the beginning to prevent runtime issues if data changes inside the callback.
- **OOP-based approach** → Modular and reusable for large-scale projects.

## Contribution
Feel free to contribute by opening issues or pull requests on GitHub!

## License
ISC License.

