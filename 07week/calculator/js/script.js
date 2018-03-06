'use strict';


  function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function subtraction() {
  document.querySelector("#results").value += "-";
}
function multiply() {
  document.querySelector("#results").value += "*";
}
function divide() {
  document.querySelector("#results").value += "/";
}

function negative() {
 document.querySelector("#results").value += "*-1";
 equals();
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}
