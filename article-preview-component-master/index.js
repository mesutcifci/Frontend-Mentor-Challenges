"use strict"


let shareIcon = document.getElementById("share-icon");
let socialIconContainer = document.getElementsByClassName("social-icon-container-hidden")[0];

function showAndHideIcons(status) {

    if(socialIconContainer.classList.length > 1) {
        socialIconContainer.classList.remove("social-icon-container-visible");
        return;
    }

    if(status) {
        socialIconContainer.classList.add("social-icon-container-visible");
    }else {
        socialIconContainer.classList.remove("social-icon-container-visible")
    }
    
}




document.addEventListener("click", (event) => {
    let isShareClicked = shareIcon.contains(event.target);
    if(isShareClicked) {
        showAndHideIcons(true);
    }else {
        showAndHideIcons(false);
    }
})