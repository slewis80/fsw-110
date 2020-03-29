const addButton = document.getElementById("addBtn");

function newElement(e) {

  e.preventDefault();
  var li = document.createElement("li");
  taskValue = document.getElementById("task").value.toUpperCase();
  descValue = document.getElementById("description").value;
  li.innerHTML = ` ${taskValue} : ${descValue} `;
  document.getElementById("myUL").appendChild(li);
  li.setAttribute("class", "listItem");
  
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  li.appendChild(deleteButton);
  deleteButton.setAttribute("class", "delBtn");
  deleteButton.addEventListener("click", function() {
    li.removeChild(deleteButton);
    document.getElementById("myUL").removeChild(li);
  });

  document.getElementById("task").value = "";
  document.getElementById("description").value = "";
}


addButton.addEventListener("click", newElement);
