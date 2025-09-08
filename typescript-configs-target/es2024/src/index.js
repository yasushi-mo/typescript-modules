const users = ["Alice", "Bob", "Charlie"];
// Optional chaining（ES2020の機能）
const user = { profile: { name: "Alice" } };
const userName = user?.profile?.name;
// Arrow function
const getMessage = (name) => `Hello, ${name}!`;
// Array.includes（ES2016の機能）
const hasAlice = users.includes("Alice");
console.log(userName, getMessage("World"), hasAlice);
