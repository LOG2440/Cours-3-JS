// Patron Factory
function LoggerFactory(base) {
  let _history = base; // variable privée
  return {
    get latest() {
      return _history[_history.length - 1];
    },
    set latest(newInput) {
      _history.push(newInput);
    },
  };
}

const logger = LoggerFactory([1, 2, 3]);
console.log(logger.latest); //3
logger.latest = 12;
console.log(logger._history); // undefined
console.log(logger.latest); // 12
console.log(logger.constructor); // la fonction Object()

// Avec un Constructeur
function Logger(base) {
  let _history = base;
  Object.defineProperties(this, {
    "latest": {
      get: function () {
        return _history[_history.length - 1];
      },
      set: function (newInput) {
        _history.push(newInput);
      },
    },
  });
}

const functionLogger = new Logger([1,2,3]);
console.log(functionLogger.latest); //3
functionLogger.latest = 12;
console.log(functionLogger._history); // undefined
console.log(functionLogger.latest); // 12
console.log(functionLogger.constructor); // la fonction Logger()
