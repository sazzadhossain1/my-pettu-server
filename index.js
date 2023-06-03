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

app.get("/exprtData/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const findExprt = exprt.find((singleExprt) => singleExprt.id === id);

  res.send(findExprt);
});

app.listen(port, () => {
  console.log("server is running");
});
