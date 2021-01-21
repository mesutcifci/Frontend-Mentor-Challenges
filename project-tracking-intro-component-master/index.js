let button = document.getElementById("hamburger-button")
let hamburgerIcon = document.querySelector(".hamburger");
let closeIcon = document.querySelector(".close");


button.addEventListener("click", () => {
    if (hamburgerIcon.classList.contains("d-none")) {
        hamburgerIcon.classList.remove("d-none");
        closeIcon.classList.add("d-none");
    } else {
        hamburgerIcon.classList.add("d-none");
        closeIcon.classList.remove("d-none");
    }
});