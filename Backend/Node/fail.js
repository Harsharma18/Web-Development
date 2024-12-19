// console.log("Harsh");
// let n=5 ;
// for(let i=0;i<n;i++){
//     console.log(i);
// }
// console.log("bye");
// // console.log(process.argv);
//Process in node 
// let args = process.argv;
// for(let i =2;i<args.length;i++){
//     console.log( "hello to ", args[i]);
// }
//export in files 
//let somevalue = require("./math");
//console.log(somevalue.Sums(2,3));
//console.log(somevalue.Mult(16,3));
// console.log(somevalue.div(15,3));
// console.log(somevalue.e);
// console.log(somevalue.G);
//console.log(somevalue);

import {pow,Au} from "./math.js";
// console.log(pow(2,3));
// console.log(Au);
 import {generate,count} from "random-words";
console.log(generate());
console.log(count());