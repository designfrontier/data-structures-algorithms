'use strict';

const createStack = (objIn) => {
  const rtn = objIn || {};
  let stackArray = [];
  const stackMethods = {
    push: (toAdd) => {
      stackArray.push(toAdd);
    },
    pop: () => stackArray.pop(),
    peek: () => stackArray[stackArray.length - 1],
    clear: () => {
      stackArray = [];
    },
    size: () => stackArray.length,
    isEmpty: () => stackArray.length === 0
  };

  return Object.keys(stackMethods).reduce((obj, key) => {
    obj[key] = stackMethods[key];

    return obj;
  }, rtn);
};

module.exports = {
  newStack: createStack
};
