var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let rmButton = document.getElementsByClassName('rm');
let createButton = document.getElementById('create');

function updateSubtot($product) {
  console.log("Button CLicked")

  let products = [...document.getElementsByClassName('product')];

  products.forEach(product => {
    let qty = product.children[2].children[0].children[0].value;
    console.log("Quantity", qty)
    let price = product.children[1].children[0].innerHTML;
    console.log("Price", price)

    let sub = product.children[3].children[0].innerHTML;
    console.log("Subtotal", sub)

    sub = qty * price;
    product.children[3].children[0].innerHTML = sub;
    console.log("New Subtotal", sub)

  });
}

function calcAll() {
  updateSubtot();
  console.log('calc all ran')

  let products = [...document.getElementsByClassName('product')];
  let total = 0;

  products.forEach(product => {
    let sub = Number(product.children[3].children[0].innerHTML);
    total += sub;
  });

  document.getElementById('total').innerHTML = total;
}

function deleteItem(button) {
  console.log(button)
  button.parentNode.parentNode.removeChild(button.parentNode);
}


function create() {
  let product = document.querySelector('.product');
  let clone = product.cloneNode(true);
  let t = document.querySelector('tbody');
  document.body.appendChild(clone)
  t.insertBefore(clone, product)

  let price = document.getElementById('numInput').value;
  let name = document.getElementById('textInput').value

  clone.children[1].children[0].innerHTML = price;
  clone.children[0].children[0].innerHTML = name;
}


$calc.onclick = calcAll;

for (const button of rmButton) {
  button.onclick = function () {
    if (document.getElementsByClassName('product').length > 0){
      deleteItem(button);
    }
    else {
      alert('You need at least one item in the cart at all times.')
    }
  }
}

createButton.onclick = create;
