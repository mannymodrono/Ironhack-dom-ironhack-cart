var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // let quantity = document.getElementById("qt").value;
  // let price = document.getElementById('price').innerHTML;
  // let subtotal = quantity * price;
  // let printedSub = document.getElementById('sub').innerHTML = subtotal;
  // return printedSub;

  let products = [...document.getElementsByClassName('product')];

  products.forEach(product => {
    let qty = product.children[2].children[0].children[0].value;
    console.log(qty)
    let price = product.children[1].children[0].innerHTML;
    console.log(price)
    let sub = product.children[3].children[0].innerHTML;
    console.log(sub)

    sub = qty * price;
    product.children[3].children[0].innerHTML = sub;
  });
}

function calcAll() {
  
  // let products = [...document.getElementsByClassName('product')];
  // let total = 0;

  // products.forEach(product => {
  //   let qty = product.children[2].children[0].children[0].value;
  //   console.log(qty)
  //   let price = product.children[1].children[0].innerHTML;
  //   console.log(price)
  //   let sub = product.children[3].children[0].innerHTML;
  //   console.log(sub)

  //   sub = qty * price;
  //   total += sub;
  // });

  // document.getElementById('total').innerHTML = total;
}

$calc.onclick = calcAll();
