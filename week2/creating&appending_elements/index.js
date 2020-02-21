var newHeader = document.createElement("h1")
newHeader.textContent = "Welcome to my JS site"
newHeader.style.textAlign = "center"
document.body.appendChild(newHeader)

var newP = document.createElement("p")
newP.textContent =  "All of this was created with Javascript"
newP.style.textAlign = "center"
newP.style.color = "green"
document.body.appendChild(newP)

var newOL = document.createElement("ol")
newOL.setAttribute("id", "newOL")
document.body.appendChild(newOL)
var newLI1 = document.createElement("li")
newLI1.textContent = "coffee"
var newLI2 = document.createElement("li")
newLI2.textContent = "more coffee"
var newLI3 = document.createElement("li")
newLI3.textContent = "even more coffee"
document.getElementById("newOL").append(newLI1,newLI2,newLI3)

