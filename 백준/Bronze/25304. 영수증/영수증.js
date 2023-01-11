const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const total = Number(input[0]);
const times = Number(input[1]);
let result = 0;
for (let i = 2; i <= times + 1; i++) {
  let items = input[i].split(" ").map(Number);
  let [A, B] = items;
  result = result + A * B;
}
if (total == result) {
  console.log("Yes");
} else {
  console.log("No");
}
