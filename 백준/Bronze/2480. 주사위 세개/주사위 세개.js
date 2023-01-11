const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const [A, B, C] = input;

if (A == B && B == C) {
  console.log(10000 + A * 1000);
} else if (A == B) {
  console.log(1000 + A * 100);
} else if (A == C) {
  console.log(1000 + A * 100);
} else if (B == C) {
  console.log(1000 + B * 100);
} else if (A != B && B != C) {
  console.log([A, B, C].sort().pop() * 100);
}
