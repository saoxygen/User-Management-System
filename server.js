const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();

dotenv.config({path: "config.env"})
const port = process.env.PORT || 8080;

// log info on all requests made
app.use(morgan('dev'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

// set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs")) // use if your views are with subfolders

// Serve files from the "public" directory
app.use(express.static(path.join(__dirname, 'assets')));

// load assests 
app.use("/css", express.static(path.resolve(__dirname, "/assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "/assets/img")));
app.use("/js/index.js", express.static(path.resolve(__dirname, "/assets/js")));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/add-user", (req, res) => {
    res.render("add_user");
})

app.get("/update-user", (req, res) => {
    res.render("update_user");
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})