const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputDisplay = document.querySelector("#output");


if (isTriangleBtn) {
  isTriangleBtn.addEventListener("click", function () {
    checkInput(angleOne, angleTwo, angleThree);
  });
}

function checkInput(inputOne, inputTwo, inputThree) {
    if (inputOne.value && inputTwo.value && inputThree.value) {
      if (
        Number(inputOne.value) > 0 &&
        Number(inputTwo.value) > 0 &&
        Number(inputThree.value) > 0
      ) {
        //calculate
        calculateSumOfAngles(inputOne, inputTwo, inputThree);
      } else {
        outputDisplay.innerText = "Input Value cannot be less than 1";
      }
    } else {
      outputDisplay.innerText = "input fields cannot be empty";
    }
  }
  
  function calculateSumOfAngles(valueOne, valueTwo, valueThree) {
    let sumofAngles =
      Number(valueOne.value) + Number(valueTwo.value) + Number(valueThree.value);
    if (sumofAngles === 180) {
      outputDisplay.innerText = "Is a Triangle";
    } else {
      outputDisplay.innerText = "Not a Triangle";
    }
  }