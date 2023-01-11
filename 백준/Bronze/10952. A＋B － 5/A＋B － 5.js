const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
result = [];
input.forEach(function (arr) {
  let [A, B] = arr.split(" ").map(Number);
  if (A + B == 0) {
    console.log(result.join("\n"));
  } else if (A + B != 0) {
    result.push(A + B);
  }
});
