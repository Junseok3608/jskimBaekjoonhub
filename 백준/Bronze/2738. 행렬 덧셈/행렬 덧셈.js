const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [rowIndex, columnIndex] = input.shift().split(" ").map(Number);

let A = [];
let B = [];
let result = [];

for (i = 1; i <= rowIndex; i++) {
  A.push(input.shift());
}
for (i = 1; i <= rowIndex; i++) {
  B.push(input.shift());
}

for (i = 0; i < rowIndex; i++) {
  result = [];
  for (j = 0; j < columnIndex; j++) {
    result.push(A[i].split(" ").map(Number)[j] + B[i].split(" ").map(Number)[j]);
  }
  console.log(result.join(" "));
}
