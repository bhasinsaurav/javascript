const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`Accumulator: ${acc} and Current Value: ${currval}`);
//     return acc + currval;
// }, 0);

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0);

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 299,
    },
    {
        itemName: "CSS Course",

        price: 199,
    }, 
    {
        itemName: "HTML Course",
        price: 99,
    }, 
    {
        itemName: "React Course",
        price: 499,
    }

]

shoppingCartTotal = shoppingCart.reduce( (acc, item) => acc+ item.price, 0);

console.log(shoppingCartTotal);