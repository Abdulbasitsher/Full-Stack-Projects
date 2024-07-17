

const btnblue = document.getElementById("btn-primary");

btnblue.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});

const btnGrey = document.getElementById("btn-secondary");
btnGrey.addEventListener("click", () => {
    document.body.style.backgroundColor = "#808080";
});

const btnGreen = document.getElementById("btn-success");
btnGreen.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
});

const btnRed = document.getElementById("btn-danger");
btnRed.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});

const btnYellow = document.getElementById("btn-warning");
btnYellow.addEventListener("click", () => {
    document.body.style.backgroundColor = "Yellow";
});

const btnLightGray = document.getElementById("btn-info");
btnLightGray.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
});

const btnLightBlue = document.getElementById("btn-light");
btnLightBlue.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue";
});
const btnLightGreen = document.getElementById("btn-dark");
btnLightGreen.addEventListener("click", () => {
    document.body.style.backgroundColor = "darkcyan";
});