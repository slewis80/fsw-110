var navbar = document.createElement("div")
navbar.setAttribute("id","navbar")
document.body.appendChild(navbar)

var navbarLinks = document.createElement("ul")
navbarLinks.setAttribute("id","navbarLinks")
navbarLinks.style.listStyle = "none";
navbarLinks.style.textAlign = "center";
document.getElementById("navbar").appendChild(navbarLinks)

var homeLink = document.createElement("li")
homeLink.textContent = "Home"
homeLink.style.display = "inline-block";
homeLink.style.padding = "10px";

var aboutUsLink = document.createElement("li")
aboutUsLink.textContent = "About Us"
aboutUsLink.style.display = "inline-block";
aboutUsLink.style.padding = "10px";

var contactUsLink = document.createElement("li")
contactUsLink.textContent = "Contact Us"
contactUsLink.style.display = "inline-block";
contactUsLink.style.padding = "10px";

document.getElementById("navbarLinks").append(homeLink,aboutUsLink,contactUsLink)

var header = document.createElement("h1")
header.textContent = "Here is the header!!!";
header.style.textAlign = "center";
document.body.appendChild(header)

var paragraph = document.createElement("p")
paragraph.textContent = "This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.";
paragraph.style.padding = "25px";
document.body.appendChild(paragraph)

var footer = document.createElement("footer")
footer.textContent = "**Made With Love and coffee**";
footer.style.textAlign = "center";
document.body.appendChild(footer)
