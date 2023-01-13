const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

input = Array.from(new Set(input));
let result = [];
let sort = input.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
});
for (let i = 1; i <= sort[sort.length - 1].length; i++) {
  let tm = sort.filter((el) => el.length === i);
  result.push(...tm.sort());
}
console.log(result.join("\n"));

