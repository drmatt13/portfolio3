// replace `${i}` --> \`\${i}\`

const data = [

        // // card ----------------------------------------------------- >
        // [
        //     //html
        //     [],
        //     //css
        //     [],
        //     //js
        //     [],
        //     // output
        //     [
        //         {'comment': `Create canvas with hardcoded size`}
        //     ],
        //     //render
        //     {'render': false}
        // ],
    
        // card ----------------------------------------------------- >
        [
            //html
            [
{'html': `<canvas id="canvas" width="200" height="300"></canvas>`}
            ],
            //css
            [
{'css': `canvas {
  border: 1px solid black;
}`}
            ],
            //js
            [
{'js' : `let c = document.getElementById("canvas");
let ctx = c.getContext("2d");`}
            ],
            // output
            [],
            //render
            {'render': true}
        ],

        // card ----------------------------------------------------- >
        [
            //html
            [
{'html': `<canvas id="canvas" width="200" height="300"></canvas>`}
            ],
            //css
            [
{'css': `canvas {
  border: 1px solid black;
}`}
            ],
            //js
            [
{'js' : `let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
// ****
// ****
// ****
// ****
// ****
// ****
// ****
// ****
// ****
// ****
// ****
// ****
// ****
// ****`}
            ],
            // output
            [],
            //render
            {'render': true}
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
            [
                {'comment': `Draw on canvas`}
            ],
            //render
            {'render': false}
        ],

        // card ----------------------------------------------------- >
        [
            //html
            [
{'html': `<canvas id="canvas" width="200" height="300"></canvas>`}
            ],
            //css
            [
{'css': `canvas {
  border: 1px solid black;
}`}
            ],
            //js
            [
{'js' : `let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

const paint = () => {


  ctx.clearRect(0, 0, ctx.clientWidth, ctx.clientHeight);

  // (0, 0) = top left corner of canvas
  // x moves right
  // y moves down

  // use ctx.beginPath() when starting a new path
  ctx.beginPath()

  // use ctx.moveTo(x, y) to move to stroke starting coordinates
  ctx.moveTo(0, 0);

  let height = 300;
  let width = 200;

  // use ctx.lineTo(x, y) to draw a vector??? **** idk  -  y goes down
  ctx.lineTo(width, height/5);
  ctx.lineTo(0, 2*height/5);
  ctx.lineTo(width/2, 3*height/5);
  ctx.lineTo(width/4, 4*height/5);


  ctx.strokeStyle = "#F00";
  ctx.lineWidth = 0.5;

  ctx.lineTo(width, height);

  // use ctx.stroke() to draw the lines above
  ctx.stroke();
}

paint();`}
            ],
            // output
            [],
            //render
            {'render': true}
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
            [
                {'comment': `***** size`}
            ],
            //render
            {'render': false}
        ],

        // card ----------------------------------------------------- >
        [
            //html
            [
{'html': `<canvas id="canvas"></canvas>`}
            ],
            //css
            [
{'css': `canvas {
  height: 50vh;
  width: 50vw;
  border: 1px solid black;
}`}
            ],
            //js
            [
{'js' : `let c = document.getElementById("canvas");
let ctx = c.getContext("2d");


// repaint() on display change
`}
            ],
            // output
            [],
            //render
            {'render': true}
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