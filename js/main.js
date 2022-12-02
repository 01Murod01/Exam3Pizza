function $(selector) {
  return document.querySelector(selector);
}
const forName = $("#forName");
const forPhone = $("#forPhone");
const forAddress = $("#forAddress");
const forThickness = $("#forThickness");
const forSize = $("#forSize");
const forOnPizza = $("#forOnPizza");
const forAdd = $("#forAdd");

const OrderEl = [];

const PizzaOrder = {
  name: null,
  phone: null,
  address: null,
  thickness: null,
  size: null,
  onPizza: [],
  add: [],
};

const formEl = $("#form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = $("#userName");
  const userNumber = $("#number");
  const userAddress = $("#address");
  const selectedThickness = $("#thickness__value");
  const size = document.getElementsByName("size");
  const onPizza = document.querySelectorAll(".onPizza");
  const add = document.querySelectorAll(".add");

  PizzaOrder.name = userName.value;
  PizzaOrder.phone = userNumber.value;
  PizzaOrder.address = userAddress.value;
  PizzaOrder.thickness = selectedThickness.value;

  for (item of size) {
    if (item.checked) {
      PizzaOrder.size = item.value;
    }
  }
  for (i of onPizza) {
    if (i.checked) {
      PizzaOrder.onPizza.push(i.value);
    }
  }
  for (item of add) {
    if (item.checked) {
      PizzaOrder.add.push(item.value);
    }
  }
  //   console.log(PizzaOrder);
  OrderEl.push(PizzaOrder);
  //   console.log(OrderEl);
  render();
  calcPrice();
});
function render() {
  const elOrder = $(".orderpage");
  elOrder.innerHTML = "";
  for (let i = 0; i < OrderEl.length; i++) {
    const card = `
    <h2>Order ${i + 1}</h1>
    <strong>Name:</strong><span id="forName"> ${OrderEl[i].name}</span><br>
    <strong>Phone:</strong><span id="forPhone"> ${OrderEl[i].phone}</span><br>
    <strong>Address:</strong><span id="forAddress"> ${
      OrderEl[i].address
    }</span><br>
    <hr>
    <strong>Dough thickness:</strong><span id="forThickness"> ${
      OrderEl[i].thickness
    }</span><br>
    <strong>Size:</strong><span id="forSize"> ${OrderEl[i].size}</span><br>
    <strong>On Pizza:</strong><span id="forOnPizza"> ${
      OrderEl[i].onPizza
    }</span><br>
    <strong>Add:</strong><span id="forAdd"> ${OrderEl[i].add}</span>
    <hr>
    `;
    elOrder.innerHTML = elOrder.innerHTML + card;
  }
}

const forTotal = $("#forTotal");
const price1 = 10;
const price2 = 12;
const price3 = 15;
const price11 = 10;
const price12 = 12;
const price13 = 15;
const price5 = 5;
const price6 = 3;
let fullPrice = 0;

function calcPrice() {
  if (PizzaOrder.thickness == "Thin") {
    fullPrice += price1;
  } else if (PizzaOrder.thickness == "Medium") {
    fullPrice += price2;
  } else if (PizzaOrder.thickness == "Thick") {
    fullPrice += price3;
  }
  if (PizzaOrder.size == "25sm") {
    fullPrice += price11;
  } else if (PizzaOrder.size == "30sm") {
    fullPrice += price12;
  } else if (PizzaOrder.size == "35sm") {
    fullPrice += price13;
  }
  if (PizzaOrder.onPizza.length == 6) {
    fullPrice += 30;
  } else if (PizzaOrder.onPizza.length == 5) {
    fullPrice += 25;
  } else if (PizzaOrder.onPizza.length == 4) {
    fullPrice += 20;
  } else if (PizzaOrder.onPizza.length == 3) {
    fullPrice += 15;
  } else if (PizzaOrder.onPizza.length == 2) {
    fullPrice += 10;
  } else if (PizzaOrder.onPizza.length == 1) {
    fullPrice += 5;
  }
  if (PizzaOrder.add.length == 2) {
    fullPrice += 6;
  } else if (PizzaOrder.add.length == 1) {
    fullPrice += 3;
  }
  console.log(fullPrice);
  forTotal.innerHTML = fullPrice + "$";
}
