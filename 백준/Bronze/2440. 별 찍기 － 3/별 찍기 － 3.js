const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
let result = "";
for (i = input; i > 0; i--) {
  for (j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);