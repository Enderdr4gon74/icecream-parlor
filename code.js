const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  id: "cookieDough",
  func: "iceCreamCookieDough()",
  selClass: ""
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  id: "vanilla",
  func: "iceCreamVanilla()",
  selClass: ""
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  id: "strawberry",
  func: "iceCreamStrawberry()",
  selClass: ""
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  id: "waffleCone",
  func: "vesselWaffleCone()",
  selClass: ""
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  id: "waffleBowl",
  func: "vesselWaffleBowl()",
  selClass: ""
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  id: "sprinkles",
  func: "toppingSprinkles()",
  selClass: ""
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  id: "chocolateChips",
  func: "toppingChocolateChips()",
  selClass: ""
}]

let cart = []
let amountSpent = 0;

let CDElement = document.getElementById("cookieDough")?.classList;
console.log(CDElement)
let VElement = document.getElementById("vanilla")?.classList;
console.log(VElement)
let StrElement = document.getElementById("strawberry")?.classList;
console.log(StrElement)
let WCElement = document.getElementById("waffleCone")?.classList;
console.log(WCElement)
let WBElement = document.getElementById("waffleBowl")?.classList;
console.log(WBElement)
let SprElement = document.getElementById("sprinkles")?.classList;
console.log(SprElement)
let CCElement = document.getElementById("chocolateChips")?.classList;
console.log(CCElement)

function iceCreamCookieDough() {
  console.log("did it Work?..1")
  if (!CDElement?.contains("selected-border")) {
    // NOTE adds border to cookie dough [0]
    iceCream[0].selClass = "selected-border"
    // NOTE removes border from vanilla [1]
    iceCream[1].selClass = ""
    // NOTE removes border from strawberry [2]
    iceCream[2].selClass = ""
    console.log("did it Work?..3")
  }
  drawIceCreamShop()
}

function iceCreamVanilla() {
  if (!VElement?.contains("selected-border")) {
    // NOTE adds border to vanilla [1]
    iceCream[1].selClass = "selected-border"
    // NOTE removes border from strawberry [2]
    iceCream[2].selClass = ""
    // NOTE removes border from cookie dough[0]
    iceCream[0].selClass = ""
  }
  drawIceCreamShop()
}

function iceCreamStrawberry() {
  if (!StrElement?.contains("selected-border")) {
    // NOTE adds border to strawberry [2]
    iceCream[2].selClass = "selected-border"
    // NOTE removes border from cookie dough [0]
    iceCream[0].selClass = ""
    // NOTE removes border from vanilla [1]
    iceCream[1].selClass = ""
  }
  drawIceCreamShop()
}

function vesselWaffleCone() {
  if (!WCElement?.contains("selected-border")) {
    // NOTE adds border to waffle cone [0]
    vessels[0].selClass = "selected-border"
    // NOTE removes border from waffle bowl [1]
    vessels[1].selClass = ""
  }
  drawIceCreamShop()
}

function vesselWaffleBowl() {
  if (!WBElement?.contains("selected-border")) {
    // NOTE adds border to waffle bowl [1]
    vessels[1].selClass = "selected-border"
    // NOTE removes border from waffle cone [0]
    vessels[0].selClass = ""
  }
  drawIceCreamShop()
}

function toppingSprinkles() {
  if (!SprElement?.contains("selected-border")) {
    // NOTE adds border to sprinkles [0]
    toppings[0].selClass = "selected-border"
    // NOTE removes border from chocolate Chips [1]
    toppings[1].selClass = ""
  }
  drawIceCreamShop()
}

function toppingChocolateChips() {
  if (!CCElement?.contains("selected-border")) {
    // NOTE adds border to chocolate chips [1]
    toppings[1].selClass = "selected-border"
    // NOTE removes border from sprinkles [0]
    toppings[0].selClass = ""
  }
  drawIceCreamShop()
}

