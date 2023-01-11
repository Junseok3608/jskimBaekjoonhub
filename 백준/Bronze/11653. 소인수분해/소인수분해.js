let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const result = [];
let i = 2;
while (true) {
  if (input % i == 0) {
    result.push(i);
    input = input / i;
    i = 1;
  }
  i++;
  if (i > input) break;
}
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}