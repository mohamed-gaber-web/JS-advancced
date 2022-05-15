// ? call() - bind() - apply() => this
// ? call(anotherObj, param1, param2, param3) with parameters
// ? apply(anotherObj, [ param1, param2, param3 ]) with parameters
// ? bind(anotherObj, param1, param2, param3) return bounded function

// const user = {
//     id: 5,
//     username: "mohamed",
//     printUsername: function(upperCase) {
//         let username = this.username;
//         if(upperCase === true) {
//             username = username.toUpperCase();
//         }
//         console.log("the username is " + username)
//     }
// }

// const userAhmed = {
//     id: 9,
//     username: "Ahmed",
// }

// user.printUsername(); // **** the username is mohamed
// user.printUsername.call(userAhmed, true); // **** when use call will the username is ahmed

// ******* apply()
var context_A = {
    contextName: 'contextA',
    calc: function(a, b) {
        let sumVal = a + b;
        console.log('output of ' + this.contextName + " is " + sumVal)
    }
}

context_A.calc(2 , 2); // ****

var context_B = {
    contextName: 'contextB' 
}

context_A.calc.apply(context_B, [3 , 3])

// ******** bind()

const user = {
    id: 5,
    username: "mohamed",
    printUsername: function(upperCase) {
        let username = this.username;
        if(upperCase === true) {
            username = username.toUpperCase();
        }
        console.log("the username is " + username)
    }
}

const userAhmed = {
    id: 9,
    username: "Ahmed",
}

user.printUsername(); // **** the username is mohamed
// ** return bounded function will use later
const bf = user.printUsername.bind(userAhmed, true); // **** bounded function
bf();