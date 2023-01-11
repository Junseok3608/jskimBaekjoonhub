let arr = [];
let dN;
for (i = 0; i < 10000; i++) {
  if (0 <= i && i < 10) {
    dN = 2 * i;
  } else if (10 <= i && i < 100) {
    dN = i + ((i % 100) - (i % 10)) / 10 + (i % 10);
  } else if (100 <= i && i < 1000) {
    dN = i + ((i % 1000) - (i % 100)) / 100 + ((i % 100) - (i % 10)) / 10 + (i % 10);
  } else if (1000 <= i && i < 10000) {
    dN = i + ((i % 10000) - (i % 1000)) / 1000 + ((i % 1000) - (i % 100)) / 100 + ((i % 100) - (i % 10)) / 10 + (i % 10);
  } else {
    dN = 10001;
  }
  arr.push(dN);
}

for (i = 1; i <= 10000; i++) {
  if (!arr.includes(i)) {
    console.log(i);
  }
}
