const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
let result = "";

for (i = 0; i < input; i++) {
  result += " ".repeat(i);
  result += "*".repeat(input - i);
  result += "\n";
}
console.log(result);