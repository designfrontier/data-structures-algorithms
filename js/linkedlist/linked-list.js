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
    },
    indexOf = (element) => {
      let i = 0,
          current = head;

      while (current) {
        if (current.item === element) {
          return i;
        }

        i++;
        current = current.next;
      }

      return -1;
    },
    removeAt = (index) => {
      let i = -1,
          prev = head,
          next = head,
          current = head;

      for (i = -1; i < index; i ++) {
        prev = current;
        current = next;
        next = current.next;
      }

      if (prev === current) {
        head = next;
      } else {
        prev.next = next;
      }

      length--;

      return current.item;
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

    indexOf: indexOf,

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

    remove: (item) => {
      const index = indexOf(item);

      if (index === -1) {
        return null;
      }

      return removeAt(index);
    },

    removeAt: removeAt,

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
