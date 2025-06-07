/*
1. Write a `for` loop that lops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`.
stops all teas before `"chai"` in a new array named `selectedTeas`.
*/ 
/*
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas=[];
for(let i=0;i<teas.length;i++)
{
   selectedTeas.push(teas[i]);
  if(teas[i]=='chai')
  {
    break;
  }
}
console.log(selectedTeas);
*/
/*
2. Write a `for` loop that loops through the array `["London", "New York", "Barlin"]` and skips `"Paris"`.
Store the other cities in a new array named `visitedCities`.

*/ 

/*
let cities = ["London", "New York", "Paris","Barlin"];
let visitedCities =[];

for(let i=0;i<cities;i++)
{
  if(cities[i] === "Parish" || cities[i] === "paris") 
  {
    continue;
  }
  visitedCities.push(cities[i])
}
console.log(visitedCities);

*/

/* 
3. Use a `for-of` loop to iterate throuh the array `[1,2,3,4,5]` and stop when the number `4` is found.
Store the numbers before `4` in an array named `smallNumbers`.
*/ 

/*
let numbers = [1,2,3,4];
let smallNumbers = [];
for(const num of numbers)
{
  if(num === 4){
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);

*/

/*
4. Use a `for-of` loop to iterate through the array `["chai","green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`.
Store the other teas in an array named `preferredTeas`.
*/ 


/*
let teaTypes =["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const tea of teaTypes) {
  if(tea === "herbal tea")
  {
    continue;
  }
  preferredTeas.push(tea);
}

/*
5. Use a `for-in ` loop to loop through an object contaning city populations.
stop the loop when the population of `"Verlin"` is found and store all previous cities` populations in a new object named `cityPopulations`.

let citiesPopulation = {
"London" : 8900000,
"New York" : 8400000,
"Paris" : 2200000,
"Barlin": 350000
};
*/

/*
let citiesPopulation = {
  London: 8900000,
  New_York : 8400000,
  Paris: 2200000,
  Barlin: 350000,
}

 let citiesNewPopulation ={};
// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  if(city == "barlin"|| city == "Barlin")
  {
    break;
  }
 citiesNewPopulation[city] =  citiesPopulation[city]
 
}
console.log(citiesNewPopulation);
*/


/*
6. Use a 'for-in' loop to loop through an object containing city populations.
skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
"sydney":5000000,
"Tokyo": 9000000,
"Berlin": 2500000,
"Paris": 2200000
};
*/ 
/*
let worldCities = {
  sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 2500000,
  Paris: 2200000,
};
let largeCities={};
for (const city in worldCities) {
 if(worldCities[city] < 3000000)
 {
  continue;
 }
 largeCities[city] = worldCities[key];
}
*/


/*
7. Write a `forEach` loop that iterates through the array `["earl grey","green tea", "Chai", "oolong tea"]`.
Stop the loop when `"Chai"` is found, is found, and store all previous tea types in an array named `availableTeas`.
*/ 

/*
let teaCollection = ["earl grey", "green tea", "chai","oolong tea"];
let availablesTeas =[];

teaCollection.forEac(function (tea){
  if(tea === 'chai')
  {
    return;
  }
  availablesTeas.push(tea);
});
// console.log(availablesTeas);

*/

/*
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`.
skip `"Sydney"` and sote the other cities in a new array named `traveledCities`.
*/ 

/*

let myworldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities =[];

myworldCities.forEach(city => {
  if(city === "sydney"){
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);

*/

/*
10. Use a `for-of` loop to iterate through the array `["chai", "black tea", "jasmine tea", "herbal tea"]`
and stop when the length of the current tea name is greater than 10.
Store the teas itreated over in an array named `shortTeas`.
*/ 
/*
let myTeas= ["chai", "black tea", "jasmine tea", "herbal tea"];
let shortTeas =[];
let tea;
for (const tea of myTeas) {
  if(tea.length > 10){
    break;
  }
  shortTeas.push(tea);
}
console.log(tea);
*/
/*
9. Write a `for` loop that iterates through th array [2,5,7,9]`.
Skip the value '7' and multiply the rest by 2. store the results in a new array named `douobledNumbers`.
*/ 

let myNumbers=[2,5,7,9];
let doubledNumbers = [];
for(let i=0; i<myNumbers.length;i++)
{
  if(myNumbers[i]===7){
    continue;
  }
  doubledNumbers.push(myNumbers[i]*2);
}
console.log(doubledNumbers);