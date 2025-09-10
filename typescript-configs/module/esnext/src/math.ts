export const add = (a: number, b: number) => a + b;
export const multiply = (a: number, b: number) => a * b;
export default class Calculator {
  calculate(a: number, b: number, operation: "+" | "*") {
    return operation === "+" ? add(a, b) : multiply(a, b);
  }
}
