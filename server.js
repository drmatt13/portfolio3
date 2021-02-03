const express = require('express');
const colors = require("colors");

const app = express();

// Connect to DB
const connectDB = require('./config/connectDB');
connectDB();

// Set static folder
app.use(express.static(__dirname + '/public'));

// Body parser
app.use(express.json());

// Routes
const notes = require("./routes/notes");
app.use("/notes", notes);

const apps = require("./routes/apps");
app.use("/apps", apps);

const register = require("./routes/register");
app.use("/register", register);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`.yellow.bold);
});