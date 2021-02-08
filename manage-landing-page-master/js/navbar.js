let navItemsContainer = document.querySelector(".navbar__items-container");
let navIconContainer  = document.querySelector(".navbar__icon-container");
let hamburgerIcon     = document.querySelector(".navbar__hamburger-icon");
let closeIcon         = document.querySelector(".navbar__close-icon");
let body              = document.getElementsByTagName("body")[0];


navIconContainer.addEventListener("click", () => {

    if(closeIcon.classList.contains("js-hide")) {

       closeIcon.classList.remove("js-hide");
       hamburgerIcon.classList.add("js-hide");

       navItemsContainer.classList.add("js-navbar");

       body.classList.add("js-body");

    }else {
       hamburgerIcon.classList.remove("js-hide");
       closeIcon.classList.add("js-hide");

       navItemsContainer.classList.remove("js-navbar");

       body.classList.remove("js-body"); 
    }
       
});

