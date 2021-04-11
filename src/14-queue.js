// eslint-disable-next-line no-unused-vars
const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = null;
    this.sizee = 0;
    this.top = null;
  }

  get size() {
    return this.sizee;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (!this.first) {
      this.first = node;
      this.top = node;
    } else {
      this.top.next = node;
      this.top = node;
    }
    this.sizee += 1;
  }

  dequeue() {
    if (!this.first) return null;
    const deleted = this.first;
    if (this.top === this.first) {
      this.top = null;
    }
    this.first = this.first.next;
    this.sizee -= 1;
    return deleted.value;
  }
}

module.exports = Queue;
