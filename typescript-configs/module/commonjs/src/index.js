"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const calc = new math_1.default();
console.log((0, math_1.add)(2, 3)); // 5
console.log((0, math_1.multiply)(4, 5)); // 20
console.log(calc.calculate(10, 20, "+")); // 30
