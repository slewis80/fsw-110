const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

for (var i = 0; i < names.length; i++) {
    var heading = document.createElement("h1");
    heading.textContent = names[i];
    heading.style.color = "firebrick";
    heading.style.textAlign = "center";
    document.body.append(heading);
}