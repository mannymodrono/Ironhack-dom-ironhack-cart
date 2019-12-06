var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  let quantity = document.getElementById("qt").value;
  let price = document.getElementById('price').innerHTML;
  let subtotal = quantity * price;
  let printedSub = document.getElementById('sub').innerHTML = subtotal;
  return printedSub;
}

function calcAll() {
  document.getElementById('total').innerHTML = updateSubtot();
}
$calc.onclick = calcAll;
