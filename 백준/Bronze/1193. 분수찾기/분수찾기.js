const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let line = 1;
let nums = 1;
let 분자 = 1;
let 분모 = 1;
while (input > nums) {
  nums += 1 + line++;
}
if (line % 2 == 0) {
  분자 = line - (nums - input);
  분모 = nums - input + 1;
  console.log(`${분자}/${분모}`);
} else {
  분자 = nums - input + 1;
  분모 = line - (nums - input);
  console.log(`${분자}/${분모}`);
}