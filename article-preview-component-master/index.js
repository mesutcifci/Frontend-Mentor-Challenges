"use strict"

let shareIcon = document.getElementsByClassName("share-icon")[0];

let container = document.getElementById("container");
let containerStyle = window.getComputedStyle(container);

let iconsOuterContainer = document.getElementById("icons-outer-container");
let iconsInnerContainer = document.getElementById("icons-inner-container");
let articleInfo = document.getElementById("article-info");

function showOrHideIcons(status) {

    if (containerStyle.flexDirection === "row" && iconsInnerContainer.classList.contains("icons-desktop-visible")) {
        iconsInnerContainer.classList.remove("icons-desktop-visible");
        console.log("A");
        return;
    }

    if (containerStyle.flexDirection === "column" && iconsOuterContainer.classList.contains("icons-visible")) {
        iconsOuterContainer.classList.remove("icons-visible");
        iconsInnerContainer.classList.remove("icons-mobile-visible");
        articleInfo.classList.remove("article-info-hidden");
        shareIcon.classList.remove("share-icon-mobile");
        
        if (iconsInnerContainer.classList.contains("icons-desktop-visible")) {
            iconsInnerContainer.classList.remove("icons-desktop-visible");
        }

        console.log("B");
        return;
    }

    if (status && containerStyle.flexDirection === "row") {

        iconsInnerContainer.classList.add("icons-desktop-visible");
        console.log("C");

    } else if (!status && containerStyle.flexDirection === "row") {

        iconsInnerContainer.classList.remove("icons-desktop-visible");
        console.log("D");

    } else if (status && containerStyle.flexDirection === "column") {

        iconsOuterContainer.classList.add("icons-visible");
        iconsInnerContainer.classList.add("icons-mobile-visible");
        articleInfo.classList.add("article-info-hidden");
        shareIcon.classList.add("share-icon-mobile");

        if (iconsInnerContainer.classList.contains("icons-desktop-visible")) {
            iconsInnerContainer.classList.remove("icons-desktop-visible");
        }

        console.log("E");

    } else if (!status && containerStyle.flexDirection === "column") {

        iconsOuterContainer.classList.remove("icons-visible");
        iconsInnerContainer.classList.remove("icons-mobile-visible");
        articleInfo.classList.remove("article-info-hidden");
        shareIcon.classList.remove("share-icon-mobile");

        if (iconsInnerContainer.classList.contains("icons-desktop-visible")) {
            iconsInnerContainer.classList.remove("icons-desktop-visible");
        }

        console.log("F");

    }
}


document.addEventListener("click", (event) => {
    let isShareClicked = shareIcon.contains(event.target);
    if (isShareClicked) {
        showOrHideIcons(true);
    } else {
        showOrHideIcons(false);
    }
})
