// ? declare varibale - scope [ global - block - function ] - hoisting

// before Es6 use [[ var ]] to declare variable
// var x = 20;

// ***** scope by var [ global scope - function scope ]
// var name = "mohamed"; // ? global scope

// ? function scope
// function getName() {
//     // var name = "khaled";
//     var age = 30;
//     console.log(age);
// }

// getName();
// console.log(age); 

// ***** variables use keyword var [ re-declared ]
// var password = "203040";
// var password = "20304050";
// password = "2030405060";

// console.log(password);

// ****** Hoisting by use variable
// var username; // ! default value [ undefined ]
// console.log(username); // use varibale username before declare
// var username = "sara"; // ! undefined

// ***** probleme var used
// var greeting = "hello user ";
// var times = 4;

// if(times > 3) {
//     var greeting = "Hii user"; // ! redefined
// }
// console.log(greeting); // "Hii user"

// ****** let [ block scope ]

// let greeting = "hello user ";
// let times = 4;

// if(times > 3) {
//     let hello = "Hii user"; // ! redefined
//     console.log(hello); // "Hii user"
// }
// console.log(hello); // ! hello is not defined


// ***** update variable use let but not redeclared

// let name = "mohamed";
// let name = "mohamed"; // ! name already been declared 

let name = "mohamed";
name = "ahmed"; // ? updated value name = "ahmed" 
console.log(name);

// *** good because each variables is scope diffrent 
let greeting = "say hii";

if(true) {
    let greeting = "say hello";
    // let greeting = "say hello 2"; // ! greeting already been declared
    console.log(greeting);
}
console.log(greeting);

// ****** let with hoisting

let age;
console.log(age); // ! cannot access age before initializing
age = 30; // ! undefined

// ***** const [ block scope ] const contain constant value

// const v = 10;
// const v = 200;
// v = 100; // ! not updated this value

const user = {
    username: ''
}
user.username = "ali"

console.log(user.username);