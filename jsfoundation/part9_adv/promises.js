function fetchData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let success = true;
      if(success){
        resolve("Data Fetched Successfully");
      }
      else{
        reject("Error fetching data");
      }
    },300);
  });
}


fetchData()
.then((data) => {
  console.log(data);
  return `Prince `;
})
.then((value) => {
  console.log(value);
  
})
.catch((error) => console.error(error))
