let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let count = 0;

while (1) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break;
  } else if (input <= 0) {
    console.log(-1);
    break;
  }
  input = input - 3;
  count++;
}
