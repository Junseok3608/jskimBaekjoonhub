const fs = require("fs");
const { join } = require("path");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const result = [];
const cnt = input.shift();
const sorted = input.sort((a, b) => a - b);

result.push(Math.round(sorted.reduce((sum, curr) => sum + curr, 0) / cnt));
result.push(sorted[Math.floor(cnt / 2)]);

const map = new Map();
let max = 1;
for (let nums of sorted) {
  if (map.has(nums)) {
    max = Math.max(max, map.get(nums) + 1);
    map.set(nums, map.get(nums) + 1);
  } else map.set(nums, 1);
}
const maxArr = [];
for (let [key, val] of map) {
  if (val === max) maxArr.push(key);
}
result.push(maxArr.length === 1 ? maxArr[0] : maxArr[1]);

result.push(sorted[cnt - 1] - sorted[0]);

console.log(result.join("\n"));
