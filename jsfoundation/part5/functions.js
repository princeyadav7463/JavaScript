/*
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"making green tea"` when called with `"green tea"`.Store the result in a variable named `teaorder`.
*/ 
/*
function makeTea(typeOfTea){
console.log(typeOfTea);
return `Marking ${typeOfTea}`;
console.log(test);
}
let teaorder = makeTea("lemon tea");
// console.log(teaorder);
 */

/*
2. Create a function named `orderTea' that takes one parameter, `teaType`. Inside this function, create anohter function named `confirmOrder` that ruturns a message like `"Order confinrmed for chai"`.
Call `confimOrder` from within `orderTea` and return the result.

*/ 
/*
function orderTea(teaType){
  function confimOrder(){
    return `Order confirmed for chai`;
  }
  return confimOrder()
}
let orderConfirmation = orderTea("Chai");
console.log(orderConfirmation);

*/


/*
3. Write an ARROW FUNCTION named `calculateTotal` that takes two parameters: `price` and quantity`. The function should return the total cost by multiplying the `price` and `quantity`. sotre the result in a variable named `totalCost`.

*/ 
/*
function calculateTotal=(price, quantity) => price * quantity

let totalCost = calculateTotal(499*100);
*/

/*
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`/
Return the result of calling `makeTea`.
*/ 

/*
function makeTea(typeOfTea){
  return `makestea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction){
  return teaFunction('earl grey')
}
let order = processTeaOrder(makeTea)
console.log(order);

*/

/* 
5. Write a function named `createTeaMaker` that returns antoher function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`, Store the returned function in  a variable named `teaMaker` and call it with `"green tea"`.
*/ 

function createTeaMaker(name){
  let score = 100
  return function(teaType){
    return `Making ${teaType} ${name}  ${score}`;
  };
}

let teaMaker = createTeaMaker("Prince");
let result = teaMaker("Green tea");
console.log(result);

