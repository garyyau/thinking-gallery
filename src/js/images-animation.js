const body = document.getElementsByTagName("body");
const container = document.getElementById("modal-container");
const modal = document.getElementById("modal");
const content = document.getElementsByClassName("modal__content")[0];

export const animateModalIn = (element) => {
  const timeline = new TimelineLite();

  const bounding = element.getBoundingClientRect();
  const contentBounding = content.getBoundingClientRect();

  timeline.set(body, { css: { overflow: 'hidden' }});
  timeline.set(content, { opacity: 0 }, 0);

  timeline.set(modal, {
    x: bounding.left,
    y: bounding.top,
    height: `${bounding.height}px`,
    width: `${bounding.width}px`
  }, 0);

  timeline.fromTo(modal, 1, {
    x: bounding.left,
    y: bounding.top,
    height: `${bounding.height}px`,
    width: `${bounding.width}px`
  }, {
    x: (window.innerWidth / 2) - (content.offsetWidth / 2),
    y: (window.innerHeight / 2) - (content.offsetHeight / 2),
    height: `${content.offsetHeight}px`,
    width: `${content.offsetWidth}px`,
    ease: Power3.easeInOut
  }, 0);

  timeline.fromTo(content, 0.6, {
    opacity: 0
  }, {
    opacity: 1,
    ease: Power3.easeIn
  }, 0);
  timeline.set(body, { css: { overflow: 'auto' }});
};
