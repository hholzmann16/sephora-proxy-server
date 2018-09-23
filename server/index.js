var express = require("express");
var path = require("path");
var app = express();

const port = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.listen(port, () => {
  console.log("Server is up what what!");
});
