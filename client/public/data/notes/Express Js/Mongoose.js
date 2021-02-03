// replace `${i}` --> \`   \$   {i}   \`

const data = [

        // card ----------------------------------------------------- >
        [
            //html
            [],
            //css
            [],
            //js
            [
{'js': `// create function to connect node 
// application to MongoDB database
const mongoose = require('mongoose');

// <username> && <password> must be defined beforehand
// <dbname> will be created if does not exist
const URL = 'mongodb+srv://<username>:<password>@cluster0.ejwwm.mongodb.net/<dbname>?retryWrites=true&w=majority';

const connectDB = async () => {
  const conn = await mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  console.log(\`MongoDB Connected: \${conn.connection.host}\`);
}

module.exports = connectDB;`}
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
{'js': `// use previously made function from 
// the other module to connect to database
const connectDB = require('./module');
connectDB();`}
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
{'js': `// create mongoose schema object
const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more then 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description can not be more then 500 characters']
  },
  slug: String,
  value: {
    type: Number,
    enum: [1, 2, 2, 4, 5]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// The collection name for this DB is defined in the export
module.exports = mongoose.model('Collection', Schema);`}
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
{'js': `// Mongoose Middleware
const slugify = require('slugify');
Schema.pre('save', function(next) {
  // create slug
  this.slug = slugify(this.name);
  next();
});

Schema.post('find', function() {
  console.log(Date.now());
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
        [
{'js': `// within the express router
  
// import the model created above
const Model = require('./route');

router
  .route('/')
  .get((req, res) => {
    Model.find()
      .then(data => {
        res.json({
          confirmation: 'success',
          'data': data
        });
      })
      .catch(err => {
        res.json({
          confirmation: 'fail',
          message: err.message
        });
      });
  })
  .post((req, res) => {
    Model.create(req.body)
      .then(data => {
        res.json({
          confirmation: 'success',
          'data': data
        });
      })
      .catch(err => {
        res.json({
          confirmation: 'fail',
          message: err.message
        });
      });
  });

router
  .route('/:id')
  .get((req, res) => {
    Model.findById(req.params.id)
      .then(data => {
        res.json({
          confirmation: 'success',
          'data': data
        });
      })
      .catch(err => {
        res.json({
          confirmation: 'fail',
          message: err.message
        });
      });
  })
  .put((req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      })
      .then(data => {
        res.json({
          confirmation: 'success',
          'data': data
        });
      })
      .catch(err => {
        res.json({
          confirmation: 'fail',
          message: err.message
        });
      });
  })
  .delete(async (req, res) => {
    try {
      const data = await Model.findOneAndDelete(req.params.id);
      if (!data) {
        return res.status(400).json({
          success: false
        });
      }
      res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {
      res.status(400).json({
        success: false
      });
    }
  });

module.exports = router;`}
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
{'js': `// Advanced filtering
const Model = require('./route');

// @desc      Get Products
// @route     GET /store?params
// @access    Public
exports.controller = async (req, res, next) => {

  // Duplicate req.query Object
  const reqQuery = { ...req.query };

  // Select fields that'll have unique properties
  const removeFields = ['select', 'sort', 'page', 'limit'];

  // Remove those fields from reqQuery, we will access them each
  // individually through the native req Object
  removeFields.forEach(param => delete reqQuery[param]);

  // Stringify reqQuery and append "$" in front of [gt, gte, lt, lte, in]
  const queryStr = JSON.stringify(reqQuery).replace(/\\b(gt|gte|lt|lte|in)\\b/g, match => \`\$\${match}\`);

  // Retrieve query Object from db
  const query = Model.find(JSON.parse(queryStr));

  // While Model is being fetched modify
  // query.select()
  // query.sort()
  // query.skip()
  // query.limit()

  // /route?select=field1,field2
  if (req.query.select) {
    // req.query.select == 'field1,field2'
    const fields = req.query.select.split(',').join(' ');
    // fields == 'field1 field2'
    query = query.select(fields);
  }

  // /route?sort=field1,field2
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy)
  } else {
    query = query.sort('-createdAt');
  }

  // Pagination
  const page = +req.query.page || 1;
  const limit = +req.query.limit || 25;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Bootcamp.countDocuments();

  query = query.skip(startIndex).limit(limit);

  // Executing query
  const data = await query;

  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    }
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    }
  }

  res
  .status(200)
  .json({
    success: true,
    count: data.length,
    pagination,
    data
  });
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
      [
{'js': `// Database Querying
const Model = require('./route');

// Select All Documents in a Collection
SELECT * FROM inventory
Model.find( {} );

// Specify Equality Condition`},
{'mysql': `SELECT * FROM inventory WHERE status = "D"`},
{'js': `Model.find( { status: "D" } );

// Specify Conditions Using Query Operators (gt, gte, lt, lte, in)`},
{'mysql': `SELECT * FROM inventory WHERE status in ("A", "D")`},
{'js': `Model.find(
  { status: 
    { $in: [ "A", "D" ] } 
  } 
);

// Specify AND Conditions`},
{'mysql': `SELECT * FROM inventory WHERE status = "A" AND qty < 30`},
{'js': `Model.find( 
  { 
    status: "A", 
    qty: { $lt: 30 } 
  } 
);

// Specify OR Conditions`},
{'mysql': `SELECT * FROM inventory WHERE status = "A" OR qty < 30`},
{'js': `Model.find( 
  { 
    $or: [ 
      { status: "A" }, { qty: { $lt: 30 } } 
    ] 
  } 
);

// Specify AND as well as OR Conditions`},
{'mysql': `SELECT * FROM inventory WHERE status = "A" AND ( qty < 30 OR item LIKE "p%")`},
{'js': `Model.find(
  {
    status: "A",
    $or: [
      { qty: { $lt: 30 } }, { item: /^p/ }  // item starts with char p
    ]
  } 
);`}
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
{'js': `// Populate, Virtualize, Delete Cascade

// Model1
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [20, 'Userame can not be more then 20 characters']
  },
  slug: String
},
// virtuals
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Cascade delete courses when a User is deleted
UserSchema.pre('remove', async function(next) {
  await this.model('Post').deleteMany({ author: this._id });
  next();
});

// Reverse populate with virtuals
UserSchema.virtual('virtualFieldName', {
  // Collection to reference
  ref: 'Course',
  // Field within UserScheme to reference in Course Collection
  localField: '_id',
  // Field within PostScheme we are using to populate
  foreignField: 'author',
  // Recieve all
  justOne: false
});

module.exports = mongoose.model('User', UserSchema);

// Model2
const PostSchema = new mongoose.Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  // When creating a post, send {User: _id} for {author}
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
});

module.exports = mongoose.model('Post', PostSchema);

// Populate
const Posts = require('../models/PostModel');
// convert {author: userID} into {author: User.find()}
query = await Posts.find({ options }).populate({
  path: 'author',
  // Object fields to recieve separated by " "
  select: 'name description'
});

// Virtualize
const Users = require('../models/UserModel');
// to recieve virtual data, you must populate
let query = Users.find({ options }).populate('virtualFieldName');

// Cascade Delete
const Users = require('../models/UserModel');
router
  .route('/route')
  .delete(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(400).json({
          success: false
        });
      }
      // Trigger mongoose middleware
      user.remove();
      res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {
      res.status(400).json({
        success: false
      });
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
        [
{'js': `// seeder
const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const Model = require('./route');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// Read JSON files
const data = JSON.parse(
    fs.readFileSync(\`\${__dirname}/route\`, 'utf-8')
);

// Import into DB
const importData = async () => {
  try {
    await Model.create(data);
    console.log('Data Imported...');
    process.exit();
  } catch (error) {
    console.error(error);
  }
}

// Delete Data
const deleteData = async () => {
  try {
    await Model.deleteMany();
    console.log('Data Destroyed...');
    process.exit();
  } catch (error) {
    console.error(error);
  }
}

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}`}
        ],
        // output
        [],
        //render
        {'render': false}
    ]

];

module.exports = data;