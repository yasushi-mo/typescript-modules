// DOM操作
const button = document.getElementById("myButton");
button?.addEventListener("click", () => {
  console.log("Clicked!");
});

// fetch API（ES2017で追加）
fetch("/api/users")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Array.at（ES2022で追加）
const numbers = [1, 2, 3, 4, 5];
const lastNumber = numbers.at(-1);
console.log(lastNumber); // 5
