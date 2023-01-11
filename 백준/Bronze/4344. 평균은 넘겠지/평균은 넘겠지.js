const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const times = Number(input[0]);
for (let i = 1; i < times + 1; i++) {
  let arr = input[i].trim().split(" ").map(Number);
  let sum = 0;
  let aver = 0;
  let count = 0;
  for (let i = 1; i < arr[0] + 1; i++) {
    sum += arr[i];
    aver = sum / arr[0];
  }
  for (let i = 1; i < arr[0] + 1; i++) {
    if (arr[i] > aver) {
      count++;
    }
  }
  console.log(`${((count / arr[0]) * 100).toFixed(3)}%`);
}