export const hideElement = (element) => {
  const classes = element.className.split(" ");
  classes.push("hide");
  element.className = classes.join(" ");
};

export const showElement = (element) => {
  const classes = element.className.split(" ");
  const hideIndex = classes.findIndex(className => (className === "hide"));
  classes.splice(hideIndex, 1);
  element.className = classes.join(" ");
};

export const isElementShowing = (element) => {
  const classes = element.className.split(" ");
  return classes.findIndex(className => (className === "hide")) === -1 ? true : false;
};
