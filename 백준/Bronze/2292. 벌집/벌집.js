const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let count = 1;
let maxNum = 1;
while (input > maxNum) {
  maxNum += count++ * 6;
}
console.log(count);