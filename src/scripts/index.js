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
