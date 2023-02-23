if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config/config.env" });
}
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/public/success.html", (req, res) => {
  res.sendFile(__dirname + "/public/success.html");
});
app.get("/public/fail.html", (req, res) => {
  res.sendFile(__dirname + "/public/fail.html");
});
app.post("/form-submit", (req, res) => {
  try {
    const orderSummarySection = {
      name: req.body.ProductName,
      price: req.body.Price,
      order_id: req.body.order_ID,
      date: req.body.date,
      CustomerName: req.body.CustomerName,
      phoneNo: req.body.PhoneNumber,
      email: req.body.Email_ID,
      address: req.body.address,
      payment: req.body.cashAmount,
    };

    res.redirect("public/success.html");
  } catch (error) {
    res.redirect("public/fail.html");
  }
});
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
