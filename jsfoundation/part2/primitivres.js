// number

let balance = 120
let anotherBalance = new Number(120)

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof(balance));
// console.log(typeof(anotherBalance));

// boolean

let isActive = true
let isReallyActive = new Boolean(true) // not recommeneded

// null and undefined

let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);

// string

let myString = "Hello"
let myString1 = 'Hola'
let username = 'Prince'
let oldGreet = myString +" "+ "Prince";
console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${2 * 2}`;
console.log(demoOne);

console.log(greetMessage);

let sm1 = Symbol("Prince");
let sm2 = Symbol("Prince");
console.log(sm1 == sm2);

