import Calculator, { add, multiply } from "./math.js";
const calc = new Calculator();
console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
console.log(calc.calculate(10, 20, "+")); // 30
