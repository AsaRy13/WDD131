//JavaScript Arrays
let names = ["Asa", "Ryan", "Fletcher", "AsaRy"];
console.log(names);

console.log(names[2]);

let grades = [89, 39, 55, 100];

console.log(grades);

//JavaScript Objects
let studentName = "Ryan Fletcher";
let studentClasses = ["WDD131", "CSE199R"];
let studentGrades = [99, 98];

let student = {
    fname:"Ryan",
    lname:"Fletcher",
    classes:["WDD131", "CSE199R"],
    grades:[99, 98]
}

console.log(student.fname + " " + student.lname);

//Array Methods
names.forEach((name) => {
    //runs this function once for every element in the array one at a time.
    console.log(name);
});

let newNames = names.map((name) => {
    return name + " " + "Fletcher";
});

console.log(newNames);

let filteredNames = names.filter((name) => {
    return name[0] === "A";
});

console.log(filteredNames);

let gradeAverage = student.grades.reduce((total, num) => {
    return total + num;
}) / student.grades.length;

console.log(gradeAverage);

let nameIndex = names.indexOf("Fletcher");

console.log(nameIndex);