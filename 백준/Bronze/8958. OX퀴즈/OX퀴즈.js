const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const times = Number(input[0]);
let resultScore = 0;
let sumScore = 0;

for (let i = 1; i < times + 1; i++) {
  let arr = input[i].trim().split("");
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == "O") {
      sumScore++;
      resultScore = resultScore + sumScore;
    } else if (arr[i] == "X") {
      sumScore = 0;
    }
  }
  console.log(resultScore);
  sumScore = 0;
  resultScore = 0;
}
