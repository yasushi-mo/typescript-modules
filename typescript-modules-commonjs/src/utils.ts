// Named Export
export const add = (a: number, b: number): number => {
  return a + b;
};

export const subtract = (a: number, b: number): number => {
  return a - b;
};

// Default Export
const multiply = (a: number, b: number): number => {
  return a * b;
};

export default multiply;

// オブジェクトとしてのExport
export const mathUtils = {
  divide: (a: number, b: number): number => {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  },
  power: (base: number, exponent: number): number => {
    return Math.pow(base, exponent);
  },
};
