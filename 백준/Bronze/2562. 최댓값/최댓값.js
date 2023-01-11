const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);

function arrsort(e) {
  return e.concat().sort((a, b) => {
    return b - a;
  });
}
const bigNum = arrsort(input)[0];
const bigNumIndex = input.findIndex((e) => e == bigNum);

console.log(`${bigNum}\n${bigNumIndex +1}`);
