const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let count = 0;
for (i = 0; i <= input; i++) {
  if (i < 100 && i != 0) {
    count++;
  } else if (i > 99 && i < 1000) {
    if (((i % 1000) - (i % 100)) / 100 - ((i % 100) - (i % 10)) / 10 == ((i % 100) - (i % 10)) / 10 - (i % 10)) {
      count++;
    }
  }
}
console.log(count);