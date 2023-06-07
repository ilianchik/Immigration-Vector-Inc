window.addEventListener("scroll", function () {
  var logoContainer = document.querySelector(".logo");
  var logoImg = document.querySelector(".logo__img");
  if (window.scrollY > 0) {
    logoContainer.classList.add("scrolled");
    logoImg.src = "../sourse/img/logo2.png";
  } else {
    logoContainer.classList.remove("scrolled");
    logoImg.src = "../sourse/img/logo.png";
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
window.addEventListener("scroll", function () {
  var textContainer = document.querySelector(".main__left-box2");
  if (window.scrollY > 770) {
    textContainer.classList.add("scrolled");
  } else {
    textContainer.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  var textContainer = document.querySelector(".main__left-box3");
  if (window.scrollY > 1370) {
    textContainer.classList.add("scrolled");
  } else {
    textContainer.classList.remove("scrolled");
  }
});
window.addEventListener("scroll", function () {
  var textContainers = document.querySelectorAll(".box4__container-box");

  textContainers.forEach(function (textContainer) {
    if (window.scrollY > 1900) {
      textContainer.classList.add("scrolled");
    } else {
      textContainer.classList.remove("scrolled");
    }
  });
});
