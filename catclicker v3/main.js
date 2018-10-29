// add event listener 
document.querySelector("#andy").addEventListener("click", showAndy);
document.querySelector("#bill").addEventListener("click", showBill);
document.querySelector("#itch").addEventListener("click", showItch);
document.querySelector("#rudolph").addEventListener("click", showRudolph);
document.querySelector("#talent").addEventListener("click", showTalent);

//select display area
const display = document.querySelector("#display");
// create elements for display area
const name = document.createElement("h1");
const image = document.createElement("img");
const counter= document.createElement("h3");
const div= document.createElement("div");
//declare counter variable
let andyClick= 0;
let billClick= 0;
let itchClick= 0;
let rudolphClick= 0;
let talentClick= 0;

let clickNum = 0;

//add event listener to the image
image.addEventListener("click", increament);

function increament() { 
  switch(name.textContent) {
        case "andy":
        andyClick++;
        counter.innerHTML = `Clicks:<span>${andyClick}</span>`;
        break;
        case "bill":
        billClick++;
        counter.innerHTML = `Clicks:<span>${billClick}</span>`;
        break;
        case "itch":
        itchClick++;
        counter.innerHTML = `Clicks:<span>${itchClick}</span>`;
        break;
        case "rudolph":
        rudolphClick++;
        counter.innerHTML = `Clicks:<span>${rudolphClick}</span>`;
        break;
        case "talent":
        talentClick++;
        counter.innerHTML = `Clicks:<span>${talentClick}</span>`;
        break;
}
}

function showAndy() {


    name.textContent = "andy";
    image.setAttribute("src", "./cat img/andy.jpg");
    counter.innerHTML = `Clicks: <span>${andyClick}</span>`;

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}
function showBill(){

    name.textContent = "bill";
    image.setAttribute("src", "./cat img/bill.jpg");
    counter.innerHTML = `Clicks: <span>${billClick}</span>`;

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}
function showItch(){

    name.textContent = "itch";
    image.setAttribute("src", "./cat img/itch.jpg");
    counter.innerHTML = `Clicks: <span>${itchClick}</span>`;
    
    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}
function showRudolph(){

    name.textContent = "rudolph";
    image.setAttribute("src", "./cat img/rudolph.jpg");
    counter.innerHTML = `Clicks: <span>${rudolphClick}</span>`;

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}
function showTalent(){

    name.textContent = "talent";
    image.setAttribute("src", "./cat img/talent.jpg");
    counter.innerHTML = `Clicks: <span>${talentClick}</span>`;

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}




