const navbar = document.getElementById("navbar");

const animateIn = () => {
  const timeline = new TimelineLite();
  const width = `${navbar.offsetWidth}`;

  timeline.set(navbar, { css: { marginLeft: `-${width}px` }}, 0);
  timeline.fromTo(navbar, 0.3, {
    css: { marginLeft: `-${width}px` }
  }, {
    css: { marginLeft: 0 },
    ease: Power3.easeOut
  }, 0);
  timeline.set(navbar, { css: { marginLeft: 0 }});
};

const animateOut = () => {
  const timeline = new TimelineLite();
  const width = `${navbar.offsetWidth}`;

  timeline.set(navbar, { css: { marginLeft: 0 }}, 0);
  timeline.fromTo(navbar, 0.3, {
    css: { marginLeft: 0 }
  }, {
    css: { marginLeft: `-${width}px` },
    ease: Power3.easeIn
  }, 0);
  timeline.set(navbar, { css: { marginLeft: `-${width}px` }});
};

const isVisible = () => {
  return navbar.offsetLeft > 0;
}

export const hideNavbar = () => {
  if (isVisible()) {
    animateOut();
  }
}

export const setupNavbar = () => {
  const header = document.getElementById("main-header");
  const menuIcon = header.getElementsByClassName("icon--menu")[0];

  menuIcon.onclick = () => {
    if (isVisible()) {
      animateOut();
    } else {
      animateIn();
    }
  }
};
