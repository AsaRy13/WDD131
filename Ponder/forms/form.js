// retrieve the form from the DOM, print out the result.

const form = document.getElementById("fsyForm");

console.log(form);

//If the user selects "One Campus" from the dropdown,
//but doesn't select ANY campus checkboxes,
//display message "Please choose at least one campus."

function getCheckedCampuses(campuses){
    return Array.from(campuses)
                .filter(campus => campus.checked)
                .map(campus => campus.value);
}

function isDateValid(){
    const date = parseFloat(document.getElementById("availableDate").value[8] + document.getElementById("availableDate").value[9]);
    const dateClass = new Date();
    const todaysDate = dateClass.getDate();
    console.log(date);
    console.log(todaysDate);
    return date > todaysDate;
}

// add event listener to the form
form.addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById("output").innerHTML = "";
    
    const numberOfCampuses = form.travelRange.value;
    const campuses = form.campus;
    const notSubmittable = false;
    console.log(campuses);

    if (numberOfCampuses === "one" && getCheckedCampuses(campuses).length == 0){
        document.getElementById("output").innerHTML += "<p>Please select at least one campus!</p>";
        notSubmittable = true;
    } else if (numberOfCampuses === "many" && getCheckedCampuses(campuses).length < 2){
        document.getElementById("output").innerHTML += "<p>Please select at least two campuses!</p>";
        notSubmittable = true;
    }

    if(!isDateValid()) {
        document.getElementById("output").innerHTML += "<p>Please choose a future date!</p>";
        notSubmittable = true;
    }

    if(notSubmittable){
        return;
    } else {
        document.getElementById("output").innerHTML = `
        <h2>Preference Submitted</h2>
        <p>${form.firstName.value} ${form.lastName.value}</p>
        <p>Email: ${form.email.value}</p>
        <p>Availability: ${form.availableDate.value}</p>
        <p>Campuses: ${getCheckedCampuses(campuses).join(", ")}</p>
        <p>Preference Level: ${numberOfCampuses}</p>`;
    }
});

form.travelRange.addEventListener("change", event => {
    const numberOfCampuses = form.travelRange.value;
    if(numberOfCampuses === "many"){
        document.getElementById("notesContainer").removeAttribute("hidden");
        document.getElementById("notes").setAttribute("required", "");
    } else {
        document.getElementById("notesContainer").setAttribute("hidden", "");
        document.getElementById("notes").removeAttribute("required");
    }
});