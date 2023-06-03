const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const exprt = require("./data/exprt.json");

app.get("/", (req, res) => {
  res.send("petty server is running");
});

app.get("/exprtData", (req, res) => {
  res.send(exprt);
});

app.listen(port, () => {
  console.log("server is running");
});
