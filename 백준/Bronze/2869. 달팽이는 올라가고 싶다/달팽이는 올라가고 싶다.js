const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
const [오름, 미끌, 목표] = input;
let 며칠 = Math.ceil((목표 - 미끌) / (오름 - 미끌));
console.log(며칠);