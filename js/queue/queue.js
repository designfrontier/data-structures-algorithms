'use strict';

const createQueue = (objIn) => {
  let queue = [];
  const rtn = objIn || {};
  const queueTemplate = {
    enqueue: (item) => {
      queue.push(item);
    },
    dequeue: () => queue.shift(),
    front: () => queue[0],
    isEmpty: () => queue.length === 0,
    clear: () => {
      queue = [];
    },
    size: () => queue.length,
    dump: () => queue
  };

  return Object.keys(queueTemplate).reduce((obj, key) => {
    obj[key] = queueTemplate[key];

    return obj;
  }, rtn);
};

const createPriorityQueue = (objIn) => {
  let queue = [];
  const rtn = objIn || {};
  const queueTemplate = {
    enqueue: (item, priority) => {
      let added = false;

      if (queue.length === 0) {
        queue.push({item: item, priority: priority});
      } else {
        for(let i = 0; i < queue.length; i++) {
          if (queue[i].priority > priority) {
            queue.splice(i, 0, {item: item, priority: priority});
            return;
          }
        }

        queue.push({item: item, priority: priority});
      }
    },
    dequeue: () => queue.shift().item,
    front: () => queue[0].item,
    isEmpty: () => queue.length === 0,
    clear: () => {
      queue = [];
    },
    size: () => queue.length,
    dump: () => queue
  };

  return Object.keys(queueTemplate).reduce((obj, key) => {
    obj[key] = queueTemplate[key];

    return obj;
  }, rtn);
};

const hotPotatoQueue = () => {
  const queue = createQueue();

  queue.hotPotato = (items, times) => {
    items.forEach((item) => {
      queue.enqueue(item);
    });

    while (queue.size() > 1) {
      for(let i = 0; i < times; i++) {
        queue.enqueue(queue.dequeue());
      }
      queue.dequeue();
    }

    return queue.dequeue();
  };

  return queue;
}

module.exports = {
  createQueue: createQueue,
  createPriorityQueue: createPriorityQueue,
  createHotPotatoQueue: hotPotatoQueue
};
