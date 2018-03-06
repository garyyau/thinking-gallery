import data from '../../data.json';

import { animateModalIn, animateModalOut } from './images-animation.js';
import { hideNavbar } from './navbar.js';
import { animateOut } from './preloader-mask-animation.js';

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

const createImageContainer = (imageData) => {
  const container = document.getElementById("content-container");

  const divElm = document.createElement("div");
  divElm.className = "image-container";
  divElm.style.backgroundImage = `url('${imageData.url}')`;
  divElm.onclick = (event) => {
    updateImageModal(imageData, event);
  }

  container.appendChild(divElm);
};

const loadImageData = () => {
  let counter = 0;

  data.forEach(imageData => {
    counter++;
    const image = new Image();

    image.onload = () => {
      createImageContainer(imageData);
      counter--;
    };
    image.src = imageData.url;
  });

  const setLoadTimer = (interval, attempts) => {
    setTimeout(() => {
      if (counter === 0 || attempts === 0) {
        console.log("finished");
        animateOut();
      } else {
        setLoadTimer(interval, --attempts);
      }
    }, interval);
  };

  setLoadTimer(1000, 90);
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
  loadImageData();
  setupImageModalClose();
};
