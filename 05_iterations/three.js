const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObject){
    console.log(key, ':-', myObject[key]);
}

const programming = ["js", "java", "cpp", "rb", "swift"];

for(const key in programming){
    console.log(programming[key]);
}