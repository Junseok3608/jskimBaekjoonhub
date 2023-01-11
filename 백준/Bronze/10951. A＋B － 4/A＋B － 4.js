const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (i = 0; i < input.length -1; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  console.log(A + B);
}
