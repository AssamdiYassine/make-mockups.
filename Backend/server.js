const express = require("express");
const fileUpload = require("express-fileupload");
const moduleBuilder = require("./composite.js");
var cors = require("cors");
// const table = require("./dir");
const remove = require("./removeFiles");
const openPath = require("./openDir");
const app = express();
app.use(cors());
app.use(fileUpload());

// Upload Endpoint
const testFolder = "./uploads";
const fs = require("fs");
// const table = [];
app.post("/upload", async (req, res, next) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  let file = req.files.file;
  if (!Array.isArray(file)) {
    file = [file];
  }
  const table = [];
  let count = table.length;
  file.map((element) => {
    const arr = element.name.split(".");
    const ext = arr[arr.length - 1];
    element.mv(`${__dirname}/uploads/${count + "." + ext}`, (err) => {
      // element.mv(`${__dirname}/uploads/${element.name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
    count++;
    // moduleBuilder(`uploads/${file}`, i);
  });
  fs.readdirSync(testFolder).forEach((file, i) => {
    table.push(file);
    console.log("readdirSync" + table);
  });
  table.forEach((element) => {
    console.log("element " + element);
    // console.log(i);
    // moduleBuilder(`uploads/${element}`, i);
  });
});

app.get("/Clear", (req, res) => {
  fs.readdirSync(testFolder).forEach((file) => {
    table.push(file);
  });

  table.map((el) => {
    remove(`uploads/${el}`);
  });
  res.send("uploads successfully deleted");
});

app.get("/ViewMockupsFolders", (req, res) => {
  openPath("/Chachine");
  openPath("/Eshashope");
});
// const Chachine = "./Chachine";
// const Eshashope = "./Eshashope";
// let tableChachine = []
// let tableEshashope = []
//  fs.readdirSync(Chachine).forEach((Chachine) => {
//     tableChachine.push(Chachine);
//     console.log(tableChachine);
//   });

// app.get("/ViewMockups", (req, res) => {

//  res.send(()=>{

//   tableEshashope
//  })
// });

app.listen(40005, () => console.log("Server Started..."));
