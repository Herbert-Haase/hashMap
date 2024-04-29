import { Node } from "./llNode.js";

class LinkedList {
  constructor(key) {
    this.head = new Node(key);
  }
  append(key) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(key);
  }
  prepend(key) {
    const newNode = new Node(key);
    newNode.next = this.head;
    this.head = newNode;
  }
  size() {
    let size = 1;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      size = ++size;
    }
    return size;
  }
  get tail() {
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < this.size(); i++) {
      if (index === i) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  insertAt(key, index) {
    const newNode = new Node(key);
    newNode.next = this.at(index);
    if (index < 1) {
      this.prepend(key);
    } else {
      this.at(index - 1).next = newNode;
    }
  }
  removeAt(index) {
    if (index > 0) {
      this.at(index - 1).next = this.at(index + 1);
    } else if (this.head.next === null) {
      this.head.value = null;
      this.head.key = null;
    } else {
      this.head = this.at(index + 1);
    }
  }

  pop() {
    if (this.size() === 1) {
      this.head = null;
    } else {
      const prelastNode = this.at(this.size() - 2);
      prelastNode.next = null;
    }
  }
  find(key) {
    let currentNode = this.head;
    for (let i = 0; i < this.size(); i++) {
      if (currentNode.key === key) {
        return i;
      }
      currentNode = currentNode.next;
    }
  }
  contains(key) {
    if (this.find(key) !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  toString() {
    const arrayOfNodes = [];
    let currentNode = this.head;
    for (let i = 0; i < this.size(); i++) {
      arrayOfNodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return "( " + arrayOfNodes.join(" ) -> ( ") + " ) -> null";
  }
}

export { LinkedList };
