const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const testCaseCount = input.shift();

for (let i = 0; i < testCaseCount; i++) {
  const k = input.shift();
  const n = input.shift();

  const resultArr = [];

  for (let i = 0; i <= k; i++) {
    resultArr.push([1]);
    for (let j = 1; j < n; j++) {
      if (i == 0) {
        resultArr[i].push(j + 1);
      } else {
        resultArr[i].push(resultArr[i][j - 1] + resultArr[i - 1][j]);
      }
    }
  }
  const floor = k;
  const room = n - 1;
  console.log(resultArr[floor][room]);
}
