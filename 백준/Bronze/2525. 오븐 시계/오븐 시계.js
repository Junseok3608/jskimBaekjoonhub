const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let H = input[0].split(" ").map(Number)[0];
let M = input[0].split(" ").map(Number)[1];
const cook = Number(input[1]);

if (M + cook > 59) {
  let upperH = Math.floor((M + cook) / 60);
  M = (M + cook) % 60;
  if (upperH + H >= 24) {
    console.log((upperH + H) % 24, M);
  } else if (upperH + H < 24) {
    console.log(upperH + H, M);
  }
} else {
  console.log(H, M + cook);
}

