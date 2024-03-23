let Rname = localStorage.getItem("name");
let Raddress = localStorage.getItem("address");
let Rphone = localStorage.getItem("phone");
let day1 = localStorage.getItem("dayrow1");
let date1 = localStorage.getItem("daterow1");
let duration1 = localStorage.getItem("durationrow1");
let price1 = localStorage.getItem("pricerow1");

let day2 = localStorage.getItem("dayrow2");
let date2 = localStorage.getItem("daterow2");
let duration2 = localStorage.getItem("durationrow2");
let price2 = localStorage.getItem("pricerow2");

let day3 = localStorage.getItem("dayrow3");
let date3 = localStorage.getItem("daterow3");
let duration3 = localStorage.getItem("durationrow3");
let price3 = localStorage.getItem("pricerow3");

let day4 = localStorage.getItem("dayrow4");
let date4 = localStorage.getItem("daterow4");
let duration4 = localStorage.getItem("durationrow4");
let price4 = localStorage.getItem("pricerow4");

let Rdiscount = localStorage.getItem("Discount");
let Rvat = localStorage.getItem("Vat");

document.getElementById("nameSpace").innerHTML = Rname;
document.getElementById("addressSpace").innerHTML = Raddress;
document.getElementById("phoneSpace").innerHTML = Rphone;

var myDate = new Date();
document.getElementById("dateTimeSpace").innerHTML =
  myDate.toLocaleDateString() + " - " + myDate.toLocaleTimeString();
document.getElementById("filldayy").innerHTML = day1;
document.getElementById("fillDay").innerHTML = date1;
document.getElementById("filleduration").innerHTML = duration1;
document.getElementById("fillprice").innerHTML = price1;

let firstAmount = duration1 * price1;
if (firstAmount == 0) {
  document.getElementById("fillAmount").innerHTML = "";
} else {
  document.getElementById("fillAmount").innerHTML = firstAmount;
}

// row 2
document.getElementById("filldayy2").innerHTML = day2;
document.getElementById("fillDay2").innerHTML = date2;
document.getElementById("filleduration2").innerHTML = duration2;
document.getElementById("fillprice2").innerHTML = price2;

let secondAmount = duration2 * price2;
if (secondAmount == 0) {
  document.getElementById("fillAmount2").innerHTML = "";
} else {
  document.getElementById("fillAmount2").innerHTML = secondAmount;
}

// row 3
document.getElementById("filldayy3").innerHTML = day3;
document.getElementById("fillDay3").innerHTML = date3;
document.getElementById("filleduration3").innerHTML = duration3;
document.getElementById("fillprice3").innerHTML = price3;

let thirdAmount = duration3 * price3;
if (thirdAmount == 0) {
  document.getElementById("fillAmount3").innerHTML = "";
} else {
  document.getElementById("fillAmount3").innerHTML = thirdAmount;
}

// row 4
document.getElementById("filldayy4").innerHTML = day4;
document.getElementById("fillDay4").innerHTML = date4;
document.getElementById("filleduration4").innerHTML = duration4;
document.getElementById("fillprice4").innerHTML = price4;

let FouthAmount = duration4 * price4;
if (FouthAmount == 0) {
  document.getElementById("fillAmount4").innerHTML = "";
} else {
  document.getElementById("fillAmount4").innerHTML = FouthAmount;
}

let subAmount = firstAmount + secondAmount + thirdAmount + FouthAmount;
document.getElementById("subtotal").innerHTML = subAmount;

document.getElementById("vaat").innerHTML = Rvat;
let subVat = Math.round((Rvat / 100) * subAmount);
document.getElementById("subVatt").innerHTML = subVat;

let rmAmonunt = subAmount + subVat;

document.getElementById("disc").innerHTML = Rdiscount;
let subDiscount = Math.round((Rdiscount / 100) * rmAmonunt);
document.getElementById("subDiscount").innerHTML = subDiscount;

let finalAmount = rmAmonunt - subDiscount;
document.getElementById("finalamount").innerHTML = finalAmount;

localStorage.removeItem("name");
localStorage.removeItem("address");
localStorage.removeItem("phone");
localStorage.removeItem("dayrow1");
localStorage.removeItem("daterow1");
localStorage.removeItem("durationrow1");
localStorage.removeItem("pricerow1");

localStorage.removeItem("dayrow2");
localStorage.removeItem("daterow2");
localStorage.removeItem("durationrow2");
localStorage.removeItem("pricerow2");

localStorage.removeItem("dayrow3");
localStorage.removeItem("daterow3");
localStorage.removeItem("durationrow3");
localStorage.removeItem("pricerow3");

localStorage.removeItem("dayrow4");
localStorage.removeItem("daterow4");
localStorage.removeItem("durationrow4");
localStorage.removeItem("pricerow4");
localStorage.removeItem("Discount");
localStorage.removeItem("Vat");
