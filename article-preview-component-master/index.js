"use strict";

let shareIcon = document.getElementsByClassName("share-icon")[0];

let container = document.getElementsByClassName("container")[0];
let containerStyle = window.getComputedStyle(container);

let iconsOuterContainer = document.getElementById("icons-outer-container");
let iconsInnerContainer = document.getElementById("icons-inner-container");
let articleInfo = document.getElementById("article-info");

let elements = [];
let classNames = [];

function addClass(elements, classNames) {
  if (!(elements instanceof Array)) {
    elements.classList.add(classNames);
    return;
  }

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add(classNames[i]);
  }
}

function removeClass(elements, classNames) {
  if (!(elements instanceof Array)) {
    elements.classList.remove(classNames);
    return;
  }

  for (let element of elements) {
    for (let name of classNames) {
      element.classList.remove(name);
    }
  }
}

function showOrHideIcons(status) {
  if (
    containerStyle.flexDirection === "row" &&
    iconsInnerContainer.classList.contains("icons-desktop-visible")
  ) {
    removeClass(iconsInnerContainer, "icons-desktop-visible");
    return;
  }

  if (
    containerStyle.flexDirection === "column" &&
    iconsOuterContainer.classList.contains("icons-visible")
  ) {
    elements = [
      iconsOuterContainer,
      iconsInnerContainer,
      articleInfo,
      shareIcon,
    ];
    classNames = [
      "icons-visible",
      "icons-mobile-visible",
      "article-info-hidden",
      "share-icon-mobile",
    ];
    removeClass(elements, classNames);

    if (iconsInnerContainer.classList.contains("icons-desktop-visible")) {
      removeClass(iconsInnerContainer, "icons-desktop-visible");
    }
    return;
  }

  if (status && containerStyle.flexDirection === "row") {
    addClass(iconsInnerContainer, "icons-desktop-visible");
  } else if (!status && containerStyle.flexDirection === "row") {
    removeClass(iconsInnerContainer, "icons-desktop-visible");
  } else if (status && containerStyle.flexDirection === "column") {
    elements = [
      iconsOuterContainer,
      iconsInnerContainer,
      articleInfo,
      shareIcon,
    ];
    classNames = [
      "icons-visible",
      "icons-mobile-visible",
      "article-info-hidden",
      "share-icon-mobile",
    ];

    addClass(elements, classNames);

    if (iconsInnerContainer.classList.contains("icons-desktop-visible")) {
      removeClass(iconsInnerContainer, "icons-desktop-visible");
    }
  } else if (!status && containerStyle.flexDirection === "column") {
    elements = [
      iconsOuterContainer,
      iconsInnerContainer,
      articleInfo,
      shareIcon,
    ];
    classNames = [
      "icons-visible",
      "icons-mobile-visible",
      "article-info-hidden",
      "share-icon-mobile",
    ];
    removeClass(elements, classNames);

    if (iconsInnerContainer.classList.contains("icons-desktop-visible")) {
      removeClass(iconsInnerContainer, "icons-desktop-visible");
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
});
