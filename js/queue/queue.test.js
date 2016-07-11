'use strict';

const queue = require('./queue');
const ava = require('ava');

ava.test('priority queue should order by priority', (t) => {
  const pq = queue.createPriorityQueue();

  pq.enqueue('daniel', 1);
  pq.enqueue('Sam', 1);
  pq.enqueue('Tom', 2);
  pq.enqueue('Frank', 3);
  pq.enqueue('Will', 2);
  pq.enqueue('Mark', 1);
  pq.enqueue('Katie', 0);

  t.is(pq.dequeue(), 'Katie');
  t.is(pq.dequeue(), 'daniel');
  t.is(pq.dequeue(), 'Sam');
  t.is(pq.dequeue(), 'Mark');
  t.is(pq.dequeue(), 'Tom');
  t.is(pq.dequeue(), 'Will');
  t.is(pq.dequeue(), 'Frank');
});


ava.test('queue should be in order', (t) => {
  const q = queue.createQueue();

  q.enqueue('daniel');
  q.enqueue('Sam');
  q.enqueue('Tom');

  t.is(q.dequeue(), 'daniel');
  t.is(q.dequeue(), 'Sam');
  t.is(q.dequeue(), 'Tom');
});


ava.test('hotPotato queue should return the final winner', (t) => {
  const hpq = queue.createHotPotatoQueue();

  t.is(hpq.hotPotato(['sam', 'tom', 'molly'], 7), 'molly');
  t.is(hpq.hotPotato(['sam', 'tom', 'molly'], 3), 'tom');
  t.is(hpq.hotPotato(['sam', 'tom', 'molly'], 30), 'molly');
  t.is(hpq.hotPotato(['sam', 'tom', 'molly'], 11), 'sam');
});
