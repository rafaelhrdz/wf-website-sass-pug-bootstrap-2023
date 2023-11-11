//import "core-js/actual";  //Calling all the library or
//Calling individual polyfills
import "core-js/actual/array/from"; // <- at the top of your entry point
import "core-js/actual/array/group"; // <- at the top of your entry point
import "core-js/actual/set"; // <- at the top of your entry point
import "core-js/actual/promise"; // <- at the top of your entry point
import "core-js/actual/structured-clone"; // <- at the top of your entry point
import "core-js/actual/queue-microtask"; // <- at the top of your entry point

//For async polyfilling
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

import { dependencyOne } from "./dependency-one";
import { dependencyTwo } from "./dependency-two";

import "../styles/styles.scss";

let num = 7;

dependencyOne(num);
dependencyTwo(num);

//ES6 Code
const fancyfunc = () => {
  return [1, 2];
};

const [a, b] = fancyfunc();

console.log(a, b);

let height;

height = height ?? 100;

console.log(height);

//Testing polyfilling core-js
console.log(Array.from(new Set([1, 2, 3, 2, 1]))); // => [1, 2, 3]
console.log([1, 2, 3, 4, 5].group((it) => it % 2)); // => { 1: [1, 3, 5], 0: [2, 4] }
Promise.resolve(42).then((x) => console.log(x)); // => 42
console.log(structuredClone(new Set([1, 2, 3]))); // => new Set([1, 2, 3])
queueMicrotask(() => console.log("called as microtask"));

//Testing async polyfilling
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000);
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

f();
