const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");
let result = "";
for (i = 97; i <= 122; i++) {
  result += `${input.indexOf(String.fromCharCode(i))} `;
}
console.log(result);