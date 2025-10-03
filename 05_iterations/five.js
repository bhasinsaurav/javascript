const coding = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++'];

// coding.forEach( function (item) {console.log(item)} );

// coding.forEach( (item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileExtension: '.js'
    },
    {
        languageName: 'Python',
        languageFileExtension: '.py'
    }, 
    {
        languageName: 'Ruby',
        languageFileExtension: '.rb'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName); 
})