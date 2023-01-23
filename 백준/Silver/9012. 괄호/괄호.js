const fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const result = [];
let stack = 0;

for (i = 0; i < n; i++) {
  let arr = input[i].trim().split("");

  for (j = 0; j <= arr.length; j++) {
    if (stack < 0) break;
    if (arr[j] === "(") {
      stack += 1;
    } else if (arr[j] === ")") {
      stack -= 1;
    }
  }
  if (stack === 0) {
    result.push("YES");
  } else {
    result.push("NO");
  }
  stack = 0;
  result.push("\n");
}
console.log(result.join(""));