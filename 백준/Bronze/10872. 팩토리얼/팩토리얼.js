const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
let result = 1;
if (input == 0 || input == 1) {
  result = 1;
} else {
  for (i = input; i > 0; i--) {
    result *= i;
  }
}
console.log(result);
