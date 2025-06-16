// Immediately Invoked Function Expressions (IIFE) 

/*  It’s a function in JavaScript that runs as soon as it’s defined.

Let’s imagine you're building a backend server with JavaScript (Node.js), and you want to:

Connect to a database only once when the app starts

Avoid leaking the connection object globally


At a basic level:

* To avoid polluting the global scope (no unnecessary global variables).

* To isolate code (like a private room where your code does its job and then vanishes).

* To run setup code immediately (useful when you want to do something once at the start).


IIFE in JS is like setting up a machine, using it, and then locking the room it was in.
For database connections, it's used to connect once, do setup work, and keep the connection safe and hidden.  */


function chai()
{
    console.log("DB connected");
}

chai();




//IIFE

(function chai2()
{
    console.log("DB connected");
})() ;


( ()=> 
{
    console.log("DB conneced also ")
}) () ;



((name)=>
{
    console.log(`DB hain ye ${name}`)
}) ("Aamod");