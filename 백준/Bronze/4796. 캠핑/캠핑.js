const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let result = "";
for (i = 0; i < input.length - 1; i++) {
  let [L, P, V] = input[i].split(" ").map(Number);
  let vac = Math.floor(V / P) * L + (V % P > L ? L : V % P);
  result += `Case ${i + 1}: ${vac}\n`;
}
console.log(result);
