const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  let [H, W, N] = input[i].split(" ").map(Number);
  let height = N % H;
  if (height == 0) height = H;
  let lines = Math.ceil(N / H);
  if (lines < 10) lines = String(0) + lines;
  console.log(String(height) + lines);
}