function drawIceCreamShop() {

  // SECTION ice cream draw
  let iceCreamElement = document.getElementById("iceCream")
  let iceCreamTemplate = ""
  for (let i = 0; i < iceCream.length; i++) {
    iceCreamTemplate += `
    <div class="col-4 text-light d-flex flex-column justify-content-between ${iceCream[i].selClass}" onclick=${iceCream[i].func} id=${iceCream[i].id}>
      <img src="${iceCream[i].image}" alt="iceCream" class="img-fluid">
      <div class="d-flex align-items-end justify-content-between">
        <h4 class="font-special">${iceCream[i].name}</h4>
        <p class="font-special">Price: $${iceCream[i].price}</p>
      </div>
    </div>
    `
  }
  if (iceCreamElement && iceCreamTemplate != ``) {
    iceCreamElement.innerHTML = iceCreamTemplate
  }
  // SECTION vessels draw
  let vesselElement = document.getElementById("vessels")
  let vesselTemplate = ""
  for (let i = 0; i < vessels.length; i++) {
    vesselTemplate += `
    <div class="col-4 text-light d-flex flex-column justify-content-between ${vessels[i].selClass}" onclick=${vessels[i].func} id=${vessels[i].id}>
      <img src="${vessels[i].image}" alt="vessel" class="img-fluid">
      <div class="d-flex align-items-end justify-content-between">
        <h4 class="font-special">${vessels[i].name}</h4>
        <p class="font-special">Price: ${vessels[i].price}</p>
      </div>
    </div>
    `
  }
  if (vesselElement && vesselTemplate != ``) {
    vesselElement.innerHTML = vesselTemplate
  }
  // SECTION toppings draw
  let toppingElement = document.getElementById("toppings")
  let toppingTemplate = ""
  for (let i = 0; i < toppings.length; i++) {
    toppingTemplate += `
    <div class="col-4 text-light d-flex flex-column justify-content-between ${toppings[i].selClass}" onclick=${toppings[i].func} id=${toppings[i].id}>
      <img src="${toppings[i].image}" alt="topping" class="img-fluid">
      <div class="d-flex align-items-end justify-content-between">
        <h4 class="font-special">${toppings[i].name}</h4>
        <p class="font-special">Price: ${toppings[i].price}</p>
      </div>
    </div>
    `
  }
  if (toppingElement && toppingTemplate != ``) {
    toppingElement.innerHTML = toppingTemplate
  }
}

function resetReceipt() {
  if (confirm("Are you sure you want to check out?")) {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].Toppings >= 0) {
        let iceCreamTotalPrice = iceCream[cart[i].IceCream].price + vessels[cart[i].Vessels].price + toppings[cart[i].Toppings].price;
        totalPrice += iceCreamTotalPrice;
      } else {
        let iceCreamTotalPrice = iceCream[cart[i].IceCream].price + vessels[cart[i].Vessels].price;
        totalPrice += iceCreamTotalPrice;
      }
    }
    totalPrice *= 1.06;
    amountSpent += totalPrice;
    cart = []
  }
  drawAmountSpent()
  drawReceipt()
}

