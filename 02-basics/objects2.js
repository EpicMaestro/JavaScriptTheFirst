const tinderUserVatsal = new Object() // This is created dynamically . Hence, it is a singleton object 
const tinderUserVatsal2 = {} // This is created statically . Hence , it is a non -singleton object 


tinderUserVatsal2.id="123abc"
tinderUserVatsal2.name="Vatsal"
tinderUserVatsal2.isLoggedIn =false

const regularUser ={
    email : "some@gmail.com" ,
    fullname :
    {
        user_fullname : {
            firstname : "Aamod" ,
            lastname :"Menon"
        }
    }
}



console.log(regularUser.fullname.user_fullname.lastname);

//What if fullname doesn't exist ( Useful especially in API call responses ). In this case , we do optional chaining . 

console.log(regularUser.fullname?.user_fullname.lastname);


const obj1= { 
    1:'a' ,
    2:'b',
}

const obj2 ={
    2:"c" ,
    4:"d",
}

const obj3={obj1,obj2}
console.log(obj3)

const obj4=Object.assign(obj1,obj2) 
console.log(obj4)

console.log(Object.assign({},obj1,obj2)) 


const obj5 = {...obj1,...obj2}
console.log(obj5)




const users=[{
    id:1,
    email:"me@gmail.com"
   
},
{
    id:2,
    email:"me2@gmail.com"
   
},
{
    id:3,
    email:"me3@gmail.com"
   
},
 
]


console.log(users[1].email)


console.log(Object.keys(tinderUserVatsal2));
console.log(Object.values(tinderUserVatsal2));
console.log(Object.entries(tinderUserVatsal2));
console.log(typeof(Object.keys(tinderUserVatsal2)));

console.log(tinderUserVatsal2.hasOwnProperty("isLoggedIn"))