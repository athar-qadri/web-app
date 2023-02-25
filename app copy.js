const express = require("express");
const path = require("path");
const https = require("https");
const bodyParser = require("body-parser");
const fs = require("fs");
const port = 9099;

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//app.use(express.json());
//app.use(bodyParser.json());

app.get("/login", (req, res) => {
  console.log("im here");
  console.log(req.body);
  res.json({ status: "OK" });
});

const httpsOptions = {
  key: fs.readFileSync("./security/private.pem"),
  cert: fs.readFileSync("./security/cert.pem"),
  ca: fs.readFileSync("./security/csr.pem"),
};
const server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log("server running at " + port);
});

/*app.listen(9999, () => {
  console.log("server running at " + port);
});*/
