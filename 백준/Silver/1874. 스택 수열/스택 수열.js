const fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = Array.from({ length: n }, (v, i) => i + 1);
let stack = [];
let ans = "";

for (i = 0; i < n; i++) {
  let cnt = 1;
  while (cnt <= n && stack[stack.length - 1] != input[i]) {
    stack.push(arr.shift());
    ans += "+\n";
    cnt++;
  }
  if (stack[stack.length - 1] == input[i]) {
    stack.pop();
    ans += "-\n";
  } else {
    ans = "NO";
    break;
  }
}

console.log(ans);
