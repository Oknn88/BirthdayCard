const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("./pages/mainPage");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("3000 potunda calisiyor");
});
