# Linked Lists

This is a repo for the linked lists project at the odin project, the assignment can be found [here](https://www.theodinproject.com/lessons/javascript-linked-lists).

## Starting off

Creating an empty Linkedlist class and Node Class

```js
class LinkedList {
  constructor() {
    this.head = null;
  }
  append() {}
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
```

## Append

researching linked lists lead to this function as a good starting point which helped me understand how to code in a Linked List after numerous videos on the theory of them

```js
  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
  }
```
