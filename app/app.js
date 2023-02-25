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

app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.get("/images/:file(*)", (req, res) => {
  var file = req.params.file;
  var fileLocation = path.join("./uploads", file);
  console.log(fileLocation);
  res.download(fileLocation, file);
});

app.get("/doctor", (req, res, next) => {
  res.json({
    total_size: 2,
    type_id: 2,
    offset: 0,
    doctors: [
      {
        id: 1,
        name: "Ali Athar Qadri",
        age: "32",
        category: "Peaditrician",
        fee: 200,
        stars: 4,
        image: "images/doc1.jpg",
        description:
          "A doctor is responsible for all sides of care of a patient. They diagnose, educate, and treat patients to ensure that they have the best possible care. A few of the main duties of a doctor are performing diagnostic tests, recommending specialists for patients, document patient's medical history, and educating patients.",
        location: "Bemina",
        created_on: "2023-02-18 04:11:00",
        updated_on: "2023-02-18 04:11:00",
      },
      {
        id: 2,
        name: "Isbah Qureshi",
        age: "30",
        category: "Dentist",
        fee: 300,
        stars: 5,
        image: "images/doc2.jpg",
        description:
          "A doctor is responsible for all sides of care of a patient. They diagnose, educate, and treat patients to ensure that they have the best possible care. A few of the main duties of a doctor are performing diagnostic tests, recommending specialists for patients, document patient's medical history, and educating patients.",
        location: "Bemina",
        created_on: "2023-02-18 04:11:00",
        updated_on: "2023-02-18 04:11:00",
      },
    ],
  });
});

app.get("/recommended", (req, res, next) => {
  res.json({
    total_size: 2,
    type_id: 3,
    offset: 0,
    doctors: [
      {
        id: 1,
        name: "Athar Qadri",
        age: "32",
        category: "Ortho",
        fee: 200,
        stars: 4,
        image: "images/doc3.jpg",
        description:
          "A doctor is responsible for all sides of care of a patient. They diagnose, educate, and treat patients to ensure that they have the best possible care. A few of the main duties of a doctor are performing diagnostic tests, recommending specialists for patients, document patient's medical history, and educating patients.",
        location: "Bemina",
        created_on: "2023-02-18 04:11:00",
        updated_on: "2023-02-18 04:11:00",
      },
      {
        id: 2,
        name: "Mrs. Isbah Qureshi",
        age: "30",
        category: "Peaditrician",
        fee: 300,
        stars: 5,
        image: "images/doc2.jpg",
        description:
          "A doctor is responsible for all sides of care of a patient. They diagnose, educate, and treat patients to ensure that they have the best possible care. A few of the main duties of a doctor are performing diagnostic tests, recommending specialists for patients, document patient's medical history, and educating patients.",
        location: "Bemina",
        created_on: "2023-02-18 04:11:00",
        updated_on: "2023-02-18 04:11:00",
      },
    ],
  });
});
/*app.listen(9999, () => {
  console.log("server running at " + port);
});*/
