const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num1 = Number(input[0]);
const num2 = Number(input[1]);

const ones = num2 % 10;
const tens = Math.floor((num2 % 100) / 10);
const huns = Math.floor(num2 / 100);

console.log(num1 * ones);
console.log(num1 * tens);
console.log(num1 * huns);
console.log(num1 * num2);