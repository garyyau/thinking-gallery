const body = document.getElementsByTagName("body");
const container = document.getElementById("modal-container");
const modal = document.getElementById("modal");
const content = document.getElementsByClassName("modal__content")[0];

export const animateModalIn = (element) => {
  const timeline = new TimelineLite();

  const bounding = element.getBoundingClientRect();

  const endHeight = content.offsetHeight;
  const endWidth = content.offsetWidth;

  timeline.set(body, { css: { overflow: 'hidden' }}, 0);
  timeline.set(container, { css: { zIndex: 10 }}, 0);
  timeline.set(content, { opacity: 0 }, 0);

  timeline.set(modal, {
    x: bounding.left,
    y: bounding.top,
    height: `${bounding.height}px`,
    width: `${bounding.width}px`
  }, 0);

  timeline.set(container, { css: { opacity: 1 }}, 0);

  timeline.fromTo(modal, 1, {
    x: bounding.left,
    y: bounding.top,
    height: `${bounding.height}px`,
    width: `${bounding.width}px`
  }, {
    x: (window.innerWidth / 2) - (endWidth / 2),
    y: (window.innerHeight / 2) - (endHeight / 2),
    height: `${endHeight}px`,
    width: `${endWidth}px`,
    ease: Power3.easeInOut
  }, 0.1);

  timeline.fromTo(content, 0.6, {
    opacity: 0
  }, {
    opacity: 1,
    ease: Power3.easeIn
  }, 0.1);
  timeline.set(body, { css: { overflow: 'auto' }});
};

export const animateModalOut = () => {
  const timeline = new TimelineLite();
  timeline.fromTo(container, 0.4, {
    css: { opacity: 1 }
  }, {
    css: { opacity: 0 },
    ease: Power3.easeIn
  }, 0);
  timeline.set(container, { css: { zIndex: -1 }}, 0.4);
};
