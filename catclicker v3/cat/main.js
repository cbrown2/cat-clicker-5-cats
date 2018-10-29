//ad eventListner for Cat and Ben image

document.querySelector("#catimg").addEventListener("click", onClickCat);
document.querySelector("#benimg").addEventListener("click", onClickBen);
//Declare variables for Cat and Ben
let counterCat = 0;
let counterBen = 0;
const counterEleCat = document.querySelector("#catCounter");
const counterEleBen = document.querySelector("#benCounter");

//Select counter element for both cat and ben
counterEleCat.textContent = counterCat;
counterEleBen.textContent = counterBen;
function onClickCat() {
counterCat++;
counterEleCat.textContent = counterCat;
}
function onClickBen() {
    counterBen++;
    counterEleBen.textContent = counterBen;
    }