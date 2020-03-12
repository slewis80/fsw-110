const form = document.form;

form.addEventListener("submit", inputAlert);

function inputAlert(event){
  event.preventDefault();
  const fNameInput = form.fName.value;
  const lNameInput = form.lName.value;
  const emailInput = form.email.value;
  form.fName.value = "";
  form.lName.value = "";
  form.email.value = "";
  alert(fNameInput + " " + lNameInput + " " + emailInput)
}

