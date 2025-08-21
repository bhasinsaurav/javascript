// singleton

const tinderUser = new Object();

tinderUser.id ="12345";
tinderUser.name = "Saurav";
tinderUser.age = 22;
tinderUser.bio = "I love coding and coffee!";
tinderUser.isLoggedIn = false;
tinderUser.lastLoginDays = ["Monday", "Tuesday", "Wednesday"];

// console.log(tinderUser);

const obj1 = {
    1: "Saurav",
    2: "Bhasin",
    3: "Cassiopeia"
}

const obj2 = {
    name: "Saurav",
    age: 22,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
}

//const obj3 = {obj1, obj2}

const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

