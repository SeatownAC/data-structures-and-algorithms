'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

class LinkedList {

    constructor() {
      this.head = null;
    }


    append(val) {

    const newNode =newNode(val);

    if (!this.head) {
        this.head = newNode;
        return this;
    }

    var currentNode = this.head;

    while(currentNode.next !== null) {
        currentNode = currentNode.next;
    }

    currentNode.next = newNode;

     //if your adding a new head then we need to re-adjust the current value of the current head, setting the link list  head to the new head, and setting th eold head to the old head's next

    insertBefore(val, newVal) {
        var newNode = newNode(newVal);
        var currentNode = this.head;
        while(currentNode.next.val !== value) {
            currentNode = currentNode.next;

        }
        //code below ensures that the new next points to the old next, making it so we don't lose all the other nodes after because the constructor is set up to to make the next node null
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;

    insertAfter(val, newVal) {
        var newNode = newNode(newVal);
        var currentNode = this.head;
        while(currentNode.next.val !== value) {
            currentNode = currentNode.next;

        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;

        }
    
    }




    module.exports = LinkedList;