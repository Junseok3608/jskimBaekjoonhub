const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const times = Number(input.shift());

let cnt = 0;
const recursion = (s, l, r) => {
  cnt += 1;

  if (l >= r) {
    return 1;
  } else if (s[l] != s[r]) {
    return 0;
  } else {
    return recursion(s, l + 1, r - 1);
  }
};

const isPalindrome = (s) => {
  return recursion(s, 0, s.length - 1);
};

for (i = 0; i < times; i++) {
  cnt = 0;
  console.log(isPalindrome(input[i].trim()), cnt);
}
