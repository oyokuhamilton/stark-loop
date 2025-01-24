class Stark {
static loop(data, callback) {
  if (Array.isArray(data)) {
    // Loop through arrays
    let i = 0;

    function next() {
      if (i < data.length) {
        callback(data[i], i); // Pass the item and its index
        i++;
        next();
      }
    }

    next(); // Start the loop
  } else if (typeof data === "object" && data !== null) {
    // Loop through objects
    const keys = Object.keys(data);
    let i = 0;

    function next() {
      if (i < keys.length) {
        const key = keys[i];
        callback(key, data[key]); // Pass the key and its value
        i++;
        next();
      }
    }

    next(); // Start the loop
  }
}
}
module.exports = Stark;