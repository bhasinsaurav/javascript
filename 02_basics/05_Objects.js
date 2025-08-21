const course = {
    coursename: "Javascript",
    price: "888",
    courseInstructor: "John Doe"

}

const {courseInstructor: instructor} = course;

// console.log(courseInstructor); // Output: John Doe. // This will throw an error because courseInstructor is not defined in the current scope
console.log(instructor); // Output: John Doe


const navbar = () => {

}


// {
//     "name": "Saurav",
//     "course": "Javascript",
//     "price": 999
// }
