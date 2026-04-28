
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})

let firstList = document.querySelector(".list");
firstList.style.backgroundColor = "red";