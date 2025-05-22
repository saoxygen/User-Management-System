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
// load assests 
app.use("/css/style.css", express.static(path.resolve(__dirname, "/assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "/assets/img")));
app.use("/js/index.js", express.static(path.resolve(__dirname, "/assets/js")));

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})