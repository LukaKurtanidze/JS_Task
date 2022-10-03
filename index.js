const formData = document.forms["myForm"];

let formDataArray = [];
let id = 0;

function validate(event) {
    let x = formData;
    let numberRegex = /\d/;
    let specialCharacterRegex = /^\w*$/;
    let isPassed = true;
    if (numberRegex.test(x["firstName"].value)) {
        alert("First Name includes Number");
        isPassed = false;
    }
    if (!specialCharacterRegex.test(x["firstName"].value)) {
        alert("First Name includes special character");
        isPassed = false;
    }
    if (numberRegex.test(x["lastName"].value)) {
        alert("Last Name includes number");
        isPassed = false;
    }
    if (!specialCharacterRegex.test(x["lastName"].value)) {
        alert("Last Name includes special character!");
        isPassed = false;
    }
    if (x["adress"].value.length > 4) {
        alert("Adress is more");
        isPassed = false;
    }
    if (!isPassed) {
        event.preventDefault();
    } else {
        id++;
        formDataArray.push({
            id: id,
            firstName: x["firstName"].value,
            lastName: x["lastName"].value,
            date: x["date"].value,
            adress: x["adress"].value,
            gender: x["gender"].value,
            notes: x["notes"].value
        })
        console.log(formDataArray)
    }
}


formData.addEventListener('submit', (e) => validate(e))

/*
const x = document.getElementById('firstName');
console.log(x.value); */