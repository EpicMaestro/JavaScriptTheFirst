// const person = new Object(); -> Creating a new Object

//Callback Hell happens when multiple asynchronous operations are nested inside each other using callbacks. This leads to deeply nested, hard-to-read, and hard-to-maintain code — often referred to as the "Pyramid of Doom".

// doTask1(function(result1) {
//   doTask2(result1, function(result2) {
//     doTask3(result2, function(result3) {
//       doTask4(result3, function(result4) {
//         console.log('Final result:', result4);
//       });
//     });
//   });
// });


const promiseOne = new Promise(function(resolve,reject)
{
     // Do async task like DB calls , cryptography , Network calls 

     setTimeout(function()
     {
        console.log("Async khatam");
        resolve();   // connecting with .then
     },1000)
})


promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject)
{
   setTimeout(function(){
    console.log("Mein hun Gian");
    resolve();
   },1000)
}).then(function()
{
    console.log("Mein hun bada khatarnaak");
})

const PromiseThree= new Promise(function(resolve,reject)
{   
setTimeout(function(){

    resolve({username:"Gian" , email :"GianSunioKaDsot"});
},1000)
})


PromiseThree.then(function(user){
    
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
             
    setTimeout(function(){
        let error=true
        if(!error)
        {
            resolve({username: "Nobita" ,password:"Dora Dora"})
        }
        else
        {
            reject('ERROR: Kucch to gadbad hain Daya')
        }
    },1000)
})


promiseFour.then(function(user)
{
    console.log(`User ka details hain : ${user}`)
})

.catch(function(err)
{
    console.log(err)
})


const promiseFive = new Promise(function(resolve,reject){
             
    setTimeout(function(){
        let error=false
        if(!error)
        {
            resolve({username: "Nobita" ,password:"Dora Dora"})
        }
        else
        {
            reject('ERROR: Kucch to gadbad hain Daya')
        }
    },1000)
})


 promiseFive.then(function(user){
          console.log(user);
          return user.username;
})
.then(function(myUsername)                       // return value of first then is taken as input here(chaining)
{
    console.log(myUsername);
}).catch(function(err)
{
    console.log(err);
}).finally(()=>
console.log("Promise ka Game Over"))           // Finally bataado ki aapka promise resolve/reject hua ki nahi . 



const promiseSix =new Promise((resolve,reject)=>{
        setTimeout(function(){
        let error=true     // false hota to sahi chalta . catch nahi support karega async await natively . try-catch block lagaana padega
        if(!error)
        {
            resolve({username: "JavaScript" ,password:"Dora Dora"})
        }
        else
        {
            reject('ERROR: JS dhokha dega')
        }
    },1000)    
})

// async await ki entry : sirf then hota hain , catch nahi hota 

async function consumePromiseSix()
{
   try{const response = await promiseSix 
   console.log(response);}
   catch(err)
   {
    console.log(err);
   }
}


consumePromiseSix()


async function getAllUsers()
{  try{
   const response = await fetch('https://jsonplaceholder.typicode.com/users')
   // You're missing an await before response.json(). Without await, response.json() returns a Promise, not the actual JSON data.
   const data= await response.json()
   console.log(data);}
   catch(err)
   {
    console.log(err)
   }
}

getAllUsers()

// Alternate way of writing the same thing 
fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
}).then(function(data)
{
    // const data=await data1;  // iski zarrorat nahi
    console.log(data)
}) .catch((error)=>
{
    console.log(error); 
})

// fetch method is executed first in Microtask queue , given higher priority over macrotask queue . 

/* The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. A fetch() promise only rejects if a network error occurs.
✅ Examples: no internet connection, DNS failure, or permissions issues like CORS restrictions.

A fetch() promise does NOT reject for HTTP errors like 404 (Not Found), 500 (Server Error), etc.
Instead, the promise resolves successfully, but the response indicates the error.

To handle HTTP errors, you must manually check the response:
➤ response.ok — returns true if the status is in the range 200–299 (successful).
➤ response.status — gives the exact HTTP status code (e.g., 404, 500). */