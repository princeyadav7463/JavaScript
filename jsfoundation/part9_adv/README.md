# Async Await 

- `Async await function`

```js
function fetchUserData(){
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve({name: "Prince",url:"https://chaicode.com"})
    },3000);
  })
}

async function getUserData(){
  try{
    console.log('user data fetched successfully..');
    const userData = await fetchUserData()
    console.log("user data:", userData);
  }catch(error){
    console.log("Error fetching data",error);
  }
}
getUserData();

```
 # Clouser

 - ` clouser function`
```js
function outer(){
  let counter =4;
  return function(){
    counter ++;
    return counter
  }
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
```