function add(addNum1, addNum2) {
    var addNum1 = Number(document.getElementById("addNum1").value);
    var addNum2 = Number(document.getElementById("addNum2").value);
    document.getElementById("addResult").innerHTML = "Result: " + (addNum1 + addNum2);
}
function sub(subnum1, subnum2) {
    var subNum1 = Number(document.getElementById("subNum1").value);
    var subNum2 = Number(document.getElementById("subNum2").value);
    document.getElementById("subResult").innerHTML = "Result: " + (subNum1 - subNum2);
}
function mul(mulnum1, mulnum2) {
    var mulNum1 = Number(document.getElementById("mulNum1").value);
    var mulNum2 = Number(document.getElementById("mulNum2").value);
    document.getElementById("mulResult").innerHTML = "Result: " + (mulNum1 * mulNum2);
}

var addButton = document.getElementById("addButton");
var subButton = document.getElementById("subButton");
var mulButton = document.getElementById("mulButton");

addButton.addEventListener("click", add);
subButton.addEventListener("click", sub);
mulButton.addEventListener("click", mul);