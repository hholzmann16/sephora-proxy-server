var express = require("express");
var path = require("path");
var axios = require("axios");
var app = express();

app.use(express.static(path.resolve(__dirname, "../client/dist")));
// app.use(express.static(path.resolve(__dirname, "../deps")));

app.get("/product", (req, res) => {
  axios
    .get("http://localhost:1337/product", req.params)
    .then(d => res.send(d.data))
    .catch(e => res.send(e));
});

app.get("/api", (req, res) => {
  axios
    .get("http://localhost:4000/api", { params: req.query })
    .then(d => res.send(d.data))
    .catch(e => res.send(e));
});

app.get("/api/mydb", (req, res) => {
  axios
    .get("http://localhost:3000/api/mydb", req.params)
    .then(d => res.send(d.data))
    .catch(e => res.send(e));
});

app.get("/review", (req, res) => {
  axios
    .get("http://localhost:5000/review", req.params)
    .then(d => res.send(d.data))
    .catch(e => res.send(e));
});

app.listen(3001, () => {
  console.log("Server is up what what!");
});
