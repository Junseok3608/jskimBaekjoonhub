const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
const A = input[0];
const B = input[1];

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
    console.log('==')
}
