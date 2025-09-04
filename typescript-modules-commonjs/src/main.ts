// Named Import
import { add, subtract, mathUtils } from "./utils";

// Default Import
import multiply from "./utils";

// 全てをインポート
import * as Utils from "./utils";

console.log("=== CommonJS Module System ===");
console.log("add(10, 5):", add(10, 5));
console.log("subtract(10, 5):", subtract(10, 5));
console.log("multiply(10, 5):", multiply(10, 5));
console.log("mathUtils.divide(10, 5):", mathUtils.divide(10, 5));
console.log("mathUtils.power(2, 3):", mathUtils.power(2, 3));

console.log("\n=== Using namespace import ===");
console.log("Utils.add(20, 15):", Utils.add(20, 15));
console.log("Utils.default(20, 15):", Utils.default(20, 15));
