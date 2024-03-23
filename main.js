var addRow2btn = document.getElementById("Addrow2");
var addRow3btn = document.getElementById("Addrow3");
var addRow4btn = document.getElementById("Addrow4");

var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");

var delbtn2 = document.getElementById("delbtn2");
var delbtn3 = document.getElementById("delbtn3");
var delbtn4 = document.getElementById("delbtn4");

addRow2btn.addEventListener("click", function () {
  row2.style.display = "block";
  addRow2btn.style.display = "none";
});
delbtn2.addEventListener("click", function () {
  row2.style.display = "none";
  addRow2btn.style.display = "flex";
  row3.style.display = "none";
  addRow3btn.style.display = "flex";
  row4.style.display = "none";
  addRow4btn.style.display = "flex";
});

addRow3btn.addEventListener("click", function () {
  row3.style.display = "block";
  addRow3btn.style.display = "none";
});
delbtn3.addEventListener("click", function () {
  row3.style.display = "none";
  addRow3btn.style.display = "flex";
  row4.style.display = "none";
  addRow4btn.style.display = "flex";
});
addRow4btn.addEventListener("click", function () {
  row4.style.display = "block";
  addRow4btn.style.display = "none";
});
delbtn4.addEventListener("click", function () {
  row4.style.display = "none";
  addRow4btn.style.display = "flex";
});

// form validation
let customerName = document.getElementById("name");
let customerAddress = document.getElementById("Address");
let customerPhone = document.getElementById("Phone");

let row1day = document.getElementById("day");
let row1date = document.getElementById("date");
let row1duration = document.getElementById("Duration");
let row1price = document.getElementById("Price");

let customerDiscount = document.getElementById("discount");
let custVat = document.getElementById("vat");
// row2
let row2day = document.getElementById("row2Day");
let row2date = document.getElementById("row2date");
let row2duration = document.getElementById("row2Duration");
let row2price = document.getElementById("row2Price");

// row3
let row3day = document.getElementById("row3Day");
let row3date = document.getElementById("row3date");
let row3duration = document.getElementById("row3Duration");
let row3price = document.getElementById("row3Price");

// row4
let row4day = document.getElementById("row4Day");
let row4date = document.getElementById("row4date");
let row4duration = document.getElementById("row4Duration");
let row4price = document.getElementById("row4Price");

let receiptForm = document.getElementById("receiptForm");

let isValid;

function cName() {
  if (customerName.value === "" || customerName.value.length < 5) {
    isValid = false;
    customerName.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    customerName.style.borderBottom = "2px solid #b7c42c";
  }
}
function cAddress() {
  if (customerAddress.value === "") {
    isValid = false;
    customerAddress.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    customerAddress.style.borderBottom = "2px solid #b7c42c";
  }
}
function cPhone() {
  if (customerPhone.value === "") {
    isValid = false;
    customerPhone.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    customerPhone.style.borderBottom = "2px solid #b7c42c";
  }
}
function cDay() {
  if (row1day.value == "") {
    isValid = false;
    row1day.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row1day.style.borderBottom = "2px solid #b7c42c";
  }
}
function cDate() {
  if (!row1date.value === "") {
    isValid = false;
    row1date.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row1date.style.borderBottom = "2px solid #b7c42c";
  }
}
function cDuration() {
  if (row1duration.value === "") {
    isValid = false;
    row1duration.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row1duration.style.borderBottom = "2px solid #b7c42c";
  }
}
function cPrice() {
  if (row1price.value === "") {
    isValid = false;
    row1price.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row1price.style.borderBottom = "2px solid #b7c42c";
  }
}

// row 2
function c2Day() {
  if (row2day.value == "") {
    isValid = false;
    row2day.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row2day.style.borderBottom = "2px solid #b7c42c";
  }
}
function c2Date() {
  if (row2date.value === "") {
    isValid = false;
    row2date.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row2date.style.borderBottom = "2px solid #b7c42c";
  }
}
function c2Duration() {
  if (row2duration.value === "") {
    isValid = false;
    row2duration.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row2duration.style.borderBottom = "2px solid #b7c42c";
  }
}
function c2Price() {
  if (row2price.value === "") {
    isValid = false;
    row2price.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row2price.style.borderBottom = "2px solid #b7c42c";
  }
}

// row 3
function c3Day() {
  if (row3day.value == "") {
    isValid = false;
    row3day.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row3day.style.borderBottom = "2px solid #b7c42c";
  }
}
function c3Date() {
  if (row3date.value === "") {
    isValid = false;
    row3date.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row3date.style.borderBottom = "2px solid #b7c42c";
  }
}
function c3Duration() {
  if (row3duration.value === "") {
    isValid = false;
    row3duration.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row3duration.style.borderBottom = "2px solid #b7c42c";
  }
}
function c3Price() {
  if (row3price.value === "") {
    isValid = false;
    row3price.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row3price.style.borderBottom = "2px solid #b7c42c";
  }
}

// row 4
function c4Day() {
  if (row4day.value == "") {
    isValid = false;
    row4day.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row4day.style.borderBottom = "2px solid #b7c42c";
  }
}
function c4Date() {
  if (row4date.value === "") {
    isValid = false;
    row4date.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row4date.style.borderBottom = "2px solid #b7c42c";
  }
}
function c4Duration() {
  if (row4duration.value === "") {
    isValid = false;
    row4duration.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row4duration.style.borderBottom = "2px solid #b7c42c";
  }
}
function c4Price() {
  if (row4price.value === "") {
    isValid = false;
    row4price.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    row4price.style.borderBottom = "2px solid #b7c42c";
  }
}

function cDiscount() {
  if (!customerDiscount.value) {
    isValid = false;
    customerDiscount.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    customerDiscount.style.borderBottom = "2px solid #b7c42c";
  }
}
function cVat() {
  if (custVat.value === "") {
    isValid = false;
    custVat.style.borderBottom = "2px solid red";
  } else {
    isValid = true;
    custVat.style.borderBottom = "2px solid #b7c42c";
  }
}

receiptForm.addEventListener("submit", function (thisForm) {
  thisForm.preventDefault();
  isValid = true;
  cName();
  cAddress();
  cPhone();
  cDay();
  cDate();
  cDuration();
  cPrice();
  cDiscount();
  cVat();

  //checking all fields are valid before proceeding to the next page
  if (isValid) {
    localStorage.setItem("name", customerName.value);
    localStorage.setItem("address", customerAddress.value);
    localStorage.setItem("phone", customerPhone.value);
    localStorage.setItem("dayrow1", row1day.value);
    localStorage.setItem("daterow1", row1date.value);
    localStorage.setItem("durationrow1", row1duration.value);
    localStorage.setItem("pricerow1", row1price.value);
    //row2
    localStorage.setItem("dayrow2", row2day.value);
    localStorage.setItem("daterow2", row2date.value);
    localStorage.setItem("durationrow2", row2duration.value);
    localStorage.setItem("pricerow2", row2price.value);
    //row3
    localStorage.setItem("dayrow3", row3day.value);
    localStorage.setItem("daterow3", row3date.value);
    localStorage.setItem("durationrow3", row3duration.value);
    localStorage.setItem("pricerow3", row3price.value);
    //row4
    localStorage.setItem("dayrow4", row4day.value);
    localStorage.setItem("daterow4", row4date.value);
    localStorage.setItem("durationrow4", row4duration.value);
    localStorage.setItem("pricerow4", row4price.value);

    localStorage.setItem("Discount", customerDiscount.value);
    localStorage.setItem("Vat", custVat.value);

    window.location.href = "generate-reciept.html";
  }
});
