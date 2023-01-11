const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

let times = 0;
for (i = 0; i < input.length; i++) {
  let ascNum = input[i].charCodeAt();
  if (65 <= ascNum && ascNum <= 67) {
    times += 3;
  } else if (68 <= ascNum && ascNum <= 70) {
    times += 4;
  } else if (71 <= ascNum && ascNum <= 73) {
    times += 5;
  } else if (74 <= ascNum && ascNum <= 76) {
    times += 6;
  } else if (77 <= ascNum && ascNum <= 79) {
    times += 7;
  } else if (80 <= ascNum && ascNum <= 83) {
    times += 8;
  } else if (84 <= ascNum && ascNum <= 86) {
    times += 9;
  } else if (87 <= ascNum && ascNum <= 90) {
    times += 10;
  }
}
console.log(times);