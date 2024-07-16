/*
    Une fonction using (Factory) retourne un simple objet (prototype = Object)
    Le mot clé "new" n'est pas nécessaire
    Attention : contrairement à une constructeur, this ne fait pas référence à l'objet retourné
*/

// Patron Factory
function LoggerFactory(base) {
  let _history = base; // variable privée
  return {
    lastLog() {
      return _history[_history.length - 1];
    },
    addLog(newInput) {
      _history.push(newInput);
    },
  };
}

const logger = LoggerFactory([1, 2, 3]);
console.log(logger.lastLog()); //3
logger.addLog(12);
console.log(logger._history); // undefined
console.log(logger.lastLog()); // 12
console.log(logger.constructor); // la fonction Object()

// Avec un Constructeur
function Logger(base) {
  let _history = base;
  this.lastLog = function () {
    return _history[_history.length - 1];
  };
  this.addLog = function (newInput) {
    _history.push(newInput);
  };
}

const functionLogger = new Logger([1, 2, 3]);
console.log(functionLogger.lastLog()); //3
functionLogger.addLog(12);
console.log(functionLogger._history); // undefined
console.log(functionLogger.lastLog()); // 12
console.log(functionLogger.constructor); // la fonction Logger()
