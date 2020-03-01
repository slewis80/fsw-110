var header1 = document.createElement("h1");
header1.textContent = "This is my header!!!";
header1.setAttribute("class", "elementClass");
document.body.appendChild(header1);

var header2 = document.createElement("h2");
header2.textContent = "This is my next header!";
header2.setAttribute("class", "elementClass");
document.body.appendChild(header2);

var paragraph = document.createElement("p");
paragraph.textContent = "Fa la la la laaa, la la la laaaaa.";
paragraph.setAttribute("class", "elementClass");
document.body.appendChild(paragraph);

var footer = document.createElement("footer");
footer.textContent = "Don't step on me!";
footer.setAttribute("class", "elementClass");
document.body.appendChild(footer);

var loopList = ["This is my new h1", "This is my new h2", "This is my new paragraph", "This is my new footer"];

for (var i = 0; i < loopList.length; i++) {
    var newText = document.querySelectorAll(".elementClass")[i];
    newText.textContent = loopList[i];
    newText.style.fontSize = "20px";
    newText.style.fontWeight = "lighter";
    newText.style.fontFamily = "sans-serif";
    newText.style.color = "cornflowerblue";
}
document.body.classList.add("border"); 