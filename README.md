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
    this.nextNode = null;
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

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
  }
```

## Prepend

Prepend was easier to visualise, being the opposite of append, A loop wasn't needed to find when the next node ends, instead just applying the value to the head and it's next node to the old head.

```js
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
```

## Size

Size was a matter of looping throuh the Nodes untill there was no longer a nextNode while counting then returning the count.

```js
 size() {
    let counter = 1;
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
      counter++;
    }
    return counter;
  }
```
