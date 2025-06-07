let car = {
  make: "toyota",
  model: "camry",
  year: 2020,
  start: function(){
    return `${this.make} car got started in  ${this.year}`;
  },
};

function Person(name,age){
  this.name = name;
  this.age = age;
}
let jhon = new Person("Jhone",20);
console.log(jhon.name);

function Animal(type){
  this.type=type
}
Animal.prototype.speak=function(){
  return `${this.type} make a sound`
}

Array.prototype.prince = function name(){
  return `Custom methos ${this}`
}
let myArray = [1, 3, 6, 9];
console.log(myArray.prince());

let myNewArray = [1, 3, 5, 7, 9, 5];
console.log(myNewArray.prince());

class Vehicle{
  constructor(make,model){
    this.make= make;
    this.model=model;
  }
  start(){
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle{
  drive(){
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne.make);


//Encapsulation

class BankAccount{
  #balance = 0;

  deposit(amount  ){
    this.#balance += amount;
    return this.#balance;
  }
  getBalance(){
    return `${this.#balance}`;
  }
}

let account  = new BankAccount()
console.log(account.getBalance());


// Abstraction

class CoffeMachine{
  start(){
    //cal DB
    //filter value
    return `Starting the machine...`;
  }
  browCoffee(){
    //complex calculation
    return `Brewing coffee`;
  }
  pressStartButton(){
    let msgone = this.start();
    let msgTwo = this.browCoffee();
    return `${msgone} + ${msgTwo}`
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.browCoffee());
console.log(myMachine.pressStartButton());



// Polomorphism 


class Bird{
  fly(){
    return `Flying.....`;
  }
}

class Penguin extends Bird{
  fly(){
    return `penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// static method

class Calculator{
  static add(a,b){
    return a+b;
  }
}

// let miniCalc = new Calculator()
// console.log(miniCalc.add(2,3));

console.log(Calculator.add(2,4));


//Getters and setters

class Employee{
  #salary;
  constructor(name, salary){
    if(salary < 0){
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary(){
    return `You are not allowed to see salary`;
  }
  set salary(value){
    if(value < 0){
      console.error("Invalid Salary");
    }
    else{
      this._salary = value;
    }
  }
}

let emp = new Employee("Alice", 50000);
console.log(emp._salary);
emp.salary = 60000;

