import { hideElement, isElementShowing, showElement } from './utils.js';

const navbar = document.getElementById("navbar");

export const hideNavbar = () => {
  if (isElementShowing(navbar)) {
    hideElement(navbar);
  }
}

export const setupNavbar = () => {
  const header = document.getElementById("main-header");
  const menuIcon = header.getElementsByClassName("icon--menu")[0];

  menuIcon.onclick = () => {
    if (isElementShowing(navbar)) {
      hideElement(navbar);
    } else {
      showElement(navbar);
    }
  }
};
