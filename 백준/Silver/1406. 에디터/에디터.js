const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

var left = input[0].split("");
var right = [];
var cases = Number(input[1]) + 1;
for (var i = 2; i <= cases; i++) {
  if (input[i] === "L") {
    if (left.length) {
      right.push(left.pop());
    }
  } else if (input[i] === "B") {
    if (left.length) {
      left.pop();
    }
  } else if (input[i] === "D") {
    if (right.length) {
      left.push(right.pop());
    }
  } else {
    left.push(input[i].split(" ")[1]);
  }
}
while (right.length) {
  left.push(right.pop());
}
console.log(left.join(""));