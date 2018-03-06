/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const navbar = document.getElementById("navbar");
const breakpoint = 768;

/**
 * GSAP timeline for animating the Navigation in
 */
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

/**
 * GSAP timeline for animating the Navigation out
 */
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

/**
 * Check whether the Navigation is currently visible
 *
 * @return {bool} True if the Navigation is visible
 */
const isVisible = () => {
  if (window.innerWidth < breakpoint) {
    return navbar.offsetTop > 0;
  } else {
    return navbar.offsetLeft > 0;
  }
}

/**
 * Hides the Navigation
 */
const hideNavbar = () => {
  if (isVisible()) {
    animateOut();
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = hideNavbar;


/**
 * Sets up an onclick handler onto the header's menu icon to toggle Navigation
 */
const setupNavbar = () => {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = setupNavbar;



/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = [{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/vikings_thumb.jpg","description":"Corus Entertainment | Vikings VR | 360° Immersive Experience"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/Sickkids_Thumbnail_750x600.jpg","description":"Cossette | SickKids Family Tree | Website Development"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/gifted_thumb.jpg","description":"Fox Broadcasting Company | The Gifted Telekinesis X-Perience | OOH Activation"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/LifeisGood_Thumbnail.png","description":"Life Is Good | The Power of Optimism Machine | OOH Activation"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/geostorm_thumb.jpg","description":"Warner Bros | Control The Weather | WebGL Website"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/DenofThieves_Thumbnail.jpg","description":"STX Entertainment | Recruit Your Crew | Promotional Website"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/ghc_thumbnail.jpg","description":"Gourmet House Caviar | Gourmet House Caviar | Brand Refresh &amp; Digital Redesign"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/hitman_thumb.jpg","description":"Lionsgate | The Hitman’s Bodyguard, Get Triggered | The world of top security agencies unveiled"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/cookies_thumb.jpg","description":"Hershey Canada | Farida The Fortune Teller | Website Contest"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/United_Thumbnail.png","description":"United Airlines | Polaris Business Class | VR Activation"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/justiceleague_thumb.jpg","description":"Warner Bros | Join The League | global fan website"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/breadwinner_thumb.jpg","description":"Aircraft Pictures | The Breadwinner | Official Website"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/glentel_thumb.jpg","description":"Glentel | WIRELESSWAVE &amp; TBooth | Site Redesign"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/bumblebee_thumb.jpg","description":"Paramount Pictures | Transformers | Calling All Autobots"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/KMH_thumbnail.png","description":"Kelty Mental Health | #Shared Experiences | Content and Animation"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/Kia_thumb.jpg","description":"Kia Motors | The Red Cube | Projection Mapping"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/SneakyPeteOOH_Thumbail.jpg","description":"Amazon Studios | Sneaky Pete | Lie Detector Test"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/riverdale_thumb.jpg","description":"CW TV | Riverdale | Riverdale Comic Book Creator"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/TBSite_Rings_Thumb.jpg","description":"Paramount Pictures | Rings | Tumblr Page"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/PasstheLove_Thumbnail.jpg","description":"Mondelēz International | Pass The Love | Interactive Game"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/Arrival-Thumbnail.jpg","description":"Paramount Pictures | Arrival | Why Are They Here?"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/CMA_Hero_thumb.jpg","description":"Country Music Assoc. | Country Music Awards | VR Live Stream"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/Sundance-Thumbnail.jpg","description":"Sundance Cinemas | Sundance | Offical Website Redesign"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/snowden_thumb.jpg","description":"Open Road | Snowden | Are you being watched?"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/awesomenesstv_thumb.jpg","description":"AwesomenessTV | Gen Z | Official Website Redesign"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/omo_thumb.jpg","description":"Bravo | Odd Mom Out | Trailer Customizer Experience"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/barbershop3_thumb.jpg","description":"Warner Bros. | Barbershop: The Next Cut | Virtual Barbershop"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/PowerRangers_Thumbnail.jpg","description":"Lionsgate | Power Rangers | 3D Printing"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/Transformers_thumb.jpg","description":"Paramount Pictures | Transformers: The Last Knight | EPK Website"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/milk_thumb.jpg","description":"Dairy Farmers of Canada | Milk Vending Machine | Out of Home Experiential"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/containment_thumb.jpg","description":"The CW | Containment | Are You At Risk Quiz"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/criminal_thumb.jpg","description":"Lionsgate | Criminal | Official Website"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/SITE_thumb.jpg","description":"STX Entertainment | Secret In Their Eyes | Social Media &amp; Official Website"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/shameless_thumb.jpg","description":"Showtime | Shameless | Interactive Colouring Book"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/offtober_thumb2.jpg","description":"BC Hydro | Offtober | Interactive Game"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/RightToPlay_thumb.jpg","description":"Right To Play Canada | Brighten A Childhood. Give Play. | Interactive Storybook"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_PA.jpg","description":"Paramount | Paranormal Activity: | Tumblr Page"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_TheBigShort.jpg","description":"Paramount Pictures | The Big Short | Official Website"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_MockingJay.jpg","description":"Lionsgate | Mockingjay - Part II | Interactive Poster Creator"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_MI5.jpg","description":"Paramount Pictures | Mission: Impossible | Official film site"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Molson.jpg","description":"Molson | I am Canadian | Multi-Language Voice Recognition Beer Fridge"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Jupiter.jpg","description":"Warner Bros. | Caine's Quest | First-Person WebGL Game"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Interstellar.jpg","description":"Paramount Pictures | Interstellar | 4D Oculus Rift Experience"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_TheGift.jpg","description":"STX Entertainment | The Gift | Integrated Digital Campaign"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Porsche.jpg","description":"Porsche | Magic Mirror | Live Vehicle Transformation"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_BigPlay.jpg","description":"Canadian Tire | The Big Play | IIHF Shootout Experience"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_IntoTheStorm.jpg","description":"Warner Bros. | Go #IntoTheStorm | Oculus Rift 4D Experience"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Edge.jpg","description":"Warner Bros. | Join The UDF | Motion Poster Creator"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_AudiA3.jpg","description":"Audi Canada | The New A3 | Audi Website"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Extant.jpg","description":"CBS | Life's Better With Humanichs | Interactive Child Creator"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/izombie_thumb.jpg","description":"The CW | The CW’s iZombie | 3D Printing"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Lemurs.jpg","description":"Warner Bros. | Lemur Leap | Island of Lemurs: Madagascar game"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Kringl.jpg","description":"Make-A-Wish Foundation | Kringl | Augmented Reality App"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_USTA.jpg","description":"USTA | Tennis Makes You... | iOS App @ SXSW"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Getaway.jpg","description":"Warner Bros. | Getaway | Custom Car Creator"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_TomorrowPeople.jpg","description":"The CW | Do You Have The Power? | Kinect Car Activation"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_TimmyMe.jpg","description":"Tim Horton's | Timbits Hockey Camera | TimmyMe App"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Rav4.jpg","description":"Toyota | Rav4 Memory Game | Touchscreen Video Wall"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Coors.jpg","description":"Coors | L'action est sur la glace | Habs Slapshot Activation"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Seawheeze.jpg","description":"Visa | Seawheeze Mantra Wall | Interactive Video Wall"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Interac.jpg","description":"Interac | Interac Flash Challenge | The Amazing Race Digital Kiosk"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Autotrader.jpg","description":"Autotrader | Driving Sales. Driving Numbers. | Interactive Data Visualization"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_FocusST.jpg","description":"Ford | #Crankit | Focus ST @ NXNE"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Coke.jpg","description":"Coca-Cola | Arctic Home | WWF Polar Bear Activation"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Rogers.jpg","description":"Rogers | It's Your Entertainment | Interactive Poster Creator"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_TweetCheer.jpg","description":"Kia | Tweet To Cheer | Whitecaps Twitter Activation"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_JackAstors.jpg","description":"Jack Astor's | Band of Chefs | Facebook Campaign"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_Nissan.jpg","description":"Nissan | Innovation That Excites | 3D Water Projection"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_AdiBoost.jpg","description":"Adidas | Boost Your Run | Integrated Product Launch"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_AudiSlots.jpg","description":"Audi | The Audi Quattro Experience | Slotcar Activation"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_AirCanada.jpg","description":"Air Canada | Picture Paris | Facebook Photo Contest"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_AudiSnowglobe.jpg","description":"Audi | Ode to Quattro | Interactive Audi Snowglobe"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_SoCo.jpg","description":"Southern Comfort | SoCo Photo | Brand Acquisition App"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_AudiHub.jpg","description":"Audi | Audi Hub | Extranet Brand Portal"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_P4G.jpg","description":"People For Good | People For Good | Good Samaritan App"},{"url":"https://s3.amazonaws.com/thinkingbox-website-assets/thumbs/thumb_PlayMPE.jpg","description":"Destiny Media | PlayMPE | Secure Music Distribution App"}]

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_reset_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_reset_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_base_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_layout_css__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_brand_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_brand_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__css_brand_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_header_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__css_header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_modal_css__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_modal_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__css_modal_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__css_navbar_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__css_navbar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__css_navbar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_preload_mask_css__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__css_preload_mask_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__css_preload_mask_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__css_loader_css__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__css_loader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__css_loader_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__js_core_js__ = __webpack_require__(28);
// CSS










// Javascript



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const body = document.getElementsByTagName("body");
const container = document.getElementById("modal-container");
const modal = document.getElementById("modal");
const content = document.getElementsByClassName("modal__content")[0];

/**
 * GSAP timeline for animating the image modal in
 *
 * @param  {HTML Element} element Element that was clicked to trigger the modal
 */
const animateModalIn = (element) => {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = animateModalIn;


/**
 * GSAP timeline for animating the image modal out
 */
const animateModalOut = () => {
  const timeline = new TimelineLite();
  timeline.fromTo(container, 0.4, {
    css: { opacity: 1 }
  }, {
    css: { opacity: 0 },
    ease: Power3.easeIn
  }, 0);
  timeline.set(container, { css: { zIndex: -1 }}, 0.4);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = animateModalOut;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_json__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__images_animation_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preloader_mask_animation_js__ = __webpack_require__(29);






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

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__navbar_js__["b" /* hideNavbar */])();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__images_animation_js__["a" /* animateModalIn */])(event.srcElement);
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
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__images_animation_js__["b" /* animateModalOut */])();
    }
  };

  close.onclick = () => {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__images_animation_js__["b" /* animateModalOut */])();
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

  __WEBPACK_IMPORTED_MODULE_0__data_json___default.a.forEach(imageData => {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__preloader_mask_animation_js__["a" /* animateOut */])();
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
const setupImageComponents = () => {
  loadImageData();
  setupImageModalClose();
};
/* harmony export (immutable) */ __webpack_exports__["a"] = setupImageComponents;



/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar__ = __webpack_require__(0);



(function() {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__images_js__["a" /* setupImageComponents */])();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__navbar__["a" /* setupNavbar */])();
})()


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const body = document.getElementsByTagName("body");
const mask = document.getElementById("preload-mask");
const brand = mask.getElementsByClassName("brand")[0];

const header = document.getElementById("main-header");
const headerBrand = header.getElementsByClassName("brand")[0];
const breakpoint = 768;

/**
 * GSAP timeline for animating the preloader mask out on the left, which is
 * used when the window size is above breakpoint
 */
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

/**
 * GSAP timeline for animating the preloader mask out on the top, which is
 * used when the window size is below breakpoint
 */
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

/**
 * GSAP timeline for animating the preloader out
 */
const animateOut = () => {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = animateOut;



/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);