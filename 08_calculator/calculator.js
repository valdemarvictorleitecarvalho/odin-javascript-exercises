const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sumArray = 0;

  for (let i = 0; i < array.length; i++) sumArray += array[i];

  return sumArray;
};

const multiply = function(array) {
  let multipliedArray = array[0];

  for (let i = 1; i < array.length; i++) multipliedArray *= array[i];

  return multipliedArray;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0) return 1;
  else return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
