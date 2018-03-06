const body = document.getElementsByTagName("body");
const mask = document.getElementById("preload-mask");
const brand = mask.getElementsByClassName("brand")[0];

const header = document.getElementById("main-header");
const headerBrand = header.getElementsByClassName("brand")[0];
const breakpoint = 768;

const animateOutLeft = () => {
  const timeline = new TimelineLite();
  const targetBounding = headerBrand.getBoundingClientRect();

  timeline.set(mask, { opacity: 1 }, 0);
  timeline.to(brand, 2, {
    css: {
      left: `${Math.round(targetBounding.x)}px`,
      top: `${Math.round(targetBounding.top + targetBounding.height)}px`
    },
    ease: Power3.easeInOut
  }, 0);

  timeline.to(brand, 2, {
    rotation: -90,
    transformOrigin: "0 0",
    ease: Power3.easeInOut
  }, 0);

  timeline.fromTo(mask, 2, {
    width: `${window.innerWidth}px`,
  }, {
    width: `${header.offsetWidth}px`,
    ease: Power3.easeInOut
  }, 0);

  timeline.to(mask, 0.3, { opacity: 0 });
  timeline.set(mask, { css: { zIndex: -9999 }});
};

const animateOutTop = () => {
  const timeline = new TimelineLite();
  const targetBounding = headerBrand.getBoundingClientRect();

  timeline.set(mask, { opacity: 1 }, 0);
  timeline.to(brand, 2, {
    css: {
      left: `${Math.round(targetBounding.x)}px`,
      top: `${Math.round(targetBounding.top)}px`
    },
    ease: Power3.easeInOut
  }, 0);

  timeline.fromTo(mask, 2, {
    height: `${window.innerHeight}px`,
  }, {
    height: `${header.offsetHeight}px`,
    ease: Power3.easeInOut
  }, 0);

  timeline.to(mask, 0.3, { opacity: 0 });
  timeline.set(mask, { css: { zIndex: -9999 }});
};

export const animateOut = () => {
  const written = brand.getElementsByClassName("brand--written")[0];
  const loader = brand.getElementsByClassName("brand--loader")[0];

  const timeline = new TimelineLite();
  timeline.to(loader, 0.3, { css: { opacity: 0 } }, 0);
  timeline.to(written, 0.3, { css: { opacity: 1 } });

  if (window.innerWidth < breakpoint) {
    animateOutTop();
  } else {
    animateOutLeft();
  }
};
