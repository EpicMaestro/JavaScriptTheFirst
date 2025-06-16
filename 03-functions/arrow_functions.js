function chai()
{   let username="Mera Naam"
    console.log(this)
    console.log(this.username)
}

chai()


const chai2 = function ()
{
    let username="Mera Naam"
    console.log(this)
    console.log(this.username)
}

chai2()


const chai3 = () =>
{
    let username="Mera Naam"
    console.log(this)
    console.log(this.username)
}

chai3()




const addTwo =(num1,num2) => 
{
    return num1+num2
}

//Implicit return  (without curly braces)

const addThem = (num1,num2) => num1+num2


// To return objects , we need to wrap them in parenthesis

const addThose = (num1,num2) =>({username :"Hitesh"})

console.log(addThose(3,4))
