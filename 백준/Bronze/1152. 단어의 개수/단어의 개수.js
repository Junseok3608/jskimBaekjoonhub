const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const filterInput = input.filter((e) => {
  return e != "";
});

console.log(filterInput.length);