function addToCart() {
  if (iceCream[0].selClass == "selected-border") {
    if (vessels[0].selClass == "selected-border") {
      if (toppings[0].selClass == "selected-border") {
        cart.push({
          IceCream: 0,
          Vessels: 0,
          Toppings: 0
        })
        iceCream[0].selClass = ""
        vessels[0].selClass = ""
        toppings[0].selClass = ""
      } else if (toppings[1].selClass == "selected-border") {
        cart.push({
          IceCream: 0,
          Vessels: 0,
          Toppings: 1
        })
        iceCream[0].selClass = ""
        vessels[0].selClass = ""
        toppings[1].selClass = ""
      } else if (toppings[0].selClass == "" && toppings[1].selClass == "") {
        cart.push({
          IceCream: 0,
          Vessels: 0,
          Toppings: -1
        })
        iceCream[0].selClass = ""
        vessels[0].selClass = ""
      }// ANCHOR
    } else if (vessels[1].selClass == "selected-border") {
      if (toppings[0].selClass == "selected-border") {
        cart.push({
          IceCream: 0,
          Vessels: 1,
          Toppings: 0
        })
        iceCream[0].selClass = ""
        vessels[1].selClass = ""
        toppings[0].selClass = ""
      } else if (toppings[1].selClass == "selected-border") {
        cart.push({
          IceCream: 0,
          Vessels: 1,
          Toppings: 1
        })
        iceCream[0].selClass = ""
        vessels[1].selClass = ""
        toppings[1].selClass = ""
      } else if (toppings[0].selClass == "" && toppings[1].selClass == "") {
        cart.push({
          IceCream: 0,
          Vessels: 1,
          Toppings: -1
        })
        iceCream[0].selClass = ""
        vessels[1].selClass = ""
      } // ANCHOR
    }
  } else if (iceCream[1].selClass == "selected-border") {
    if (vessels[0].selClass == "selected-border") {
      if (toppings[0].selClass == "selected-border") {
        cart.push({
          IceCream: 1,
          Vessels: 0,
          Toppings: 0
        })
        iceCream[1].selClass = ""
        vessels[0].selClass = ""
        toppings[0].selClass = ""
      } else if (toppings[1].selClass == "selected-border") {
        cart.push({
          IceCream: 1,
          Vessels: 0,
          Toppings: 1
        })
        iceCream[1].selClass = ""
        vessels[0].selClass = ""
        toppings[1].selClass = ""
      } else if (toppings[0].selClass == "" && toppings[1].selClass == "") {
        cart.push({
          IceCream: 1,
          Vessels: 0,
          Toppings: -1
        })
        iceCream[1].selClass = ""
        vessels[0].selClass = ""
      } // ANCHOR
    } else if (vessels[1].selClass == "selected-border") {
      if (toppings[0].selClass == "selected-border") {
        cart.push({
          IceCream: 1,
          Vessels: 1,
          Toppings: 0
        })
        iceCream[1].selClass = ""
        vessels[1].selClass = ""
        toppings[0].selClass = ""
      } else if (toppings[1].selClass == "selected-border") {
        cart.push({
          IceCream: 1,
          Vessels: 1,
          Toppings: 1
        })
        iceCream[1].selClass = ""
        vessels[1].selClass = ""
        toppings[1].selClass = ""
      } else if (toppings[0].selClass == "" && toppings[1].selClass == "") {
        cart.push({
          IceCream: 1,
          Vessels: 1,
          Toppings: -1
        })
        iceCream[1].selClass = ""
        vessels[1].selClass = ""
      } // ANCHOR
    }
  } else if (iceCream[2].selClass == "selected-border") {
    if (vessels[0].selClass == "selected-border") {
      if (toppings[0].selClass == "selected-border") {
        cart.push({
          IceCream: 2,
          Vessels: 0,
          Toppings: 0
        })
        iceCream[2].selClass = ""
        vessels[0].selClass = ""
        toppings[0].selClass = ""
      } else if (toppings[1].selClass == "selected-border") {
        cart.push({
          IceCream: 2,
          Vessels: 0,
          Toppings: 1
        })
        iceCream[2].selClass = ""
        vessels[0].selClass = ""
        toppings[1].selClass = ""
      } else if (toppings[0].selClass == "" && toppings[1].selClass == "") {
        cart.push({
          IceCream: 2,
          Vessels: 0,
          Toppings: -1
        })
        iceCream[2].selClass = ""
        vessels[0].selClass = ""
      } // ANCHOR
    } else if (vessels[1].selClass == "selected-border") {
      if (toppings[0].selClass == "selected-border") {
        cart.push({
          IceCream: 2,
          Vessels: 1,
          Toppings: 0
        })
        iceCream[2].selClass = ""
        vessels[1].selClass = ""
        toppings[0].selClass = ""
      } else if (toppings[1].selClass == "selected-border") {
        cart.push({
          IceCream: 2,
          Vessels: 1,
          Toppings: 1
        })
        iceCream[2].selClass = ""
        vessels[1].selClass = ""
        toppings[1].selClass = ""
      } else if (toppings[0].selClass == "" && toppings[1].selClass == "") {
        cart.push({
          IceCream: 2,
          Vessels: 1,
          Toppings: -1
        })
        iceCream[2].selClass = ""
        vessels[1].selClass = ""
      } // ANCHOR
    }
  }
  drawIceCreamShop()
  drawAmountSpent()
  drawReceipt()
}


