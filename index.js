// import all the necessary packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// we are using port 9000
const port = 9000;

// we will create these todoRoutes in the future
const userRoutes = require("./routes/user");

const app = express();

// DB connection
mongoose
  .connect("mongodb+srv://new_user:root@cluster1.eq6xc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });

// middleware for cors to allow cross origin resource sharing
app.use(cors());
// middleware to convert our request data into JSON format
app.use(bodyParser.json());

// include the userRoutes
app.use("/api", userRoutes);

// start the server in the port 8000
app.listen(port, () => {
  console.log('Listening to http://localhost:${port}');
});
