const shortNav = document.querySelector("#short_nav");
const menuBtn = shortNav.querySelector("button");
const menuBar = document.querySelector("#long_nav");
const images = document.querySelector("#images");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

menuBtn.addEventListener("click", openMenu);

function openMenu(e) {
    if(menuBar.style.display === ""){
        menuBar.style.display = "block";
    } else if(menuBar.style.display === "block"){
        menuBar.style.display = "";
    }
}

images.addEventListener("click", openModal);

function openModal(e){
    modalImage.src = e.target.src.replace("sm", "full");
    modal.showModal();
}

closeButton.addEventListener("click", () => modal.close());

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

modal.addEventListener('keydown', (event) => {
    if (event.key === 27) {
        modal.close();
    }
});