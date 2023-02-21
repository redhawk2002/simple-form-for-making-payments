const orderSummarySection = document.getElementsByClassName("Order");
const CustomerDetailsSection = document.getElementsByClassName(
  "CustomerDetailSection"
);
const paymentSection = document.getElementsByClassName("paymentSection");

const onlinePayment = document.getElementById("online-payment");
const codPayment = document.getElementById("cod-payment");
//First next button
const button1 = document
  .getElementById("button1")
  .addEventListener("click", () => {
    const productName = document.getElementsByName("ProductName")[0].value;
    const price = document.getElementsByName("Price")[0].value;
    const orderID = document.getElementsByName("order_ID")[0].value;
    const date = document.getElementsByName("date")[0].value;

    if (!productName || !price || !orderID || !date) {
      alert("Please fill in all required fields in the Order section");
    } else {
      orderSummarySection[0].style.display = " none";
      CustomerDetailsSection[0].style.display = " block";
    }
  });
//Second next button
const button2 = document
  .getElementById("button2")
  .addEventListener("click", () => {
    const CustomerName = document.getElementsByName("CustomerName")[0].value;
    const PhoneNumber = document.getElementsByName("PhoneNumber")[0].value;
    const Email_ID = document.getElementsByName("Email_ID")[0].value;
    const address = document.getElementsByName("address")[0].value;
    const checkbox = document.getElementsByName("checkbox")[0].checked;
    //checks if email is valid or not
    function isEmailValid(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    if (!CustomerName || !PhoneNumber || !Email_ID || !address) {
      alert("Please fill in all required fields in the Order section");
    } else if (!isEmailValid(Email_ID)) {
      alert("Please enter a valid email address");
    } else if (!checkbox) {
      alert("Please accept the terms and condition");
    } else {
      CustomerDetailsSection[0].style.display = "none";
      paymentSection[0].style.display = "block";
    }
  });

//first back button
const backButton2 = document
  .getElementById("Backbutton2")
  .addEventListener("click", () => {
    orderSummarySection[0].style.display = " block";
    CustomerDetailsSection[0].style.display = " none";
  });
//second back button
const backButton3 = document
  .getElementById("Backbutton3")
  .addEventListener("click", () => {
    CustomerDetailsSection[0].style.display = "block";
    paymentSection[0].style.display = "none";
  });
//label 1
const cardTick1 = document
  .getElementById("forOnline")
  .addEventListener("click", () => {
    onlinePayment.style.display = "block";
    codPayment.style.display = "none";
  });
//label 2
const cashOnDeliveryTick2 = document
  .getElementById("forCod")
  .addEventListener("click", () => {
    codPayment.style.display = "block";
    onlinePayment.style.display = "none";
  });
