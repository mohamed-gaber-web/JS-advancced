// ** Asignment && Operator Logical ( &&= ) if true vlaue

let x;
let y = "HII";

// ** old way
// if (x) {
//  x = y
// }

// ** new way
// x &&= y
// x && (x=y)

// ** Asignment OR Operator Logical ( ||= ) if falsy vlaue

// ** new way
// x ||= y;
// x || (x=y)

// ** old way
// if (!x) {
//     x = y
// }

// ** Asignment Noollichi Operator Logical ( ??= ) if null or undefind vlaue

x ??= y

console.log(x);