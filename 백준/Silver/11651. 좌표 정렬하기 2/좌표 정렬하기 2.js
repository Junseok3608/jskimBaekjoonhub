const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const cnt = input.shift();

const arr = input.map((x) => x.split(" ").map((y) => parseInt(y)));

let result = "";
arr
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })
  .forEach((x) => {
    result += `${x[0]} ${x[1]}\n`;
  });
console.log(result);