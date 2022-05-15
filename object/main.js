// *************************** OBJECT

const user = {
    name: 'mohamed',
    age: 20
};

const user2 = {
    job: "front-end developer"
}

// const user3 = {
//     hobbies: 'reading'
// }

// ? copy object from another object old way
// const user2 = user; 
// ? copy object from another object by spread operator
// const user3 = {...user}; 

// user2.name = "ahmed";

// * Object.assign(traget, ...source)
// ? // Merge more object
// const targetOBJ = Object.assign(user, user2, user3); 

// ? copy from user to user4
// const user4 = Object.assign({}, user, user2);

// * Object.entries() => return [ key, value ]

// for(const [key, value] of Object.entries(user)) {
//     console.log(`${ key }: ${ value }`);
// }

// ?  {name: 'mohamed'} to [ 'name', 'mohamed' ]
// const OBJ = Object.entries(user); 

// * Object.freeze() => freeze no changed and deleted and no updating
// console.log(user);

// const freeze = Object.freeze(user);
// user.name = "khaled";

// * Object.keys() => return key from object in array
// const keys = Object.keys(user);

// ? with array
// const names = ['ahmed', 'sameh', 'samah']; // [key, value]
// const keys = Object.keys(names);

// * Object.values() => return array of values from objects
// const values = Object.values(user);

// ? Object.seal(object)
// Object.seal(User);
// User.username = 'khaled'; // * yes change value
// User.age = 30; // * no add value 
// delete User.username // * no remove property

console.log(newUser); 