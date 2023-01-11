const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let count = 0;
let result = [];
for (let i = 1; i < Number(input[0]) + 1; i++) {
  let splitChar = input[i].trim().split("");
  result = [];
  for (let j = 0; j < splitChar.length; j++) {
    if (!result.includes(splitChar[j])) {
      result.push(splitChar[j]);
    } else if (splitChar[j] != splitChar[j - 1]) {
      count--;
      break;
    }
  }
  count++;
}
console.log(count);
