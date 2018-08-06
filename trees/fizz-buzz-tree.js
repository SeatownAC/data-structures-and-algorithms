'use strict';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class Tree {

  constructor() {
    this.root = null;
  }

function fizzBuzzTree(tree) {
    if(tree.root != null) {
        current = tree.root;
        treeWalk(current, null);


    }


}

function treeWalk(node, nodeParent) {
    updateValue(node);
    if(node.leftNode) {
        treeWalk(node.leftNode, node);
    }
    if(node.rightNode) {
        treeWalk(node.rightNode, node);
    }
    if(node.leftNode === null && node.rightNode === null) {
        break;
    }

    


}

function updateValue(node) {
    if(node.value % 3 === 0) {
        node.value = 'fizz';
    }
    else if(node.value % 5 === 0) {
        node.value = 'buzz';
        }
    else(node.value % 3 === 0 && node.value % 5 === 0) {
        node.value = 'fizzbuzz';
    }
        
}