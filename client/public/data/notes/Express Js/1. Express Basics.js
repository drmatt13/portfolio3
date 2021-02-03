const data = [

    // card ----------------------------------------------------- >
    [
        //html
        [],
        //css
        [],
        //js
        [
{'js': `// Initalize express js app

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`server running on port \${PORT}\`);
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
{'js': `// Global settings

// Load env vars

// require('dotenv').config();
dotenv.config({ path: './config/config.env' });

// Body-Parser middleware
app.use(express.json());

// Allow html form data to be parsed in req.body
app.use(express.urlencoded({ extended: false }));

// Allow cookies to be parsed in req.cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Set directory for rendered pages to ./public
app.use(express.static(__dirname + '/public'));

// Favicon
const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/favicon.ico'));

// Import route
const route = require("./routes/route");
app.use("/route", route);

// Set express view engine
app.set('view engine', 'ejs');`},
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
{'js': `// Express router

const express = require("express");
const router = express.Router();

// GET method route
router
  .route('/')
  .get((req, res) => {
    // send object as string
    res.status(200).json(Object);
  });

// Route parameters, the hyphen (-) and the dot (.) are interpreted literally
router.get('/users/:userId.name/books/:school-bookId', (req, res) => {
  // Request URL: http://localhost:3000/users.usersName/34/books/schoolName-8989
  // req.params: { 
  //   "userId": "34",
  //   "name": "usersName",
  //   "school": "schoolName",
  //   "bookId": "8989"
  // }
  res.status(200).json(req.params);
});

// Route query, /route?key=value&key=value&...
router.get('/users', (req, res) => {
  // Request URL: http://localhost:3000/users?name=foo&age=bar
  // req.query: { "name": "foo", "age": "bar" }
  const { name, age } = req.query;
  res.render(__dirname + "/../views/file", name, age);
});

// POST method route
// Content-Type -> application/json for sending object data
router.post('/', (req, res) => {
  // req.body: { "jsonString": "Object", "userId": "1" }
  const Object = JSON.parse(req.body.jsonString);
  res.render(__dirname + "/../views/file", Object, req.body.userId);
})

// PUT method route
router.put('/', (req, res) => {
  res.send('<h1>PUT request to the homepage</h1>')
})

// DELETE method route
router.delete('/', (req, res) => {
  res.send('<h1>DELETE request to the homepage</h1>')
})

module.exports = router;`},
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
{'js': `// Express controller

// Within Controller

// @desc      description
// @route     GET /route/:id
// @access    Public
exports.controller1 = (req, res, next) => {
  res.send("<h1>HTTP GET method</h1>");
}

// @desc      description
// @route     Post /route/route
// @access    Public
exports.controller2 = (req, res, next) => {
  res.send("<h1>HTTP POST method</h1>");
};

// Within router
const { controller1, controller2 } = require('../controllers/exampleController');
router
  .route('/')
    .get(controller1)
    .post(middleware, ... , controller2);`}
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
{'js': `// Middleware

// Create middleware function
const timeStamp => (req, res, next) {
  console.log('Time:', Date.now());
  next();
}

// Route specific middleware
app.get('/', timestamp, ..., (req, res) => {
  res.send('GET request to the homepage');
});

// Gobal middleware
app.use(timeStamp);

// timeStamp() -> app.get()
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// Auth middleware
auth => (req, res, next) {
  if (req.query.id == '9sdf89sdfh') {
    next();
  } else {
    app.send('No auth');
  }
}

// Express router middleware
router.use(auth);

// Error-handling middleware
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  }
});
`},
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
{'js': `// Error Handling

// Create Middleware
const errorHandler = (err, req, res, next) => {

  // Log to console for dev
  console.log(err.stack.red);

  res
    .status(err.statusCode || 500)
    .json({
    success: false,
    error: err.message || 'Server Error',
  });
}
module.exports = errorHandler;



// Within index.js
// After mounting routers, attach middleware
const route = require('./routes/route');
app.use('/route/route', route);

// Error handler middleware
const errorHandler = require('./middleware/error');
app.use(errorHandler);



// Within Controller
exports.getBootcamp = async (req, res, next) => {
  try {
    const promise = await Promise();
    res
      .status(200)
      .json({ success: true });
  } catch (err) {
    next(err);
  }
}`},
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
{'js': `// User-supplied Data
req.params
req.query
req.body

req = {
_startTime     :    Date, 
app            :    function(req,res){},
body           :    {},
client         :    Socket,
complete       :    Boolean,
connection     :    Socket,
cookies        :    {},
files          :    {},
headers        :    {},
httpVersion    :    String,
httpVersionMajor :  Number,
httpVersionMinor :  Number,
method         :    String,  // e.g. GET POST PUT DELETE
next           :    function next(err){},
originalUrl    :    String,
params         :    [],
query          :    {},
readable       :    Boolean,
res            :    ServerResponse,
route          :    Route,
signedCookies  :    {},
socket         :    Socket,
url            :    String
}

res = {
app            :    function(req, res) {},
chunkedEncoding:    Boolean,
connection     :    Socket,
finished       :    Boolean,
output         :    [],
outputEncodings:    [],
req            :    IncomingMessage,
sendDate       :    Boolean,
shouldkeepAlive:    Boolean,
socket         :    Socket,
viewCallbacks  :    [],
writable       :     Boolean
}`},
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
            [
{'comment': `HTTP response status codes

1. Informational responses (100–199)
2. Successful responses (200–299)
3. Redirects (300–399)
4. Client errors (400–499)
5. Server errors (500–599)

Informational responses
100 Continue
101 Switching Protocol
102 Processing 
103 Early Hints

Successful responses
200 OK
201 Created
202 Accepted
203 Non-Authoritative Information
204 No Content
205 Reset Content
206 Partial Content
207 Multi-Status
208 Already Reported
226 IM Used

Redirects
300 Multiple Choice
301 Moved Permanently
302 Found
303 See Other
304 Not Modified
305 Use Proxy
307 Temporary Redirect
308 Permanent Redirect

Client errors
400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Timeout
409 Conflict
410 Gone
411 Length Required
412 Precondition Failed
413 Payload Too Large
414 URI Too Long
415 Unsupported Media Type
416 Range Not Satisfiable
417 Expectation Failed
418 I'm a teapot
421 Misdirected Request
422 Unprocessable Entity
423 Locked
424 Failed Dependency
425 Too Early
426 Upgrade Required
428 Precondition Required
429 Too Many Requests
431 Request Header Fields Too Large
451 Unavailable For Legal Reasons

Server errors
500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
505 HTTP Version Not Supported
506 Variant Also Negotiates
507 Insufficient Storage
508 Loop Detected
510 Not Extended
511 Network Authentication Required`}
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
        {'render': true}
    ],
    
];

module.exports = data;