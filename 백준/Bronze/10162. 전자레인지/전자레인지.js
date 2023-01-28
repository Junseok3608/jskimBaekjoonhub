const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let input = Number(fs.readFileSync(filePath).toString().trim());
const time = [300, 60, 10];
let arr = [];

const result = function (num) {
  if (input % 10 !== 0) {
    console.log(-1);
    return;
  }
  for (i = 0; i < 3; i++) {
    arr.push(Math.floor(input / time[i]));
    input %= time[i];
  }
  console.log(arr.join(" "));
};

result(input);
