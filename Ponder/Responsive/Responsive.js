let menuBtn = document.getElementsByClassName("menu-btn")[0];
console.log(menuBtn);

menuBtn.addEventListener("click", handleMenuBtnClick);

function handleMenuBtnClick(event) {
    console.log(event);
    document.getElementsByTagName("nav")[0].classList.toggle("hide");
    menuBtn.classList.toggle("change");
}