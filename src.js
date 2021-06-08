document.getElementById("add").addEventListener("click", add);
document.getElementById("sub").addEventListener("click", sub);
document.getElementById("mult").addEventListener("click", mult);
document.getElementById("div").addEventListener("click", div);
let op1 = document.getElementById("op-1").value;
let op2 = document.getElementById("op-2").value;
function add() {
  let op1 = parseInt(document.getElementById("op-1").value);
  let op2 = parseInt(document.getElementById("op-2").value);
  document.getElementById("res").innerHTML = op1 + op2;
}
function sub() {
  let op1 = parseInt(document.getElementById("op-1").value);
  let op2 = parseInt(document.getElementById("op-2").value);
  document.getElementById("res").innerHTML = op1 - op2;
}
function mult() {
  let op1 = parseInt(document.getElementById("op-1").value);
  let op2 = parseInt(document.getElementById("op-2").value);
  document.getElementById("res").innerHTML = op1 * op2;
}
function div() {
  let op1 = parseInt(document.getElementById("op-1").value);
  let op2 = parseInt(document.getElementById("op-2").value);
  document.getElementById("res").innerHTML = op1 / op2;
}
