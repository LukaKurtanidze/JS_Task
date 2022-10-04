const formData = document.forms["myForm"];   //this is where input is saved
//localStorage.clear();
let formDataArray = JSON.parse(localStorage.getItem("data")) || [];   // if data is in local storage, save it in this array
let id = formDataArray.length || 0;     // set id to the maximum elemen in data saved in local storage (if it exist otherwise 0)
let table = document.getElementById("table");


function initialiseRows() {
    // get data from formDataArray (which gets its data from local storage and create initial rows from it)
    for (let i=1; i<=formDataArray.length; i++) {
        let row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);

        cell1.innerHTML = formDataArray[i-1].id;
        cell2.innerHTML = formDataArray[i-1].firstName;
        cell3.innerHTML = formDataArray[i-1].lastName;
        cell4.innerHTML = formDataArray[i-1].date;
        cell5.innerHTML = formDataArray[i-1].adress;
        cell6.innerHTML = formDataArray[i-1].gender;
        
        cell7.value = formDataArray[i-1].id;
        cell7.innerHTML = "VIEW";
        cell8.value = formDataArray[i-1].id;
        cell8.innerHTML = "DELETE";

        cell8.addEventListener('click', (event)=>deleteRow(event));
    }
}


function addRow(id) {
    let row = table.insertRow(id);

    // create row cells
    var cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);

    /* since after submitting input data is saved in local storage and therefore saved in formDataArray,
        set content of the ceilings to the latest members of data of the local storage
    */
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


function deleteRow(event) {
    for (let i=0; i<formDataArray.length; i++) {
        if (formDataArray[i].id == event.target.value) {
            console.log("target value");
            console.log(event.target.value);
            console.log("data id");
            console.log(formDataArray[i].id);
            formDataArray.splice(i, 1);
            localStorage.clear();
            document.location.reload();
            localStorage.setItem("data", JSON.stringify(formDataArray));
            console.log(formDataArray);
        }
    }
}





window.onbeforeunload = () => {
    localStorage.setItem("firstName", document.forms["myForm"]["firstName"].value);
    localStorage.setItem("lastName", document.forms["myForm"]["lastName"].value);
    localStorage.setItem("adress", document.forms["myForm"]["adress"].value);
    localStorage.setItem("date", document.forms["myForm"]["date"].value);
    localStorage.setItem("gender", document.forms["myForm"]["gender"].value);
    localStorage.setItem("notes", document.forms["myForm"]["notes"].value);
}
window.onload = () => {
        let firstName = localStorage.getItem("firstName");
        if (firstName !== null) document.forms["myForm"]["firstName"].value = firstName;

        let lastName = localStorage.getItem("lastName");
        if (lastName !== null) document.forms["myForm"]["lastName"].value = lastName;
    
        let adress = localStorage.getItem("adress");
        if (adress !== null) document.forms["myForm"]["adress"].value = adress;

        let date = localStorage.getItem("date");
        if (date !== null) document.forms["myForm"]["date"].value = date;

        let gender = localStorage.getItem("gender");
        if (gender !== null) document.forms["myForm"]["gender"].value = gender;

        let notes = localStorage.getItem("notes");
        if (notes !== null) document.forms["myForm"]["notes"].value = notes;

}



function validation() {
    let isValid = true;
    let x = formData;
    let numberRegex = /\d/;
    let specialCharacterRegex = /^\w*$/;
    if (numberRegex.test(x["firstName"].value)) {
        alert("First Name includes Number");
        isValid = false;
    }
    if (!specialCharacterRegex.test(x["firstName"].value)) {
        alert("First Name includes special character");
        isValid = false;
    }
    if (numberRegex.test(x["lastName"].value)) {
        alert("Last Name includes number");
        isValid = false;
    }
    if (!specialCharacterRegex.test(x["lastName"].value)) {
        alert("Last Name includes special character!");
        isValid = false;
    }
    if (x["adress"].value.length > 36) {
        alert("Adress is more");
        isValid = false;
    }
    return isValid;

}

function handleSubmit(event) {
    let x = formData;
    if (!validation()) {
        event.preventDefault();
    } else {
        event.preventDefault();
        id++;
        console.log(JSON.parse(localStorage.getItem("data")));
        
        formDataArray.push({
            id: id,
            firstName: x["firstName"].value,
            lastName: x["lastName"].value,
            date: x["date"].value,
            adress: x["adress"].value,
            gender: x["gender"].value,
            notes: x["notes"].value
        })


        localStorage.setItem("data", JSON.stringify(formDataArray));
        console.log(JSON.parse(localStorage.getItem("data")));
        addRow(id);

    }
}

initialiseRows();
formData.addEventListener('submit', (e) => handleSubmit(e));

/*
const x = document.getElementById('firstName');
console.log(x.value); */