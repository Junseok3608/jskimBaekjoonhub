const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((num)=>parseInt(num));
while (true) {
  const L = input.shift();
  if (L == 0) {
    break;
  }
  let count = 0;
  const H = L * 2;
  const arr = new Array(H + 1);

  arr.fill(true);
  for (let i = 0; i <= L; i++) {
    arr[i] = false;
  }
  for (let j = 2; j < H + 1; j++) {
    if (parseInt(Math.pow(j, 2) > H)) {
      break;
    } else {
      for (let k = parseInt(Math.pow(j, 2)); k < H + 1; k += j) {
        arr[k] = false;
      }
    }
  }
  for (let l = 2; l < H + 1; l++) {
    if (arr[l]) {
      count++;
    }
  }
  console.log(count);
}
