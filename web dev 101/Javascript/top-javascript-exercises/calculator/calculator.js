function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(ary) {
	return ary.reduce((total, cVal) => total + cVal, 0);
}

function multiply(ary) {
	return ary.reduce((total, cVal) => total * cVal, ary[0]) / ary[0];
}

function power(a, b) {
	return a ** b
}

function factorial(num) {
	let result = 1;
	for (i = num; i > 0; i--) {
		result = result * i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}