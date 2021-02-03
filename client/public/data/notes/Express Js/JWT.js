const data = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `// post -> '/register'
// if !user
// create user & encrypt password
const bcrypt = require("bcrypt");
// create salt
bcrypt.genSalt(10, (error, salt) => {
  // hash the password with the salt,
  // the salt also becomes the leading variable
  // --> <salt><hashstring>
  bcrypt.hash(password, salt, (error, hash) => {
    // update password w/ hashed password
    req.body.password = hash;
    // create user {
    // }
    const token = jwt.sign({payload: user_id}, 'secret');
    // render('/route', {token});
  });
});`},
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
{'js': `// post -> '/login'
// get user {}
// compare client password with encrypted password
bcrypt.compare(req.password, user.password, (error, same) => {
if (same) {
  // create a jsonwebtoken containing the user_id & expiration
  // the payload is hashed w/ the secret variable
  const token = jwt.sign({payload: user_id}, secret);
  // render home, {token}
  } else {
  // password incorrect
  }
});`},
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
{'js': `// get -> '/'
// if !token render login page,
// if token render home page,
jwt.verify(req.cookies.token, secret, (error, verifiedJwt) => {
  if(!error){
    // verifiedJwt
  } else {
    // error
  }
});`}
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
        {'render': true}
    ],
    
];

module.exports = data;