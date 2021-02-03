// replace `${i}` --> \`\${i}\`

const data = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [],
        // output
[{'comment': `Stack
last in first out
(push) <-> (pop) -> (x2) -> (x3)`}],
        //render
        {'render': false}
    ],
    
    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `// stack from array
let stack = [];

// push, pop based
stack.push(x1);
stack.push(x2);
stack.push(x3);
stack.pop();
stack.pop();
stack.pop();

// unshift, shift based
stack.unshift(x1);
stack.unshift(x2);
stack.unshift(x3);
stack.shift();
stack.shift();
stack.shift();`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `// shift and unshift reindexes every item in the array, bad in big lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      // unshifting value from the left
      // allows for constant time rather then parsing to get tail-1 or using a doubly linked list
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    // shift
    if (!this.first) return null;
    let temp = this.first;
    if (this.first == this.last) {
      this.last == null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();
stack.push(x1);
stack.push(x2);
stack.push(x3);
stack.pop();
stack.pop();
stack.pop();`},
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [],
        // output
[{'comment': `Queue
last in first out
(push) -> (x3) -> (x2) -> (x1) -> (pop)`}],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
[{'js': `// queue from array
let queue = [];

// push, shift based
queue.push(x1);
queue.push(x2);
queue.push(x3);
queue.shift();
queue.shift();
queue.shift();

// unshift, pop based
stack.unshift(x1);
stack.unshift(x2);
stack.unshift(x3);
stack.pop();
stack.pop();
stack.pop();`}
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `// add to the end, remove from the beginning
// when using a singy linked list, removing from the end, causes you to have to parse the entire list to get n-1
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // add to the end
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // remove from the beginning
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first == this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let queue = new Queue();
queue.enqueue(x1);
queue.enqueue(x2);
queue.enqueue(x3);
queue.dequeue();
queue.dequeue();
queue.dequeue();`},
        ],
        // output
        [],
        //render
        {'render': false}
    ],

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [],
        // output
        [],
        //render
        {'render': false}
    ],

];

module.exports = data;