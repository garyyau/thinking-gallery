const navbar = document.getElementById("navbar");
const breakpoint = 768;

const animateIn = () => {
  const timeline = new TimelineLite();

  const attrStart = {};
  const attrEnd = {};
  if (window.innerWidth < breakpoint) {
    attrStart.marginLeft = 'auto';
    attrStart.marginTop = `-${navbar.offsetHeight}px`;
    attrEnd.marginLeft = 'auto';
    attrEnd.marginTop = 0;
  } else {
    attrStart.marginLeft = `-${navbar.offsetWidth}px`;
    attrStart.marginTop = 'auto';
    attrEnd.marginLeft = 0;
    attrEnd.marginTop = 'auto';
  }

  timeline.set(navbar, { css: attrStart }, 0);
  timeline.fromTo(navbar, 0.3, {
    css: attrStart
  }, {
    css: attrEnd,
    ease: Power3.easeOut
  }, 0);
  timeline.set(navbar, { css: attrEnd });
};

const animateOut = () => {
  const timeline = new TimelineLite();

  const attrStart = {};
  const attrEnd = {};
  if (window.innerWidth < breakpoint) {
    attrStart.marginLeft = 'auto';
    attrStart.marginTop = 0;
    attrEnd.marginLeft = 'auto';
    attrEnd.marginTop = `-${navbar.offsetHeight}px`;
  } else {
    attrStart.marginLeft = 0;
    attrStart.marginTop = 'auto';
    attrEnd.marginLeft = `-${navbar.offsetWidth}px`;
    attrEnd.marginTop = 'auto';
  }

  timeline.set(navbar, { css: attrStart }, 0);
  timeline.fromTo(navbar, 0.3, {
    css: attrStart
  }, {
    css: attrEnd,
    ease: Power3.easeIn
  }, 0);
  timeline.set(navbar, { css: attrEnd });
};

const isVisible = () => {
  if (window.innerWidth < breakpoint) {
    return navbar.offsetTop > 0;
  } else {
    return navbar.offsetLeft > 0;
  }
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
