const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let input = Number(fs.readFileSync(filePath).toString().trim());

function result(num) {
  let change = 1000 - num;
  let cnt = 0;

  cnt += Math.floor(change / 500);
  change = change % 500;
  cnt += Math.floor(change / 100);
  change = change % 100;
  cnt += Math.floor(change / 50);
  change = change % 50;
  cnt += Math.floor(change / 10);
  change = change % 10;
  cnt += Math.floor(change / 5);
  change = change % 5;
  cnt += Math.floor(change / 1);
  change = change % 1;
  console.log(cnt);
}

result(input);
