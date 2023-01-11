const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [고정, 가변, 가격] = input;
const 순익 = 가격 - 가변;
if (가변 < 가격) {
  console.log(Math.floor(고정 / 순익) + 1);
} else {
  console.log(-1);
}
