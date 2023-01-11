const input = require('fs').readFileSync(0).toString().split('\n').map(Number);

const [A, B] = input;

if (A < 0) {
  console.log(B > 0 ? 2 : 3);
} else {
  console.log(B > 0 ? 1 : 4);
}
