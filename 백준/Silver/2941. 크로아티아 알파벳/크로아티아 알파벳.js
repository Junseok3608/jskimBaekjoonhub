let input = require("fs").readFileSync("/dev/stdin").toString().trim();
const replaceStr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
for (let replStr of replaceStr) {
  input = input.split(replStr).join("q");
}
console.log(input.length);