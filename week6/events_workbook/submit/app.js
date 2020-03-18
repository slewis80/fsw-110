
const form = document.getElementById("submit-me");

function submitEvent(e){
    e.preventDefault();
    let fName = form.user_name.value;
    let age = form.age.value;
    let date = form.date.value;
    let color = form.color.value;
    let range = form.range.value;
    let radioInput = form.radio.checked ? form.radio.value : "blank";
    let checkboxInput = form.checkbox.checked ? form.checkbox.value : "blank";

    alert(`You entered...
    First Name: ${fName},
    Age: ${age},
    Date: ${date},
    Color: ${color},
    Range #: ${range},
    the radio button was: ${radioInput},
    and the checkbox was: ${checkboxInput}.`);

    form.user_name.value = " ";
    form.age.value = " ";
    form.date.value = " ";
    form.color.value = " ";
    form.range.value = " ";
    form.radio.checked = false;
    form.checkbox.checked = false;
    
}

form.addEventListener("submit", submitEvent);
