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

## Head Tail

head() is to return the first node, Tail is to Return the last (head has an extra d because list.head achieves the same thing we're trying to achieve.)

```js
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
```

## at

At starts with counting itself at 0, and will iterate through the list, incrementing it's count untill it reaches the required amount, to which it will return the value or null if the value does not exist

```js
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
```

## Pop

Struggled a bit with this one, but I found if we the nextNodes Next node doesn't exist then it's obviously the last one in the list and the current nodes nextNode will be assigned to `null`

```js
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
```

## contains

Contain consisted of checking the nodes for the value, the logic is that the list would be iterated and if the value wasn't found it would arrive at null, since we have to return a value false or in this case file not found, it just has to check if the current node exists.

```js
  contains(value) {
    let current = this.head;
    while (value != current.value) {
      current = current.nextNode;
      if (!current) {
        return "Value not found";
      }
    }
    return true;
  }
```

## find

Find uses the same as above but keeping a count and reurning the index

```js
  find(value) {
    let current = this.head;
    let count = 0;
    while (value != current.value) {
      count++;
      current = current.nextNode;
      if (!current) {
        return null;
      }
    }

    return `"Index ${count} is ${value}`;
  }
```

## toString

This feels convoluted but this is about understanding data structures at a foundantional level (as TOP puts it, we dont have much need for a Linkedlist when we have arrays.) THe logic is to grab the value as long as it exists and to check the next node before the loop repeats, if the next node is empty it adds the null and the loop closes out

```js
  toString() {
    let current = this.head;
    let string = `( ${current.value} ) -> `;
    while (current.nextNode) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
      if (!current.nextNode) {
        string += ` ${current.nextNode} `;
      }
    }
    return string;
  }
```

## Thoughts

This exercise and as a whole the computer science part have been very interesting, I want to come back to this as some point to see if it's possible to make a LinkedList withbout being DRY
