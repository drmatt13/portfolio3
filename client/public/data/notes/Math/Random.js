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
{'js': `// Math.random() returns a random number between 0 (included) and 1 (excluded)
// 0.0 - 0.99999999999999999

// Math.floor(x) rounds a number downward to its nearest integer
// Math.floor(9.9) -> returns 9

// generate a random integer from 0 to 9
Math.floor(Math.random() * 10);

// generate a random integer from 0 to 10
Math.floor(Math.random() * 11);

// generate a random integer from 1 to 10
Math.floor(Math.random() * 10) + 1;

// generate a random integer from 1 to 100
Math.floor(Math.random() * 100) + 1;

// generate a random integer within range max excluded
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// generate a random integer within range max included
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// generate a random color "#000000" - "#FFFFFF"
let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);`},
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
    ]

];

module.exports = data;