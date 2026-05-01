let darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", changeMode);

function changeMode() {
    let current = darkModeToggle.value;
    if(current === "dark"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelector("h4").style.color = "#035f9c";
        document.getElementById("logo").setAttribute("src", "byui-logo-white.png");
        document.getElementById("logo").style.height = "100%";
        document.getElementById("logo").style.width = "100%";
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.querySelector("h4").style.color = "#035f9c";
        document.getElementById("logo").setAttribute("src", "byui-logo-blue.webp");
        document.getElementById("logo").style.height = "25%";
        document.getElementById("logo").style.width = "25%";
    }
}