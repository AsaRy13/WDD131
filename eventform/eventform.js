
const form = document.getElementById("eventform");

function isDateValid(dateIn){
    const date = parseFloat(dateIn[8] + dateIn[9]);
    const dateClass = new Date();
    const todaysDate = dateClass.getDate();
    console.log(date);
    console.log(todaysDate);
    return date > todaysDate;
}

form.addEventListener("submit", event => {
    event.preventDefault();
    let output = document.getElementById("output");
    output.innerHTML = "";
    
    let notSubmittable = false;
    const eventType = form.eventType.value;
    const iNumber = form.iNumber.value;
    const accessCode = form.accessCode.value;

    if (eventType === "student" && iNumber.toString().length != 9) {
        output.innerHTML += "<p>Student I# must be 9 digits.</p>";
        notSubmittable = true; 
    }
    else if (eventType === "guest" && accessCode != "EVENT131") {
        output.innerHTML += "<p>Incorrect access code.</p>";
        notSubmittable = true;
    }

    if(!isDateValid(form.date.value)) {
        output.innerHTML += "<p>Please select a date in the future.</p>";
        notSubmittable = true;
    }

    if(notSubmittable){
        return;
    } else {
        output.innerHTML = `
            <h2>Ticket Created</h2>
            <p>${form.firstName.value} ${form.lastName.value}</p>
            <p>${eventType}</p>
            <p>${form.date.value}</p>
        `;
    }
});

form.eventType.addEventListener("change", () => {
    const eventType = form.eventType.value;
    if(eventType === "student"){
        document.getElementById("iNumberContainer").removeAttribute("hidden");
        document.getElementById("iNumberContainer").setAttribute("required", "");
        document.getElementById("accessCodeContainer").removeAttribute("required");
        document.getElementById("accessCodeContainer").setAttribute("hidden", "");
    } else if (eventType === "guest"){
        document.getElementById("iNumberContainer").removeAttribute("required");
        document.getElementById("iNumberContainer").setAttribute("hidden", "");
        document.getElementById("accessCodeContainer").removeAttribute("hidden");
        document.getElementById("accessCodeContainer").setAttribute("required", "");
    }
    else {
        document.getElementById("iNumberContainer").removeAttribute("required");
        document.getElementById("iNumberContainer").setAttribute("hidden", "");
        document.getElementById("accessCodeContainer").removeAttribute("required");
        document.getElementById("accessCodeContainer").setAttribute("hidden", "");
    }
});