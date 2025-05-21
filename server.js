const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("CRUD Application");
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})