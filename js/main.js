const squareInput = document.querySelector("#square-input");
const squareRange = document.querySelector("#square-range");
const basePrice = 1000;
const totalPriceElement = document.querySelector("#totalPrice");

const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

const ceiling = document.querySelector('input[name="ceiling"]');
const wall = document.querySelector('input[name="wall"]');
const floor = document.querySelector('input[name="floor"]');

console.log(radioType);
const inputs = document.querySelectorAll("input");
console.log(inputs);
squareRange.addEventListener("input", function () {
  squareInput.value = squareRange.value;
});

squareInput.addEventListener("input", function () {
  squareRange.value = squareInput.value;
});

function calc() {
  let totalPrice = basePrice * parseInt(squareInput.value);

  for (const radio of radioType) {
    if (radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }

  for (const radio of radioBuilding) {
    if (radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }
  for (const radio of radioRooms) {
    if (radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }

  if(ceiling.checked){
    totalPrice = totalPrice *parseFloat(ceiling.value) ; 
  }
  if(wall.checked){
    totalPrice = totalPrice *parseFloat(wall.value) ; 
  }
  if(floor.checked){
    totalPrice = totalPrice *parseFloat(floor.value) ; 
  }
  const formatter = new Intl.NumberFormat("ua");
  formatter.format(totalPrice);
  totalPriceElement.innerText = formatter.format(totalPrice);
}

calc();

for (const input of inputs) {
  input.addEventListener("input", function () {
    calc();
  });
}
