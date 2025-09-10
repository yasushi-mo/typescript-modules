"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.add = void 0;
const add = (a, b) => a + b;
exports.add = add;
const multiply = (a, b) => a * b;
exports.multiply = multiply;
class Calculator {
    calculate(a, b, operation) {
        return operation === "+" ? (0, exports.add)(a, b) : (0, exports.multiply)(a, b);
    }
}
exports.default = Calculator;
