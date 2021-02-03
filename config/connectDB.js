const mongoose = require('mongoose');

const URL = 'mongodb+srv://user123:user123@cluster0.ejwwm.mongodb.net/portfolio?retryWrites=true&w=majority';

const connectDB = async () => {
  const conn = await mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
}

module.exports = connectDB;