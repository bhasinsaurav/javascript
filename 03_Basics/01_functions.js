function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}


// sayMyName(); // Function Invocation
// sayMyName; // Function Reference

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result; // Return statement to send back the result
}

const result = addTwoNumbers(5, 5); // Function Invocation with arguments

console.log(result);

function loginUserMessage(username){
    return `${username}, you have successfully logged in!`;
}

console.log(loginUserMessage("Saurav"));


function calculateCartPrice(...price){
    return price
}

// console.log(calculateCartPrice(100, 200, 300, 400, 500)); // Output: [100, 200, 300, 400, 500]

const user = {
    username: "Saurav",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); // Output: Username is Saurav and price is 999