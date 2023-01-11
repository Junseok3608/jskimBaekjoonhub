const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const primes = Array(10001).fill(true);
primes[0] = false;
primes[1] = false;
for (let i = 2; i <= 100; i++) {
  for (let j = i * 2; j <= 10000; j += i) {
    primes[j] = false;
  }
}
const result = [];
for (let i = 1; i < input.length; i++) {
  const n = input[i];
  let A = n / 2;
  let B = n / 2;
  while (!primes[A] || !primes[B]) {
    A -= 1;
    B += 1;
  }
  result.push(`${A} ${B}`);
}

console.log(result.join("\n"));
