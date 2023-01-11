const input = require("fs").readFileSync("/dev/stdin").toString().trim().toUpperCase().split("");
const strObj = {};

for (let i = 0; i < input.length; i++) {
  if (strObj[input[i]] === undefined) {
    strObj[input[i]] = 1;
  } else {
    strObj[input[i]] += 1;
  }
}
let result = "";
let count = 0;
for (j in strObj) {
  if (strObj[j] > count) {
    result = j;
    count = strObj[j];
  } else if (strObj[j] == count) {
    result = "?";
  }
}
console.log(result);