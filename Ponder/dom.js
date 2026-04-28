
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})

let firstList = document.querySelector(".list");
firstList.style.backgroundColor = "red";

let content = document.getElementById("content");
content.style.backgroundColor = "blue";

document.querySelector("img").setAttribute("src", "byui-logo-blue.webp");
document.querySelector("img").setAttribute("alt", "New Image.");

document.querySelector("h1").textContent = "MONSTER TRUCKS!!!";
document.getElementsByTagName("h1")[0].innerText = "MONSTER TRUCKS!22!!";

console.log(document.getElementById("content"));