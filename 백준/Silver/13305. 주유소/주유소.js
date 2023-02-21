const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const distance = input[1].split(" ").map(Number);
const prices = input[2].split(" ").map(Number);

function solution(n, distances, prices) {
  let ans = 0;
  let minP = prices[0];

  for (i = 0; i < n - 1; i++) {
    const distance = distances[i];
    minP = Math.min(minP, prices[i]);
    ans += minP * distance;
  }
  return ans;
}

const result = solution(n, distance, prices);
console.log(result);
