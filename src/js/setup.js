import data from '../../data.json'

const updateImageModal = (image) => {
  const container = document.getElementById("modal-container");
  const modal = document.getElementById("modal");
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

export const setup = () => {
  createImageContainers();
};
