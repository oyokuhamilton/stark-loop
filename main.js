class StarkLoop {
  static iterate(data, callback) {
    const keys = Object.keys(data); // Store keys upfront to prevent modification issues
    let i = 0;

    function next() {
      if (i < keys.length) {
        callback(data[keys[i]], keys[i]); // Always (value, key/index)
        i++;
        next(); // Recursive call
      }
    }

    next();
  }
}

module.exports = StarkLoop;