'use strict';

const linkedList = require('./linked-list'),
      ava = require('ava'),
      generateRandomArray = () => {
        const randomAppend = Math.floor(Math.random() * (150) - 1) + 1,
              randomArr = [];

        randomArr.length = randomAppend;
        randomArr.fill('Test');

        return randomArr;
      };

ava.test('LinkedList #createLinkedList should return a linked list', t => {
  const ll = linkedList.createLinkedList();

  t.true(typeof ll.append === 'function');
  t.true(typeof ll.insert === 'function');
  t.true(typeof ll.insertAt === 'function');
  t.true(typeof ll.remove === 'function');
  t.true(typeof ll.indexOf === 'function');
  t.true(typeof ll.removeAt === 'function');
  t.true(typeof ll.isEmpty === 'function');
  t.true(typeof ll.size === 'function');
  t.true(typeof ll.toString === 'function');
  t.true(typeof ll.dump === 'function');
});

ava.test('LinkedList #size returns the correct size', t => {
  const ll = linkedList.createLinkedList(),
        randomArr = generateRandomArray();

  t.true(ll.size() === 0);

  randomArr.forEach((item, indx) => {
    ll.append(`${item}_${indx}`);
  });

  t.is(ll.size(), randomArr.length);
});

ava.test('Linked List #append adds items to the linked list', t => {
  const ll = linkedList.createLinkedList(),
        randomArr = generateRandomArray();

  ll.append('test!');

  t.true(ll.dump().length === 1, 'Size is not 1');

  randomArr.forEach((item, indx) => {
    ll.append(`${item}_${indx}`);
  });

  t.true(ll.dump().length === randomArr.length + 1);
});

ava.test('Linked List #dump returns head and length', t => {
  const ll = linkedList.createLinkedList();

  t.true(ll.dump().head === null);
  t.true(ll.dump().length === 0);

  ll.append('yo dawg');

  t.true(ll.dump().length === 1);
  t.true(ll.dump().head.item === 'yo dawg');
  t.true(ll.dump().head.next === null);
});

ava.test('Linked List #isEmpty', t => {
  const ll = linkedList.createLinkedList();

  t.true(ll.isEmpty());

  ll.append('test');

  t.false(ll.isEmpty());
});

ava.test('Linked List #insertAt', t => {
  const ll = linkedList.createLinkedList();

  ll.append('test 1');
  ll.append('test 2');

  ll.insertAt('test 1.5', 2);

  t.true(ll.dump().head.next.item === 'test 1.5');
});

ava.test('Linked List #indexOf', t => {
  const ll = linkedList.createLinkedList();

  ll.append('test 1');
  ll.append('test 2');
  ll.append('test 3');
  ll.append('test 4');

  console.log(ll.indexOf('test 1'));
  console.log(ll.indexOf('test 2'));
  console.log(ll.indexOf('test 3'));
  console.log(ll.indexOf('test 4'));

  t.true(ll.indexOf('test 1') === 0);
  t.true(ll.indexOf('test 3') === 2);
  t.true(ll.indexOf('test 2') === 1);
  t.true(ll.indexOf('test 4') === 3);
  t.true(ll.indexOf('I fail hard') === -1);
});

ava.test('Linked List #removeAt', t => {
  const ll = linkedList.createLinkedList();

  ll.append('test 1');
  ll.append('test 2');
  ll.append('test 3');
  ll.append('test 4');

  t.true(ll.removeAt(1) === 'test 2');

  t.true(ll.dump().length === 3);
  t.true(ll.dump().head.item === 'test 1');
  t.true(ll.dump().head.next.item === 'test 3');
  t.true(ll.dump().head.next.next.item === 'test 4');

  t.true(ll.removeAt(0) === 'test 1');
  t.true(ll.dump().length === 2);

  t.true(ll.dump().head.item === 'test 3');
  t.true(ll.dump().head.next.item === 'test 4');

});

ava.test('Linked List #remove should remove an item', t => {
    const ll = linkedList.createLinkedList();

  ll.append('test 1');
  ll.append('test 2');
  ll.append('test 3');
  ll.append('test 4');

  ll.remove('test 1');

  t.true(ll.dump().length === 3);
  t.true(ll.dump().head.item === 'test 2');

  ll.remove('test 3');

  t.true(ll.dump().length === 2);
  t.true(ll.dump().head.item === 'test 2');
  t.true(ll.dump().head.next.item === 'test 4');

  ll.remove('test 4');

  t.true(ll.dump().length === 1);
  t.true(ll.dump().head.item === 'test 2');
  t.true(ll.dump().head.next === null);
});
