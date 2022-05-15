// ********************* spread operator

// ? EXP 1
function calc(a, b, c) {
    return a + b + c;
}
const arr = [10, 20, 30];
const FN = calc(...arr)

// ? EXP 2
let numbers = [1, 10, 100]
let anotherNumber = 200;

let newNumber = [...numbers, anotherNumber]

// ? EXP 3
const login = {
    username: 'ahmed',
    password: '000000'
}

const token = {
    token: '1s1ss2s2s1s12s2s2s2'
}
const newUser = {...login, token}