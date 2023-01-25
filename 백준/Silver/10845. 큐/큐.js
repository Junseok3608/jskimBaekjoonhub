const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const queue = [];
const result = [];
const n = Number(input[0]);

for (i = 1; i <= n; i++) {
  let order = input[i].split(" ");
  switch (order[0]) {
    case "push":
      queue.push(order[1]);
      break;
    case "pop":
      result.push(queue.shift() || -1);
      break;
    case "size":
      result.push(queue.length);
      break;
    case "empty":
      result.push(queue[0] ? 0 : 1);
      break;
    case "front":
      result.push(queue[0] || -1);
      break;
    case "back":
      result.push(queue[queue.length - 1] || -1);
      break;
  }
}
console.log(result.join("\n"));
