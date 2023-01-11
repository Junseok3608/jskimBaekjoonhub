const input = Number(require("fs").readFileSync("/dev/stdin").toString());

let count = 0;
let sumNum;
let newNum = input;

while (true) {
  count++;
  sumNum = (newNum % 10) + Math.floor(newNum / 10);
  newNum = (newNum % 10) * 10 + (sumNum % 10);
  if (newNum == input) {
    console.log(count);
    break;
  }
}