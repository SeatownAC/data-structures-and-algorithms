'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
};