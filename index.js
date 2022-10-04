const formData = document.forms["myForm"];

let formDataArray = [];
let id = 0;
let table = document.getElementById("table");
let myName = "luka";

function deleteRow(event) {
    for (data of formDataArray) {
        if (data.id === event.target.value) {
            formDataArray.splice(data.id-1, 1);
            document.location.reload();
            console.log(formDataArray);
        }
    }
}

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
    if (x["adress"].value.length > 36) {
        alert("Adress is more");
        isPassed = false;
    }
    if (!isPassed) {
        event.preventDefault();
    } else {
        event.preventDefault();
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
        console.log(formDataArray);

        let row = table.insertRow(id);

        var cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);

        cell1.innerHTML = formDataArray[id-1].id;
        cell2.innerHTML = formDataArray[id-1].firstName;
        cell3.innerHTML = formDataArray[id-1].lastName;
        cell4.innerHTML = formDataArray[id-1].date;
        cell5.innerHTML = formDataArray[id-1].adress;
        cell6.innerHTML = formDataArray[id-1].gender;
        cell7.value = formDataArray[id-1].id;
        cell7.innerHTML = "VIEW";
        cell8.value = formDataArray[id-1].id;
        cell8.innerHTML = "DELETE";
        
        cell8.addEventListener('click', (event)=>deleteRow(event));
    }
}


formData.addEventListener('submit', (e) => validate(e))

/*
const x = document.getElementById('firstName');
console.log(x.value); */