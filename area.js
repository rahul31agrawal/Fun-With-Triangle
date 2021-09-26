const sideInputs = document.querySelectorAll(".side-input");
const areaButton = document.querySelector("#area-btn");
const outputE1 = document.querySelector("#output");



function calculateArea(base, height){
 const multiplyNos = 0.5*base*height;
 return multiplyNos;

}

function calculateTriangleArea(){

     const a = Number(sideInputs[0].value);
     const b = Number(sideInputs[1].value);
    if(a > 0 && b > 0)
     {
        const areaOfTri = calculateArea(a,b)
         outputE1.innerText ="The area of triangle is : " +  areaOfTri ;
       
     }else{
         outputE1.innerText ="Please, Enter valid numbers";
     }
}

areaButton.addEventListener("click", calculateTriangleArea);