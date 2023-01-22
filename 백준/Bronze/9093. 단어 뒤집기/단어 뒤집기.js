const fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const result = [];
const stack = [];

for (i = 0; i < n; i++) {
  let arr = input[i].trim().split("");
  for (j = 0; j <= arr.length; j++) {
    if (arr[j] === " " || arr[j] === undefined) {
      while (stack.length > 0) {
        result.push(stack.pop());
      }
      result.push(" ");
    } else {
      stack.push(arr[j]);
    }
  }
  result.push("\n");
}
console.log(result.join(""));