import data from '../../data.json';

import { animateModalIn, animateModalOut } from './images-animation.js';
import { hideNavbar } from './navbar.js';

const updateImageModal = (image, event) => {
  const container = document.getElementById("modal-container");
  const modal = document.getElementById("modal");

  const imgContainer = modal.getElementsByClassName("modal__image")[0];
  const imgElm = imgContainer.getElementsByTagName("img")[0];
  imgElm.src = image.url;

  const description = modal.getElementsByClassName("modal__description")[0];
  description.innerHTML = image.description;

  hideNavbar();
  animateModalIn(event.srcElement);
};

const createImageContainers = () => {
  const container = document.getElementById("content-container");

  data.forEach(image => {
    const divElm = document.createElement("div");
    divElm.className = "image-container";
    divElm.style.backgroundImage = `url('${image.url}')`;
    divElm.onclick = (event) => {
      updateImageModal(image, event);
    }

    container.appendChild(divElm);
  });
};

const setupImageModalClose = () => {
  const container = document.getElementById("modal-container");
  const modal = document.getElementById("modal");
  const close = modal.getElementsByClassName("modal__close")[0];

  container.onclick = (event) => {
    if (event.target.id === "modal-container") {
      animateModalOut();
    }
  };

  close.onclick = () => {
    animateModalOut();
  };
};

export const setupImageComponents = () => {
  createImageContainers();
  setupImageModalClose();
};
