// singleton -> when we create from a constructor
// Not singleton when we cerate from a literal

const mySymbol = Symbol("mySymbol");
// Object literal
const JsUser = {
    name : "Saurav",
    age : 22,
    email : "bhasinsaurav9@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["location"]); // undefined
// console.log(JsUser["lastLoginDays"][0]);

// Object.freeze(JsUser); // Prevents any changes to the object

JsUser.greeting = function(){
    console.log("Hello, " + this.name);
}

console.log(JsUser.greeting())

