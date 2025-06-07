/*
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the reslut in a variable named `sum`.
*/ 
 /*
let sum =0;
let i =1;
while(i <= 5 )
{
  sum = sum + i;
  i++;
}
console.log(sum);

*/

/*
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.

*/ 

/*
let countdown = [];
let i = 5;
while(i > 0)
{
  countdown.push(i);
  i--;
}
console.log(countdown);

*/

/*
3. Write a `do-while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`.
store tach tea type in an array named `teaCollection`.
*/ 

/*
let teaCollection=[]
let tea 
do {
  prompt(`Enter Your favorite tea(type"stop" to finish)`);
  if(tea !== "stop")
  {
    teaCollection.push(tea)
  }
} while (tea !== "stop");

*/

/*
4. Wrtie a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/ 
/*
let total=0;
let i=1;
do {
  total+=i;
  i++
} while (i<=3);
*/

/*
5. Write a `for` loop that multiplies each element in the array `[2,4,6]` by 2 and stores the results in a new array named `multipliedNumber`.
*/ 

/*
let multipliedNumber=[];
let number = [2,4,6];
for(let i=0; i < number.length;i++){
 takeNumber = number[i] * 2;
 multipliedNumber.push(takeNumber);
//  multipliedNumber.push(number[l]*2);
}
console.log(multipliedNumber);
*/


/*
6. Write a `for` loop that lists all the cities in the array `["Paris", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/ 

let cities = ["Paris", "Tokyo", "London"];
let cityList=[];
for(let c=0;c<3;c++){
  const myCity = cities[c];
  cityList.push(myCity);
}
console.log(cityList);
