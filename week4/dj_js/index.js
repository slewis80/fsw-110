document.getElementById("header").style.textAlign = "center";

var box = document.getElementById("box");
box.style.height = "400px";
box.style.width = "400px";
box.style.border = "2px solid black";
box.style.margin = "auto";

function turnBlue() {
    box.style.backgroundColor = "blue";
}
function turnWhite() {
    box.style.backgroundColor = "white";
}
function turnRed() {
    box.style.backgroundColor = "red";
}
function turnYellow() {
    box.style.backgroundColor = "yellow";
}
function turnGreen() {
    box.style.backgroundColor = "green";
}
function turnOrange() {
    box.style.backgroundColor = "orange";
}
function checkKeyPressed(evt) {
    if (evt.keyCode == "66") {
        turnBlue();
    } else if (evt.keyCode == "87") {
        turnWhite();
    } else if (evt.keyCode == "82") {
        turnRed();
    } else if (evt.keyCode == "89") {
        turnYellow();
    } else if (evt.keyCode == "71") {
        turnGreen();
    } else if (evt.keyCode == "79") {
        turnOrange();
    }
}

box.addEventListener("mouseover", turnBlue);
box.addEventListener("mouseout", turnWhite);
box.addEventListener("mousedown", turnRed);
box.addEventListener("mouseup", turnYellow);
box.addEventListener("dblclick", turnGreen);
window.addEventListener("wheel", turnOrange);
window.addEventListener("keydown", checkKeyPressed);
