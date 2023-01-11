const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let arr = [];
for (i = 0; i < 100; i++) {
  arr.push(new Array(100).fill(false));
}

const papers = Number(input[0]);

for (i = 1; i <= papers; i++) {
  let [x, y] = input[i].split(" ").map(Number);

  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      arr[x + j][y + k] = true;
    }
  }
}
const result = arr.reduce((cnt, element) => {
  for (const el of element) {
    if (el) {
      cnt++;
    }
  }
  return cnt;
}, 0);
console.log(result);
