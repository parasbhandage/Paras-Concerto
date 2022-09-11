const devices = [
  {
    id: 1,
    name: "Dell Insipron 5000",
    category: "dell",
    rating: 4.3,
    price: 25000,
    img: "images/dell/inspiron.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Dell 360 Degree laptop",
    category: "dell",
    rating: 4.3,
    price: 72000,
    img: "images/dell/degree.jfif",
    quantity: 1,
  },
  {
    id: 10,
    name: "Lenovo Thinkpad 14 Series",
    category: "lenovo",
    rating: 4.3,
    price: 54999,
    img: "images/lenovo/thinkpad.jfif",
    quantity: 1,
  },
  {
    id: 11,
    name: "Lenovo Thinkpad 360 degree",
    category: "lenovo",
    rating: 4.3,
    price: 109999,
    img: "images/lenovo/degree.jfif",
    quantity: 1,
  },
  {
    id: 16,
    name: "Samsung Note 10",
    category: "samsung",
    rating: 4.3,
    price: 150999,
    img: "images/samsung.jpg",
    quantity: 1,
  },
  {
    id: 30,
    name: "Iphone XR",
    category: "apple",
    rating: 4.3,
    price: 23999,
    img: "images/iphonexr.jfif",
    quantity: 1,
  },
  {
    id: 31,
    name: "Apple Iphone 13 Pro Max",
    category: "apple",
    rating: 4.3,
    price: 93499,
    img: "images/iphone13.jfif",
    quantity: 1,
  },
  {
    id: 32,
    name: "Macbook Pro",
    category: "apple",
    rating: 4.3,
    price: 139999,
    img: "images/macbook.jfif",
    quantity: 1,
  },
  {
    id: 37,
    name: "Redmi Note 11T",
    category: "redmi",
    rating: 4.3,
    price: 15999,
    img: "images/redminote11t.jfif",
    quantity: 1,
  },
  {
    id: 38,
    name: "Redmi K50I",
    category: "redmi",
    rating: 4.3,
    price: 13999,
    img: "images/redmik50i.jfif",
    quantity: 1,
  },
];

var cartele = document.getElementById('cart-page')
cartele.style.display = 'none'
var foodele = document.getElementById('food')
foodele.style.display='block'
/**
 * Used to create the rows for every item in the list of items passed
 * for any category of users choice
 */
function displayItem(items)
{
    var html="";
    items.map((item) => {
        html += `<div class='row text-center item'>
            <div class="col-md-3">
            <img class='img-fluid' src='./${item.img}'/>
        </div>
        <div class="col-md-2">
            <p>${item.name}</p>
        </div>
        <div class="col-md-2">
            <p>${item.price}</p>
        </div>
        <div class="col-md-2">
            <p>${item.rating}</p>
        </div>
        <div class="col-md-2">
            <p><input type='checkbox' id='ch${item.id}' onClick='addToCart(${item.id})'/></p>
        </div>
        </div>`;
      });
      return html;
}
/**
 * this function is called when a particular item is selected from 
 * dropdown. based on the category it fetches all the items and invokes
 * displayItem function passing the list of items for that category
 */
function onCategoryChange() {
  var categoryele = document.getElementById("category");
  var category = categoryele.value;
  var itemsele = document.getElementById("items");
  console.log("category ", category);
  switch (category) {
    case "dell":
      var dellItems = devices.filter((item) => item.category === "dell");
      itemsele.innerHTML=''
      itemsele.innerHTML += displayItem(dellItems);
      break;
    case "lenovo":
      var lenovoItems = devices.filter((item) => item.category === "lenovo");
      itemsele.innerHTML=''
      itemsele.innerHTML += displayItem(lenovoItems);
      break;
    case "samsung":
      var samsungItems = devices.filter((item) => item.category === "samsung");
      itemsele.innerHTML=''
      itemsele.innerHTML += displayItem(samsungItems);
      break;
    case "vegetable":
      var vegItems = devices.filter((item) => item.category === "vegetable");
      itemsele.innerHTML=''
      itemsele.innerHTML += displayItem(vegItems);
      break;
    case "redmi":
      var southindianItems = devices.filter(
        (item) => item.category === "redmi"
      );
      itemsele.innerHTML=''
      itemsele.innerHTML += displayItem(southindianItems);
      break;
    case "apple":
      var appleItems = devices.filter((item) => item.category === "apple");
      itemsele.innerHTML=''
      itemsele.innerHTML += displayItem(appleItems);
      break;
  }
}
onCategoryChange();

