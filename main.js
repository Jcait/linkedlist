class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let cHead = this.head;
      this.head = node;
      this.head.nextNode = cHead;
    }
  }

  size() {
    let counter = 1;
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
      counter++;
    }
    return counter;
  }

  headd() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }
  at(index) {
    const indx = index;
    let currentIndex = 0;
    let current = this.head;

    while (indx != currentIndex) {
      current = current.nextNode;
      currentIndex++;
      console.log(currentIndex);
    }
    return current;
  }

  pop() {
    let current = this.head;
    while (current.nextNode) {
      if (!current.nextNode.nextNode) {
        current.nextNode = null;
      } else {
        current = current.nextNode;
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
