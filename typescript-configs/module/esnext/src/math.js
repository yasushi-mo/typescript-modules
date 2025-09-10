export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export default class Calculator {
    calculate(a, b, operation) {
        return operation === "+" ? add(a, b) : multiply(a, b);
    }
}
