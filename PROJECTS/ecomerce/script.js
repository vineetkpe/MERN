let qtyMobile = 0;
let qtyLaptop = 0;
let qtyHeadphones = 0;
let qtyWatch = 0;
let qtyTablet = 0;
let qtyCamera = 0;
let qtySpeaker = 0;
let qtyKeyboard = 0;
let qtyMonitor = 0;

const priceMobile = 15000;
const priceLaptop = 55000;
const priceHeadphones = 2000;
const priceWatch = 5000;
const priceTablet = 25000;
const priceCamera = 40000;
const priceSpeaker = 3500;
const priceKeyboard = 1500;
const priceMonitor = 12000;



function addMobile(){ qtyMobile++; renderCart(); }
function addLaptop(){ qtyLaptop++; renderCart(); }

function addHeadphones(){ qtyHeadphones++; renderCart(); }
function addWatch(){ qtyWatch++; renderCart(); }
function addTablet(){ qtyTablet++; renderCart(); }

function addCamera(){ qtyCamera++; renderCart(); }
function addSpeaker(){ qtySpeaker++; renderCart(); }
function addKeyboard(){ qtyKeyboard++; renderCart(); }
function addMonitor(){ qtyMonitor++; renderCart(); }


function increase(item)

{
  if(item=="mobile") qtyMobile++;
  if(item=="laptop") qtyLaptop++;
  if(item=="headphones") qtyHeadphones++;
  if(item=="watch") qtyWatch++;
  if(item=="tablet") qtyTablet++;
  if(item=="camera") qtyCamera++;
  if(item=="speaker") qtySpeaker++;
  if(item=="keyboard") qtyKeyboard++;
  if(item=="monitor") qtyMonitor++;
  renderCart();
}



function decrease(item)

{
  if(item=="mobile" && qtyMobile>0) qtyMobile;
  if(item=="laptop" && qtyLaptop>0) qtyLaptop;
  if(item=="headphones" && qtyHeadphones>0) qtyHeadphones;
  if(item=="watch" && qtyWatch>0) qtyWatch;
  if(item=="tablet" && qtyTablet>0) qtyTablet;
  if(item=="camera" && qtyCamera>0) qtyCamera;
  if(item=="speaker" && qtySpeaker>0) qtySpeaker;
  if(item=="keyboard" && qtyKeyboard>0) qtyKeyboard;
  if(item=="monitor" && qtyMonitor>0) qtyMonitor;
  renderCart();
}



function removeItem(item)

{
  if(item=="mobile") qtyMobile=0;
  if(item=="laptop") qtyLaptop=0;
  if(item=="headphones") qtyHeadphones=0;
  if(item=="watch") qtyWatch=0;
  if(item=="tablet") qtyTablet=0;
  if(item=="camera") qtyCamera=0;
  if(item=="speaker") qtySpeaker=0;
  if(item=="keyboard") qtyKeyboard=0;
  if(item=="monitor") qtyMonitor=0;
  renderCart();
}


function renderCart(){
  let cart = document.getElementById("cart");
  cart.innerHTML="";

  if(qtyMobile>0) cart.innerHTML+= makeItem("Mobile",priceMobile,qtyMobile,"mobile");
  if(qtyLaptop>0) cart.innerHTML+= makeItem("Laptop",priceLaptop,qtyLaptop,"laptop");
  if(qtyHeadphones>0) cart.innerHTML+= makeItem("Headphones",priceHeadphones,qtyHeadphones,"headphones");
  if(qtyWatch>0) cart.innerHTML+= makeItem("Smart Watch",priceWatch,qtyWatch,"watch");
  if(qtyTablet>0) cart.innerHTML+= makeItem("Tablet",priceTablet,qtyTablet,"tablet");
  if(qtyCamera>0) cart.innerHTML+= makeItem("Camera",priceCamera,qtyCamera,"camera");
  if(qtySpeaker>0) cart.innerHTML+= makeItem("Bluetooth Speaker",priceSpeaker,qtySpeaker,"speaker");
  if(qtyKeyboard>0) cart.innerHTML+= makeItem("Keyboard",priceKeyboard,qtyKeyboard,"keyboard");
  if(qtyMonitor>0) cart.innerHTML+= makeItem("Monitor",priceMonitor,qtyMonitor,"monitor");

  calculateTotal();
}


function makeItem(name, price, qty, id){
  let total = price*qty;
  let style = price>100000 ? "cart-item expensive" : "cart-item";
  return `
    <div class="${style}">
      ${name} - ₹${price} x ${qty} = ₹${total}
      <div>
        <button onclick="increase('${id}')">+</button>
        <button onclick="decrease('${id}')">-</button>
        <button onclick="removeItem('${id}')">Remove</button>
      </div>
    </div>
  `;
}





function calculateTotal()

{
  let totalItems = qtyMobile+qtyLaptop+qtyHeadphones+qtyWatch+qtyTablet+qtyCamera+qtySpeaker+qtyKeyboard+qtyMonitor;
  let totalPrice = qtyMobile*priceMobile + qtyLaptop*priceLaptop + qtyHeadphones*priceHeadphones +
                   qtyWatch*priceWatch + qtyTablet*priceTablet + qtyCamera*priceCamera +
                   qtySpeaker*priceSpeaker + qtyKeyboard*priceKeyboard + qtyMonitor*priceMonitor;

  document.getElementById("totalItems").innerHTML="Total Items: "+totalItems;
  document.getElementById("totalPrice").innerHTML="Total Price: ₹"+totalPrice;
}
