// In E-commerce application , the number of items a user adds to cart is unknown . So , the number of parameters ain't defined 


function calculateCartPrice(...num1)
{
    return num1
}

console.log(calculateCartPrice(200,400,600))

// Aage jaakar we can loop over the array obtained and then calculate the sum 


function calcCartPrice(val1,val2,...num1)
{
    return num1
}

console.log(calcCartPrice(200,400,600,800))


const user = {
    username: "Aamod",
    price : 150
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}



handleObject(user)


handleObject(
    {
        username :"sam",
        price : 30921
    }
)
