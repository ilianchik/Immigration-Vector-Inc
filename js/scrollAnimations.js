// -------------------------------------------------------------------------------
// LOGO SCROLL ANIMATION
// -------------------------------------------------------------------------------
if (window.innerWidth >= 848) {
  window.addEventListener("scroll", function () {
    var logoContainer = document.querySelector(".logo");
    var logoImg = document.querySelector(".logo__img");

    const menuBtn = document.querySelector(".menu__btn");

    if (window.scrollY > 0) {
      logoContainer.classList.add("scrolled");
      logoImg.src = "sourse/img/logo2.png";
    } else {
      logoContainer.classList.remove("scrolled");

      if (!menuBtn.classList.contains("opened")) {
        logoImg.src = "sourse/img/logo.png";
      }
    }
  });
}

// -------------------------------------------------------------------------------
// HERO-SECTION SCROLL ANIMATION
// -------------------------------------------------------------------------------
window.addEventListener("scroll", function () {
  var scrollSpeed = Math.abs(window.scrollY - (this.prevScrollY || 0));
  var duration = 1.0 / scrollSpeed;

  var textContainer = document.querySelector(".hero__text");
  var heroTextMobile = document.querySelector(".hero__text--mobile");

  textContainer.style.transitionDuration = duration + "s";

  if (window.scrollY > 50) {
    textContainer.classList.add("scrolled");
    heroTextMobile.classList.add("scrolled");
  } else {
    textContainer.classList.remove("scrolled");
    heroTextMobile.classList.remove("scrolled");
  }

  this.prevScrollY = window.scrollY;
});

window.addEventListener("scroll", function () {
  var textContainer = document.querySelector(".hero__arrow-btn");
  var heroArrowMobile = document.querySelector(".hero__arrow-btn--mobile");
  if (window.scrollY > 50) {
    textContainer.classList.add("scrolled");
    heroArrowMobile.classList.add("scrolled");
  } else {
    textContainer.classList.remove("scrolled");
    heroArrowMobile.classList.remove("scrolled");
  }
});

// -------------------------------------------------------------------------------
// MENU-BTN SCROLL ANIMATION
// -------------------------------------------------------------------------------
if (window.innerWidth >= 848) {
  window.addEventListener("scroll", function () {
    var textContainer = document.querySelector(".menu");
    var windowHeight = window.innerHeight;
    var percentageOffset = windowHeight * 0.55;

    const menuBtn = document.querySelector(".menu__btn");

    if (!menuBtn.classList.contains("opened")) {
      if (window.scrollY > percentageOffset) {
        textContainer.classList.add("scrolled");
      } else {
        textContainer.classList.remove("scrolled");
      }
    }
  });
}

// -------------------------------------------------------------------------------
// TESTIMONIAL-SECTION SCROLL ANIMATION
// -------------------------------------------------------------------------------
if (window.innerWidth >= 848) {
  window.addEventListener("scroll", function () {
    var textContainer = document.querySelector(".testimonial");
    var windowHeight = window.innerHeight;
    var percentageOffset = windowHeight * 1;
    if (window.scrollY > percentageOffset) {
      textContainer.classList.add("scrolled");
    } else {
      textContainer.classList.remove("scrolled");
    }
  });
}

// -------------------------------------------------------------------------------
// SERVICES-SECTION SCROLL ANIMATION
// -------------------------------------------------------------------------------
if (window.innerWidth >= 848) {
  window.addEventListener("scroll", function () {
    var textContainer = document.querySelector(".services");
    var windowHeight = window.innerHeight;
    var percentageOffset = windowHeight * 1.9;
    if (window.scrollY > percentageOffset) {
      textContainer.classList.add("scrolled");
    } else {
      textContainer.classList.remove("scrolled");
    }
  });
}

// -------------------------------------------------------------------------------
// ADVANTAGES-SECTION SCROLL ANIMATION
// -------------------------------------------------------------------------------
if (window.innerWidth >= 848) {
  window.addEventListener("scroll", function () {
    var textContainers = document.querySelectorAll(".advantages__content-box");
    var windowHeight = window.innerHeight;
    var percentageOffset = windowHeight * 2.2;
    textContainers.forEach(function (textContainer) {
      if (window.scrollY > percentageOffset) {
        textContainer.classList.add("scrolled");
      } else {
        textContainer.classList.remove("scrolled");
      }
    });
  });
}
if (window.innerWidth >= 848) {
  window.addEventListener("scroll", function () {
    var icons = document.querySelectorAll(".advantages__img");
    var windowHeight = window.innerHeight;
    var percentageOffset = windowHeight * 2.2;
    icons.forEach(function (icon) {
      if (window.scrollY > percentageOffset) {
        icon.classList.add("advantages__img--open");
      } else {
        icon.classList.remove("advantages__img--open");
      }
    });
  });
}

// -------------------------------------------------------------------------------
// ABOUT-SECTION SCROLL ANIMATION
// -------------------------------------------------------------------------------
if (window.innerWidth >= 848) {
  window.addEventListener("scroll", function () {
    var aboutContainers = document.querySelectorAll(".about__item");
    var windowHeight = window.innerHeight;
    var percentageOffset = windowHeight * 3.8;
    aboutContainers.forEach(function (aboutContainer) {
      if (window.scrollY > percentageOffset) {
        aboutContainer.classList.add("scrolled");
      } else {
        aboutContainer.classList.remove("scrolled");
      }
    });
  });
}
