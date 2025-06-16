const user = {
    username : "Hitesh",
    price : 999 ,


    welcomeMessage: function()
    {
        console.log (`${this.username} Nmaste Ji! Kaise ho beta ? Zara ${this.price} nikaalo jeb se `)

        console.log(this)
    }


}


// this keyword is used to refer to the current context

user.welcomeMessage()

user.username="Sam"

user.welcomeMessage()

// We are able to print "sam" because instead of hardcoding , we are using "this" keyowrd to refer to the current context 


console.log(this)
// This gives an empty object . This is beacuse "this" has no global context yet in node environment . However , when we move to the browser and execute the same fucntion , it returns Window ; since the "Window" is th eglobal object on window 





