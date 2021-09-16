const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputEl = document.querySelector('#output');



function calculateSumOfSquares(a,b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;

}


function calculateHypotenuse() {

    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));

    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

    console.log(lengthOfHypotenuse);
    outputEl.innerText = "The length of the hypotenuse is " + lengthOfHypotenuse;


}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);