const box = document.querySelector("div");

function coordinates(e){
    let x = e.clientX;
    let y = e.clientY;
    document.querySelector("h1").innerHTML = `${x} and ${y}`;
}

box.addEventListener("mousemove", coordinates);
