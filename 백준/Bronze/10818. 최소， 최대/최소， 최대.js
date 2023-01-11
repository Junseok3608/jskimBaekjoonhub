const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => {
    return a - b;
  });
console.log(arr[0], arr.pop());