function deleteCartItem(index) {
  cart.splice(index, 1)
  drawAmountSpent()
  drawReceipt()
}

function drawReceipt() {
  console.log("draw receipt")
  let cartElement = document.getElementById("receipt")
  let subTotalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].Toppings >= 0) {
      let iceCreamTotalPrice = iceCream[cart[i].IceCream].price + vessels[cart[i].Vessels].price + toppings[cart[i].Toppings].price;
      subTotalPrice += iceCreamTotalPrice;
    } else {
      let iceCreamTotalPrice = iceCream[cart[i].IceCream].price + vessels[cart[i].Vessels].price
      subTotalPrice += iceCreamTotalPrice;
    }
  }
  let tax = 0;
  let totalPrice = 0;
  if (cart.length > 0) {
    tax = (subTotalPrice * 0.06);
    tax *= 100;
    tax = Math.round(tax);
    tax /= 100;
    totalPrice = (subTotalPrice * 1.06);
    totalPrice *= 100;
    totalPrice = Math.round(totalPrice);
    totalPrice /= 100;
  }
  let cartTemplate = `
  <div class="d-flex justify-content-between mb-3 border-bottom border-primary">
    <h3>Subtotal: $${subTotalPrice}</h3>
    <h3>Tax: $${tax}</h3>
    <h3>Total: $${totalPrice}</h3>
    <button onclick="resetReceipt()" class="btn btn-dark">Purchase</button>
  </div>
  `
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].Toppings >= 0) {
      let iceCreamTotalPrice = iceCream[cart[i].IceCream].price + vessels[cart[i].Vessels].price + toppings[cart[i].Toppings].price
      cartTemplate += `
      <div class="d-flex flex-column">
        <div>
          <h4>${iceCream[cart[i].IceCream].name} in a ${vessels[cart[i].Vessels].name} with ${toppings[cart[i].Toppings].name} on top!</h4>
        </div>
        <div class="d-flex justify-content-between">
          <p>Price: ${iceCreamTotalPrice}</p>
          <button onclick="deleteCartItem(${i})"><i class="mdi mdi-delete"></i></button>
        </div>
      </div>
      `
    } else {
      let iceCreamTotalPrice = iceCream[cart[i].IceCream].price + vessels[cart[i].Vessels].price
      cartTemplate += `
      <div class="d-flex flex-column">
        <div>
          <h4>${iceCream[cart[i].IceCream].name} in a ${vessels[cart[i].Vessels].name}!</h4>
        </div>
        <div class="d-flex justify-content-between">
          <p>Price: ${iceCreamTotalPrice}</p>
          <button onclick="deleteCartItem(${i})"><i class="mdi mdi-delete"></i></button>
        </div>
      </div>
      `
    }
  }
  if (cartElement && cartTemplate != ``) {
    cartElement.innerHTML = cartTemplate
  }
}

function drawAmountSpent() {
  let amountSpentElement = document.getElementById("amountSpent")
  let amountSpentTemplate = ""
  let subTotalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].Toppings >= 0) {
      let iceCreamTotalPrice = iceCream[cart[i].IceCream].price + vessels[cart[i].Vessels].price + toppings[cart[i].Toppings].price;
      subTotalPrice += iceCreamTotalPrice;
    } else {
      let iceCreamTotalPrice = iceCream[cart[i].IceCream].price + vessels[cart[i].Vessels].price
      subTotalPrice += iceCreamTotalPrice;
    }
  }
  let totalPrice = 0;
  if (cart.length > 0) {
    totalPrice = (subTotalPrice * 1.06);
    totalPrice *= 100;
    totalPrice = Math.round(totalPrice);
    totalPrice /= 100;
  }
  amountSpentTemplate += `
  <h4 class="no-margin">Total: $${totalPrice}</h4>
  <h4 class="no-margin">Amount Spent: $${amountSpent}</h4>
  `
  if (amountSpentElement && amountSpentTemplate != ``) {
    amountSpentElement.innerHTML = amountSpentTemplate
  }
}

drawAmountSpent()
drawIceCreamShop()
drawReceipt()