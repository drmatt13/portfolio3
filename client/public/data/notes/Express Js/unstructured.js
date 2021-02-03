const data = [


        // card ----------------------------------------------------- >
        [
            //html
            [],
            //css
            [],
            //js
            [
{'js': `

// can also have imports at the bottom of the page
// exports.name1 = function1;
// exports.name2 = function2;

// default export
// module.exports = function;

// import by using destructuring to import only certain functions/classes
const { function1, function2: rename } = require('./route');`}
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
{'js': `// Express Controllers

// @desc    Description
// @route   GET /route/route
// @access  Public
exports.controller1 = (req, res, next) => {
  promise()
  .then(data => {

  })
  .catch(error => {

  })
};

// @desc    Description
// @route   POST /route/route
// @access  Public
exports.controller2 = async (req, res, next) => {
  try {
    await promise();
  } catch (error) {

  }
};

// within routes
const {
  controller1,
  controller2
} = require('./route/controller');

router
  .route('/route')
  .get(controller1)
  .post(controller2);`},
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
{'js': `// error handling middleware
const errorHandler = (err, req, res, next) => {

  // Log to console for dev
  console.log(err.stack);

  res.status(500).json({
    success: false,
    error: err.message
  })
};

module.exports = errorHandler;

// within a controller
try {
    
} catch (error) {

  // res.status(400).json({
  //     success: false
  // });

  next(error);
}

// apply the error handler last within the server
app.use('/route', routeTest);
app.use(errorHandler);`},
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
{'js': `// NodeGeocoder

// initialize node-geocoder in a serparate module
const NodeGeocoder = require('node-geocoder');

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null
}

const geocoder = NodeGeocoder(options);

module.exports = geocoder;

// within a controller
exports.controller = async (req, res) => {

  const { zipcode, distance } = req.params;

  const location = await geocoder.geocode(zipcode);
  const latitude = loc[0].latitude;
  const longitude = loc[0].longitude;

  console.log(location);
};

// within routes
const controller = require('./route/controller');

router
  .route('/route/:zipcode/:distance')
  .get(controller)`}
            ],
            // output
            [
{'input': `fetch('/route/02199/100')`},
{'output': `[
  {
    formattedAddress: ', Boston, MA 02199, US',
    latitude: 42.347417,
    longitude: -71.082126,
    country: null,
    city: 'Boston',
    stateCode: 'MA',
    zipcode: '02199',
    streetName: '',
    streetNumber: null,
    countryCode: 'US',
    provider: 'mapquest'
  }
]`}
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
{'js': `// file system
const fs = require('fs');

// creates a file named data.txt in the 
servers root directory containing 'Hello World'
fs.writeFileSync('data.txt', 'Hello World');

// rename file in root directory
fs.renameSync('data1.txt', 'data2.txt');

// remove file in root directory
fs.unlinkSync('data1.txt', 'data2.txt');

// get all files in root directory and store in an array
// ['file1.txt', 'file2.js', 'file3.json', ...]
const dir = fs.readdirSync(__dirname);

// create new folder in root directory
fs.mkdirSync('new folder');

// load data
fs.readFile('./test.txt', function (err, data) {
  if (err) {
    throw err; 
  }
  console.log(Buffer.from(data).toString());
});

// listen for changes to file
fs.watchFile('new folder/data.txt', () => {
  console.log('data file was changed');
});`},
        ],
        // output
        [
{'output': `data.txt -> 'Hello World'`}
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
{'js': `// creates a secure Web URL for your localhost server

const ngrok = require('ngrok');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT, () => {
  (async function() {
    const endPoint = await ngrok.connect(PORT);
    console.log(endPoint);
  })()
});`},
        ],
        // output
        [
{'output': `https://8b600fd107ab.ngrok.io`}
        ],
        //render
        {'render': false}
    ],
    
];

module.exports = data;