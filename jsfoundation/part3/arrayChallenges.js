/*
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"blac tea"`, and `"oolong tea"`.
Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavor = [ "green tea", "black tea", "oolong tea"];

//let teaFl = new Array("green tea","black tea","oolong tea");

 const firstTea=teaFlavor[0];

/*
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`.
Access the third element in the array and sote it in a variable named `favoriteCity`.
*/  

let cities = ["London","Tokyo","Paris","New York"];
const favoriteCity = cities[2];


/*
3. You have an array named `teaTypes` containing `"herbal tea"`, `"White tea"`, and `"masala chai"`.
hange the second element of the array to `"jasmine Tea".
*/ 
let teaTypes = ["herbal tea", "white tea", "masala chai"];

teaTypes[1]="jasmine tea";

console.log(teaTypes);

/*
4. Declare an array named `citiesVisited` containing `"Mumbai"`, and `"Sydney"`.
Add `"Berlin"` to the array using the `push` method.
*/ 

let citiesVisited = ["Mumbai","sydney"];
citiesVisited[2]= "Barlin";
 console.log(citiesVisited);
 console.log(citiesVisited.length);

/*
5. You have an array named `teaOrder` with `"chai"`, `"iced tea"`, `"matcha"` and `"earl grey"`.
Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/ 

let teaOrder = ["chai","iced tea", "matcha","earl tea"];
const lastOrder = teaOrder.pop();
console.log(lastOrder);

/* 
6. You have an array named `popularTeas` containing `"green tea"` `"oolong tea"`, and `"chai"`.
create a soft copy of this array named `softCopyTeas`.
*/ 
let popularTeas =["green tea", "oolong tea","Chai"];
let softCopyTeas = popularTeas
console.log(softCopyTeas);
popularTeas.pop();

console.log(popularTeas);



/*
7. You have an array named `topCities` containing `"Berlin"` `"Singapore"` and `"New York"`.
create a hard copy of this array named `hardCopyCities`.
*/ 

let topCities = ["Berlin","Singapore","New York"];
let hardCopyCities = [...topCities]
// topCities.pop();
console.log(hardCopyCities);

/* 
8. You have two arrays `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` contaning `"Tokyo"` and `"Bangkok"`.
Marge tese two arrays into  a new array named `worldCities`.
*/ 

let europeanCities = ["Paris", "Rome"," "];
let asianCities = ["Tokyo","Bangkok"];
// let worldCities = europeanCities+asianCities;
let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);


/* 
9. You have an array named `teaMenu` containing `"masla chai"`, `"oolong tea"`, `"green tea"` , and `"earl grey"`.
find the length of the array and store it in a variable named `menuLength`.
*/ 

let teaMenu = ["Masla chai","oolong tea","green tea"];
let menuLength;
 console.log(teaMenu);
menuLength = teaMenu.length;
console.log(menuLength);


/*
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`.
check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/ 

let cityBucketList =["Kyoto", "London","cape Town","Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);


let arr = [1,2,3,4];
console.log(arr.indexOf(3));
