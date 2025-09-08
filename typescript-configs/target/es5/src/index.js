var _a;
var users = ["Alice", "Bob", "Charlie"];
// Optional chaining（ES2020の機能）
var user = { profile: { name: "Alice" } };
var userName = (_a = user === null || user === void 0 ? void 0 : user.profile) === null || _a === void 0 ? void 0 : _a.name;
// Arrow function
var getMessage = function (name) { return "Hello, ".concat(name, "!"); };
// Array.includes（ES2016の機能）
var hasAlice = users.includes("Alice");
console.log(userName, getMessage("World"), hasAlice);
