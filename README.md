Here’s the updated README tailored for your `stark-loop` package:

# stark-loop

**stark-loop** is a lightweight and efficient JavaScript library for iterating over arrays and objects. With a single method, `loop`, it simplifies the process of handling arrays and objects, making your code cleaner and more intuitive.


## Installation

Install the package via [npm](https://www.npmjs.com/):

npm install stark-loop


## Usage

### Importing the Library

To use **stark-loop** in your project, require it as follows:

```javascript
const Stark = require('stark-loop');
```

### API Documentation

#### 1. `Stark.loop(data, callback)`

The `loop` method detects whether the provided `data` is an array or an object and applies the appropriate iteration logic. 

**Parameters:**
- `data` *(Array | Object)*: The array or object to iterate over.
- `callback` *(Function)*: A function to execute during each iteration.
  - For arrays: Receives the item and its index.
  - For objects: Receives the key and its value.


#### Example: Iterating Over Arrays

When `data` is an array, the callback receives:
1. The current item.
2. The index of the current item.

**Code:**

```javascript
const Stark = require('stark-loop');

const numbers = [5, 10, 15, 20];

Stark.loop(numbers, (item, index) => {
  console.log(`Index: ${index}, Item: ${item}`);
});
```

**Output:**
```
Index: 0, Item: 5
Index: 1, Item: 10
Index: 2, Item: 15
Index: 3, Item: 20
```



#### Example: Iterating Over Objects

When `data` is an object, the callback receives:
1. The key of the current property.
2. The value of the current property.

**Code:**

```javascript
const Stark = require('stark-loop');

const user = {
  name: "John Smith",
  age: 30,
  profession: "Engineer"
};

Stark.loop(user, (key, value) => {
  console.log(`Key: ${key}, Value: ${value}`);
});
```

**Output:**
```
Key: name, Value: John Smith
Key: age, Value: 30
Key: profession, Value: Engineer
```



## Why Choose stark-loop?

- **Unified API:** One method handles both arrays and objects seamlessly.
- **Improved Readability:** Eliminates repetitive and verbose iteration logic.
- **Lightweight:** Minimal code with no external dependencies.
- **Customizable:** Works with any callback function to suit your needs.



## License

This package is licensed under the **MIT License**. You are free to use, modify, and distribute it as needed.



## Support

For any inquiries, suggestions, or feedback, contact the email associated with the package on [npm](https://www.npmjs.com/).



**Make your iteration logic simple and elegant with stark-loop!**