// Exercice : transformer cette IFFE en Class
const BankAccount = (balance) =>
  (function (copyBalance) {
    let balance = copyBalance; // Variable "privée"
    const createMessage = function () { // Méthode "privée"
      console.log(`Compte crée avec un montant de ${balance}$`);
    };
    createMessage();
    return {
      withdraw: function (amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        } else {
          return "Fonds insuffisants";
        }
      },
      deposit: function (amount) {
        if (amount >= 0) {
          balance += amount;
          return balance;
        } else {
          return "Impossible de déposer un montant négatif";
        }
      },
    };
  })(balance);

const firstAccount = BankAccount(100); // "Compte crée avec un montant de 100$"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.deposit(30)); // 110
console.log(firstAccount.createMessage); // undefined
const secondAccount = BankAccount(20); // "Compte crée avec un montant de 20$"
console.log(secondAccount.withdraw(30)); // "Fonds insuffisants"
console.log(secondAccount.deposit(-20)); // "Impossible de déposer un montant négatif"




// Solution
class BankAccountClass {
  #balance = 0;
  // pas supporté par Safari 14.1
  #createMessage() {
    console.log(`Compte crée avec un montant de ${this.#balance}$`);
  }
  constructor(balance) {
    this.#balance = balance;
    this.#createMessage();
  }
  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      return this.#balance;
    } else {
      return "Fonds insuffisants";
    }
  }
  deposit(amount) {
    if (amount >= 0) {
      this.#balance += amount;
      return this.#balance;
    } else {
      return "Impossible de déposer un montant négatif";
    }
  }
}

const classAccount = new BankAccountClass(100);
console.log(classAccount.withdraw(20)); // 80
console.log(classAccount.deposit(30)); // 110
console.log(classAccount.deposit(-20)); // "Impossible de déposer un montant négatif"
//console.log(classAccount.#balance); // SyntaxError: Usage of undeclared private name