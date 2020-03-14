const form = document.form;

form.addEventListener("submit", confirmation);

function confirmation(event) {
    event.preventDefault();

    let fName = form.firstName.value;
    let lName = form.lastName.value;
    let age = form.age.value;
    let seats = form.seats.value;
    let gender = form.gender.value;
    let city = form.city.value;
    let dietInput = [];

    for ( i = 0; i < form.diet.length; i++ ) {
        if (form.diet[i].checked){
            dietInput.push(form.diet[i].value)
        }
    }
    form.firstName.value = "";
    form.lastName.value = "";
    form.age.value = "";
    form.seats.value = "";
    form.gender.value = "";
    form.city.value = "";
    form.diet.value = "";

    alert(`Confirmation:
    First Name: ${fName}
    Last Name: ${lName}
    Age: ${age}
    Number of seats: ${seats}
    Gender: ${gender}
    City: ${city}
    Diet: ${dietInput}`);
}

