const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

function facto(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return facto(n - 1) + facto(n - 2);
  }
}

console.log(facto(input));
