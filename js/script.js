window.addEventListener("scroll", function () {
  var logoContainer = document.querySelector(".logo");
  if (window.scrollY > 0) {
    logoContainer.classList.add("scrolled");
  } else {
    logoContainer.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  var textContainer = document.querySelector(".main__left-text");
  if (window.scrollY > 0) {
    textContainer.classList.add("scrolled");
  } else {
    textContainer.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  var textContainer = document.querySelector(".left__arrow-button");
  if (window.scrollY > 0) {
    textContainer.classList.add("scrolled");
  } else {
    textContainer.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  var textContainer = document.querySelector(".menu");
  if (window.scrollY > 450) {
    textContainer.classList.add("scrolled");
  } else {
    textContainer.classList.remove("scrolled");
  }
});
