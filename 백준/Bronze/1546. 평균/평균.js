const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const reco = input[1].split(" ").map(Number);
const hiReco = reco.concat().sort((a, b) => {
  return b - a;
})[0];
let newReco = 0;
for (i = 0; i < Number(input[0]); i++) {
  newReco += (reco[i] / hiReco) * 100;
}
console.log(newReco / Number(input[0]));
