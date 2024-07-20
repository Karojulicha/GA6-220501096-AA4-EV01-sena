const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/server", (req, res) => {
  res.send("Hello World! I am a server");
});

app.listen(port);
console.log(`listen on port`, port);
