// replace `${i}` --> \`\${i}\`

const data = [

// card ----------------------------------------------------- >
[
  //html
  [
{'html': `<mdmdskm />
x`}
  ],
  //css
  [],
  //js
  [],
  // output
  [],
  //render
  {'render': false}
],

        // card ----------------------------------------------------- >
        [
            //html
            [
{'html': `<form>
  <!-- hiuhi -->
  <label for="label">Lable:</label><br>
  <input type="text" name="label" id="label" value="default value" placeholder="placeholder value" required><br>
  <input type="submit" value="Submit"><br>
</form>`}
            ],
            //css
            [
{'css': `body {
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
{'html': `<form action="/social" method="post">
  <div>
    <input type="text" id="login" name="login" placeholder="Username" required>
  </div>
  <div>
    <input type="password" id="password" name="password" placeholder="Password" required>
  </div>
  <div>
    <input type="submit" value="Sign In">
  </div>
</form>`}
            ],
            //css
            [
{'css': `body {
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
{'html': `<form action="/social/register" method="post">
  <div>
    <input type="text" id="fname" name="fname" placeholder="First Name" required>
  </div>
  <div>
    <input type="text" id="lname" name="lname" placeholder="Last Name" required>
  </div>
  <div>
    <input type="text" id="username" name="username" placeholder="Username" required>
  </div>
  <div>
    <input type="email" id="email" name="email" placeholder="Email" required>
  </div>
  <div>
    <input type="password" id="password" name="password" placeholder="Password" required>
  </div>
  <div>
    <input type="password" id="password2" name="password2" placeholder="Confirm Password">
  </div>
  <div>
    <input type="submit" value="Register">
  </div>
</form>`}
            ],
            //css
            [
{'css': `body {
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
{'html': `<form action="/route" method="get">
  <p>Select an option</p>

  <fieldset id="group1">
    <div>
      <input type="radio" id="option1" value="option1" name="group1">
      <label for="option1">Option1</label>
    </div>
    <div>
      <input type="radio" id="option2" value="option2" name="group1">
      <label for="option2">Option2</label>
    </div>
    <div>
      <input type="radio" id="option3" value="option3" name="group1">
      <label for="option3">Option3</label>
    </div>
  </fieldset><br>
  
  <fieldset id="group2">
    <div>
      <input type="radio" id="option1" value="option1" name="group2">
      <label for="option1">Option1</label>
    </div>
    <div>
      <input type="radio" id="option2" value="option2" name="group2">
      <label for="option2">Option2</label>
    </div>
    <div>
      <input type="radio" id="option3" value="option3" name="group2">
      <label for="option3">Option3</label>
    </div>
    <div>
      <input type="checkbox" id="option4" value="option4" name="group2">
      <label for="option4">Option4</label>
    </div>
  </fieldset><br>
  
  <input type="reset">
</form>`}
            ],
            //css
            [
{'css': `body {
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
{'html': `<!-- .type1, .type2  -> image/*, audio/*, video/*  -->
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Choose file to upload</label>
    <input type="file" id="file" name="file" accept=".jpg, .pdf" multiple>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>`}
            ],
            //css
            [
{'css': `body {
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
{'html': `<input type="button" value="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
<input type="submit" value="Submit">`}
            ],
            //css
            [],
            //js
            [],
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