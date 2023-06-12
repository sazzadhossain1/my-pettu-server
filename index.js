const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const exprt = require("./data/exprt.json");
const serviceData = require("./data/service.json");

app.get("/", (req, res) => {
  res.send("petty server is running");
});

//..................................//
app.get("/exprtData", (req, res) => {
  res.send(exprt);
});

app.get("/exprtData/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const findExprt = exprt.find((singleExprt) => singleExprt.id === id);

  res.send(findExprt);
});
//...................................//
app.get("/serviceData", (req, res) => {
  res.send(serviceData);
});

app.get("/serviceData/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const findServiceData = serviceData.find(
    (singleServiceData) => singleServiceData.id === id
  );
  res.send(findServiceData);
});
//...................................//

app.listen(port, () => {
  console.log("server is running");
});
