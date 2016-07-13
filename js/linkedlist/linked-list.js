'use strict';

const createLinkedList = () => {
  const iterate = (head, index) => {
    let curr = head, prev, i = 0;

    while (curr.next && (typeof index === 'number' ? i < index : true)) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    return {prev: prev, curr: curr};
  };

  let head = null,
      length = 0;

  return {
    append: (item) => {
      let prev, curr;

      if (head === null) {
        // first item being appended
        head = {
          item: item,
          next: null
        };
      } else {
        //follow the nexts until null and append
        iterate(head).curr.next = {item: item, next: null};
      }

      length ++;

    },

    remove: () => {

    },

    indexOf: () => {

    },

    insert: () => {},
    insertAt: (item, index) => {
      if (index > length) {
        return false;
      }

      const slot = iterate(head, index);

      slot.prev.next = {item: item, next: slot.curr};

      length++;

      return true;
    },
    removeAt: () => {},
    toString: () => {},
    dump: () => {
      return {
        head: head,
        length: length
      };
    },

    isEmpty: () => {
      return head === null;
    },

    size: () => {
      return length;
    }
  }
};

module.exports = {
  createLinkedList: createLinkedList
};

console.log(createLinkedList().size());
