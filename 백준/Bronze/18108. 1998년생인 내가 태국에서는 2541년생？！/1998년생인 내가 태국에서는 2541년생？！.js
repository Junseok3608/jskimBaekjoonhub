const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const bul = parseInt(input);
console.log(bul - 543);