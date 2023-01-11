const input = Number(require("fs").readFileSync("/dev/stdin").toString());

for (i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
