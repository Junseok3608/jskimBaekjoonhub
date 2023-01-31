const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let input = fs.readFileSync(filePath).toString().trim();
const toFive = input.replace(/6/g, "5").split(" ").map(Number);
const toSix = input.replace(/5/g, "6").split(" ").map(Number);

console.log(toFive[0] + toFive[1]);
console.log(toSix[0] + toSix[1]);
