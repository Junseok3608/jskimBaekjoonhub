const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());

if (90 <= input) {
	console.log('A');
} else if (80 <= input) {
	console.log('B');
} else if (70 <= input) {
	console.log('C');
} else if (60 <= input) {
	console.log('D');
} else {
	console.log('F');
};
