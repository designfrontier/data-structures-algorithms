'use strict';

const stack = require('./stack');

const binaryConverter = (num) => {
  const divisionStack = stack.newStack();
  let decNumber = num;
  let binaryString = '';

  while (decNumber > 0) {
    divisionStack.push(Math.floor(decNumber % 2));
    decNumber = Math.floor(decNumber / 2);
  }

  while (!divisionStack.isEmpty()) {
    binaryString += divisionStack.pop();
  }

  return binaryString;
};

module.exports = binaryConverter;
