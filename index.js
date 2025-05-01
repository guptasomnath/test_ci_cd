import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello Somnath Gupta</h1>")
})

app.listen(8080, () => console.log("http://localhost:8080"));
