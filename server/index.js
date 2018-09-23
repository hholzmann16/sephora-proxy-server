var express = require("express");
var path = require("path");
var axios = require("axios");
var app = express();

app.use(express.static(path.resolve(__dirname, "../client/dist")));

// app.get("/product", (req, res) => {
//   axios
//     .get("http://54.153.10.229:5000/1337/product", req.params)
//     .then(d => res.send(d.data))
//     .catch(e => res.send("Failed to get product"));
// });

app.get("/api", (req, res) => {
  axios
    .get("http://ec2-52-53-154-172.us-west-1.compute.amazonaws.com:4000/api", {
      params: req.query
    })
    .then(d => res.send(d.data))
    .catch(e => res.send("Failed to get api"));
});

// app.get("/api/mydb", (req, res) => {
//   axios
//     .get("http://localhost:7777/api/mydb", req.params)
//     .then(d => res.send(d.data))
//     .catch(e => res.send("Failed to get mydb"));
// });

// app.get("/review", (req, res) => {
//   axios
//     .get("http://localhost:3000/review", req.params)
//     .then(d => res.send(d.data))
//     .catch(e => res.send("Failed to get reviews"));
// });

// app.get("/specific", (req, res) => {
//   console.log(req.query);
//   axios
//     .get("http://localhost:3000/specific", {
//       params: {
//         spec1: req.query.spec1,
//         spec2: req.query.spec2
//       }
//     })
//     .then(d => res.send(d.data))
//     .catch(e => res.send("Failed to get specific"));
// });

app.listen(3001, () => {
  console.log("Server is up what what!");
});
