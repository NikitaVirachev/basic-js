const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const chainMaker = {
  head: null,
  length: 0,

  getLength() {
    return this.length;
  },
  addLink(value) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = new Node(value);
      current.next.prev = current;
    }

    this.length++;
    return this;
  },
  removeLink(position) {
    if ((position < 1 || position > this.length) || !typeof(position) === 'number' || !Number.isInteger(position)) {
      this.head = null;
      this.length = 0
      throw new TypeError("You can't remove incorrect link!");
    }

    let current = this.head;

    if (position === 1) {
      this.head = current.next;
      this.head.prev = null;
    } else {
      let index = 0;

      while (index < position - 1) {
        current = current.next;
        index++;
      }

      let prev = current.prev;
      prev.next = current.next;
      prev.next.prev = current.prev;
    }

    this.length--;
    return this;
  },
  reverseChain() {
    let current = this.head;
    let bof = null;

    if (this.length === 0) return this;

    while(current.next) {
      current = current.next;
    }

    this.head = current;

    do {
      bof = current.next;
      current.next = current.prev;
      current.prev = bof;
      current = current.next;

      if (current === null) break;

    } while (current.next);

    return this;
  },
  finishChain() {
    let chain = "";

    if (this.length === 0) {
      chain += '( ' + this.head.value + ' )';
    } else {
      let current = this.head;

      while(current.next) {
        chain += '( ' + current.value + ' )~~';
        current = current.next;
      }

      chain += '( ' + current.value + ' )';
    }

    this.head = null;
    this.length = 0

    return chain;
  }
};

module.exports = {
  chainMaker
};
