const mySym = Symbol("key")
const JsUser = {
    name : "Aamod",
    mySym :"key",
    age : 18 ,
    "full name" : "Aamod Menon"

}
console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser["full name"])
console.log(JsUser.mySym)
// console.log(JsUser.full name)
console.log(JsUser)

const JsUser1 = {
    name : "Aamod",
    [mySym] :"key",
    age : 18 ,
    "full name" : "Aamod Menon"

}
console.log(JsUser1.name)
console.log(JsUser1["name"])
console.log(JsUser1["full name"])
console.log(JsUser1[mySym])
// console.log(JsUser.full name)
console.log(JsUser1)


JsUser1.name="Naya Aamod"


Object.freeze(JsUser1)  
// Ab JsUser1 change nahi hoga 

JsUser1.name="Nahi Badlega Aamod"
console.log(JsUser1)


/* Functions are treated as first-class citizens in JS . 
In programming, first-class citizens (or first-class objects) refer to entities (like variables, functions, etc.) that can:

Be assigned to a variable

Be passed as an argument to a function

Be returned from a function   */

JsUser.greeting = function() { console.log("Namaste Beta Namaste")}
JsUser.greeting2 = function() { console.log(`Namaste ${this["full name"]} Beta Namaste`)}
console.log(JsUser.greeting())
console.log(JsUser.greeting)
JsUser.greeting2()
