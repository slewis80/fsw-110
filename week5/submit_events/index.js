const form = document.form;

form.addEventListener("submit", inputAlert);

function inputAlert(event){
  event.preventDefault();
  let fNameInput = form.fName.value;
  let lNameInput = form.lName.value;
  let emailInput = form.email.value;
  form.fName.value = "";
  form.lName.value = "";
  form.email.value = "";
  alert(fNameInput + " " + lNameInput + " " + emailInput)
}

