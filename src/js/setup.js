import data from '../../data.json'

const updateImageModal = (image) => {
  const container = document.getElementById("modal-container");
  const modal = document.getElementById("modal");

  const imgContainer = modal.getElementsByClassName("modal__image")[0];
  const imgElm = imgContainer.getElementsByTagName("img")[0];
  imgElm.src = image.url;

  const description = modal.getElementsByClassName("modal__description")[0];
  description.innerHTML = image.description;

  const classes = container.className.split(" ");
  const hideIndex = classes.findIndex((className) => (className === "hide"));
  classes.splice(hideIndex, 1);

  container.className = classes.join(" ");
};

const createImageContainers = () => {
  const container = document.getElementById("content-container");

  data.forEach(image => {
    const imgElm = document.createElement("img");
    imgElm.src = image.url;

    const divElm = document.createElement("div");
    divElm.appendChild(imgElm);
    divElm.className = "image-container";
    divElm.onclick = () => { updateImageModal(image); }

    container.appendChild(divElm);
  });
};

const setupImageModalClose = () => {
  const container = document.getElementById("modal-container");
  const modal = document.getElementById("modal");
  const close = modal.getElementsByClassName("modal__close")[0];

  close.onclick = () => {
    const classes = container.className.split(" ");
    classes.push("hide");
    container.className = classes.join(" ");
  }
};

export const setup = () => {
  createImageContainers();
  setupImageModalClose();
};
