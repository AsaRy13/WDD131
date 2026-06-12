const snortleblat = {
    classType: "Swamp Beast Diplomat",
    level: 5,
    health: 100
}

const snortleblatStats = document.querySelector(".stats");
const attacked = document.getElementById("attacked");
const levelUp = document.getElementById("levelUp");

changeStats();

function changeStats() {
    snortleblatStats.innerHTML = `
        <p>Class: ${snortleblat.classType}</p>
        <p>Level: ${snortleblat.level}</p>
        <p>Health: ${snortleblat.health}</p>
    `;
}

attacked.addEventListener("click", event => {
    if(snortleblat.health > 0){
        snortleblat.health -= 20;
    }

    changeStats();

    if (snortleblat.health <= 0) {
        setTimeout(() => alert("Character has died."), 100);
    }
});

levelUp.addEventListener("click", event => {
    snortleblat.level++;
    changeStats();
});