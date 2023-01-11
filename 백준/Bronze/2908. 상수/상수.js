const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
let [A, B] = input;
A = Number(A.split("").reverse().join(""));
B = Number(B.split("").reverse().join(""));

if (A > B) {
  console.log(A);
} else {
  console.log(B);
}