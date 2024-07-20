import express from "express";
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello World! I am a server");
})

app.listen(port);
console.log(`listen on port`,port);