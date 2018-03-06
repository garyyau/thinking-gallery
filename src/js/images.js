import data from '../../data.json';

import { animateModalIn, animateModalOut } from './images-animation.js';
import { hideNavbar } from './navbar.js';
import { animateOut } from './preloader-mask-animation.js';

/**
 * Updates the image modal with information based on the image clicked
 *
 * @param  {JSON} imageData Image JSON data
 * @param  {Object} event Click event information of image clicked
 */
const updateImageModal = (imageData, event) => {
  const container = document.getElementById("modal-container");
  const modal = document.getElementById("modal");

  const imgContainer = modal.getElementsByClassName("modal__image")[0];
  const imgElm = imgContainer.getElementsByTagName("img")[0];
  imgElm.src = imageData.url;

  const description = modal.getElementsByClassName("modal__description")[0];
  description.innerHTML = imageData.description;

  hideNavbar();
  animateModalIn(event.srcElement);
};

/**
 * Sets up event listeners to close the image modal when user clicks close
 * or when the user clicks outside of the modal
 */
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

/**
 * Creates an image-container DOM element based on image data and adds it to the
 * content-container
 *
 * @param  {JSON} imageData Image JSON data
 * @return {[type]}           [description]
 */
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

/**
 * Loads the preset image data from JSON and creates the associated DOM elements
 * while ensuring the preload-mask shows until all images are loaded
 */
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
        animateOut();
      } else {
        setLoadTimer(interval, --attempts);
      }
    }, interval);
  };

  setLoadTimer(1000, 90);
};

/**
 * Initialize image DOM elements based on the image data
 */
export const setupImageComponents = () => {
  loadImageData();
  setupImageModalClose();
};
