const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const count = Number(input[0]);
for (i = 1; i <= count; i++) {
  let testCase = input[i].split(" ");
  let testTimes = Number(testCase[0]);
  let testCaseString = testCase[1].trim().split("");
  let result = "";
  for (let j = 0; j < testCaseString.length; j++) {
    result += testCaseString[j].repeat(testTimes);
  }
  console.log(result);
}