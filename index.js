const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");

//Connect database
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Connected to MongoDB")
})

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

//Routes
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(8000, ()=>{
    console.log("server is running...");
});