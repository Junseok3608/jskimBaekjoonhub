const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
console.log(input.reduce((p,c)=> p+c,0) / input.length)
let mid = input.sort((a,b)=>a-b)[2]
console.log(mid)