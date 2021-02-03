// replace `${i}` --> \`\${i}\`

const data = [
    
    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `// Singly-linked lists are already defined as:

// function ListNode(x) {
//     this.value = x;
//     this.next = null;
// }

// removeKFromList(nodeHead, valueToRemove);

function removeKFromList(l, k) {

  let node = l;
  let head = node;
  let prev = head;
  let first = true;
  if (node == null) return null;

  // parse through each node in the list
  while (node) {
    // if head == k, head = node.next
    if (first) {
      if (head.value == k) {
        head = node.next;
      } else {
        first = false;
      }
      node = node.next;
    } else {
      if (node.value == k) {
        prev.next = node.next;
      }
      prev = node;
      node = node.next
    }
  }
  return head;
}`},
        ],
        // output
        [
{'input': `[1, 2, 3, 4, 5, 6, 7]

nodeList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 6,
            next: {
              value: 7,
              next: null
            }
          }
        }
      }
    }
  }
}

console.log(removeKFromList(nodeList, 5));`},
{'output': `\n[1, 2, 3, 4, 6, 7]

nodeList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 6,
          next: {
            value: 7,
            next: null
          }
        }
      }
    }
  }
}`}
        ],
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