var cartData = [];
// adding item in the cartData
function addToCart(itemid) {
    console.log(this)
  console.log(itemid);
  var id = parseInt(itemid);
  console.log(id);
  var itemToAdd = devices.find((item) => item.id === id);
  console.log(itemToAdd);
  if (cartData.indexOf(itemToAdd) == -1) {
    cartData = [...cartData, itemToAdd];
    console.log(cartData);
  } else {
    alert("Item already added in the cart");
    var ele = document.getElementById(`ch${itemid}`)
    console.log(ele)
    ele.checked = true;
  }

  document.getElementById("cart-plus").innerText =
    "" + cartData.length + " Items";
  //cartItems();
}

// to toggle the div from list of items to the cart items
//document.getElementById("cart-plus").addEventListener("click", cartToggle);
// once i clicked on Items it displays the items in the cart
var temphtml = ''
function cartItems() {
    foodele.style.display='none'
   cartele.style.display ='block';
  //alert('displaying cart items');
  var tbody = document.getElementById("table-body");

  tbody.innerHTML = "";
  // alert(cartData.length)
  cartData.map((item) => {
    var itemrow = document.createElement("tr");

    var col1 = document.createElement("td");
    var img = document.createElement("img");
    img.src = item.img;

    col1.appendChild(img);

    var col2 = document.createElement("td");
    col2.innerText = item.name;

    var col3 = document.createElement("td");
    var b1 = document.createElement("button");
    b1.setAttribute("class", "decrease-item");
    b1.setAttribute("id", item.id);
    b1.innerText = "-";

    var span = document.createElement("span");
    span.innerText = item.quantity;

    var b2 = document.createElement("button");
    b2.setAttribute("class", "increase-item");
    b2.setAttribute("id", item.id);
    b2.innerText = "+";
    col3.appendChild(b1);
    col3.appendChild(span);
    col3.appendChild(b2);

    var col4 = document.createElement("td");
    col4.innerText = item.price;

    itemrow.appendChild(col1);
    itemrow.appendChild(col2);
    itemrow.appendChild(col3);
    itemrow.appendChild(col4);
    tbody.appendChild(itemrow);
  });

  document.querySelectorAll(".increase-item").forEach((item) => {
    item.addEventListener("click", incrementItem);
  });

  document.querySelectorAll(".decrease-item").forEach((item) => {
    item.addEventListener("click", decrementItem);
  });

  totalAmount();
}

function incrementItem() {
  console.log("increase");

  let id = this.getAttribute("id");
  console.log(id);
  let itemInCart = cartData.find(
    (itemincart) => itemincart.id === parseInt(id)
  );
  console.log(itemInCart);
  itemInCart.quantity += 1;

  curPrice =
    (itemInCart.price * itemInCart.quantity -
      itemInCart.price * (itemInCart.quantity - 1)) /
    (itemInCart.quantity - 1);
  console.log(curPrice);
  itemInCart.price = curPrice * itemInCart.quantity;
  cartItems();
  totalAmount();
}

function decrementItem() {
  console.log("decrease");
  let id = this.getAttribute("id");
  console.log(id);
  let itemToDecr = cartData.find(
    (itemincart) => itemincart.id === parseInt(id)
  );
  let idx = cartData.indexOf(itemToDecr);
  if (itemToDecr.quantity > 1) {
    curPrice =
      (itemToDecr.quantity * itemToDecr.price -
        itemToDecr.price * (itemToDecr.quantity - 1)) /
      itemToDecr.quantity;
    console.log("decrement ", curPrice);
    itemToDecr.quantity -= 1;
    itemToDecr.price = itemToDecr.quantity * curPrice;
  } else {
    cartData.splice(idx, 1);
    document.getElementById("cart-plus").innerText =
      "" + cartData.length + " items";
    if (cartData.length < 1) {
      foodele.style.display='block'
      cartele.style.display ='none';
      alert("Currently no items in the cart");
      return;
    }
  }
  totalAmount();
  cartItems();
}

function totalAmount() {
  var sum = 0;
  cartData.map((item) => {
    sum += item.price;
  });
  document.getElementById("total-price").innerText = "Total Price : " + sum;
}

