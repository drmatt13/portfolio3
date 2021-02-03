// replace `${i}` --> \`\${i}\`

const data = [
    
        // card ----------------------------------------------------- >
        [
            //html
            [
{'html': `<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>`}
            ],
            //css
            [
{'css': `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1px;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(140, 170, 200);
}`}
            ],
            //js
            [],
            // output
            [],
            //render
            {'render': true}
        ],
    
            // card ----------------------------------------------------- >
            [
                //html
                [
{'html': `<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`}
                ],
                //css
                [
{'css': `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    height: 80%;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    padding: 5px;
    border: 1px solid black;
    background-color: white;
}

div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(140, 170, 200);
}`}
                ],
                //js
                [],
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