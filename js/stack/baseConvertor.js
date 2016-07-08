'use strict';

const stack = require('./stack');
const digits = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const baseConvertor = (num, base) => {
  const divisionStack = stack.newStack();
  let decNumber = num;
  let binaryString = '';

  while (decNumber > 0) {
    divisionStack.push(digits[Math.floor(decNumber % base)]);
    decNumber = Math.floor(decNumber / base);
  }

  while (!divisionStack.isEmpty()) {
    binaryString += divisionStack.pop();
  }

  return binaryString;
};

module.exports = baseConvertor;
