const form = document.airlineForm;

form.addEventListener("submit", formAlert);

function formAlert(event) {
    event.preventDefault();

    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var dietInput = [];

    for ( i = 0; i < form.diet.length; i++ ) {
        if (form.diet[i].checked) {
        dietInput.push(form.diet[i].value);
        }
    }

    form.firstName.value = "";
    form.lastName.value = "";
    form.age.value = "";
    form.gender.value = "";
    form.location.value = "";
    form.diet.value = "";

    alert(`First Name: ${firstName}\\nLast Name: ${lastName}\\nAge: ${age}\\nGender: ${gender}\\nTravel Location: ${location}\\nDiet: ${dietInput}\\nAwesome, now if you die, it won't be an accident..`);
}
