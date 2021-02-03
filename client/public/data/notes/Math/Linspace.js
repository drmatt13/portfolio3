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
{'js': `// start=2.0, end=3.0, length=5
// result = [2.0,  2.25,  2.5,  2.75,  3.0]

const linspace = (start, end, length) => {
  let gap = (end-start)/(length-1);
  let arr = [];
  for (let i=0; i<length; i++) {
    arr.push(+(start+gap*i));
  }
  return arr;
}

console.log(linspace(0, 1, 6));`}
        ],
        // output
        [
            {'output': `[0, 0.2, 0.4, 0.6, 0.8, 1]`}
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
        [
{'js': `// populate y[] values from equation sin(x)

let x = linspace(0, 2*Math.PI, 5);
let y = [];

for (let i of x) {
  y.push(Math.sin(i).toFixed(2));
}

console.log(y);`}
        ],
        // output
        [
            {'output': `["0.00", "1.00", "0.00", "-1.00", "-0.00"]`}
        ],
        //render
        {'render': false}
    ],

];

module.exports = data;