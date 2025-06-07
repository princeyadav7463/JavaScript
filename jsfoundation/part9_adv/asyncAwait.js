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