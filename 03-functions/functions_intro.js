function sayMyName()
{
    console.log("K")
    console.log("R")
    console.log("$")
    console.log("N")
    console.log("A")


    return "Ye hain mera naam";
}

let res=sayMyName()
console.log(res)


function loginUserMessage (username)
{
      return `${username} just logged in`
}


console.log(loginUserMessage("Emiway Bantai"))
console.log(loginUserMessage())


function loginUserMessage2 (username)
{   if(username==undefined)
{
    console.log("Please enter your Username.")
    return
}
      return `${username} just logged in`
}


console.log(loginUserMessage2("Emiway Bantai"))
console.log(loginUserMessage2())