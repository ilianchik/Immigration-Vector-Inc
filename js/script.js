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
  var scrollSpeed = Math.abs(window.scrollY - (this.prevScrollY || 0));
  var duration = 1.0 / scrollSpeed;

  var textContainer = document.querySelector(".main__left-text");
  textContainer.style.transitionDuration = duration + "s";

  if (window.scrollY > 0) {
    textContainer.classList.add("scrolled");
  } else {
    textContainer.classList.remove("scrolled");
  }

  this.prevScrollY = window.scrollY;
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
  if (window.scrollY > 750) {
    textContainer.classList.add("scrolled");
  } else {
    textContainer.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  var textContainer = document.querySelector(".main__left-box3");
  if (window.scrollY > 1350) {
    textContainer.classList.add("scrolled");
  } else {
    textContainer.classList.remove("scrolled");
  }
});
window.addEventListener("scroll", function () {
  var textContainers = document.querySelectorAll(".box4__container-box");

  textContainers.forEach(function (textContainer) {
    if (window.scrollY > 1850) {
      textContainer.classList.add("scrolled");
    } else {
      textContainer.classList.remove("scrolled");
    }
  });
});

$(".slider").slick({
  arrows: false,
  swipe: true,
  infinite: false,
  swipe: false,
  speed: 400,
  cssEase: "linear",
  fade: true,
});

var slide1 = document.querySelector(".slide1");

// $("#nextSlide").on("click", function () {
//   $(".slider").slick("slickNext");
//   setTimeout(function () {
//     slide1.style.display = "none";
//   }, 3000);
// });

$(".go-to-slide").click(function () {
  var slideIndex = $(this).data("slide");
  $(".slider").slick("slickGoTo", slideIndex);
});

$(".slider-inside").slick({
  arrows: false,
  swipe: true,
  infinite: false,
  speed: 400,
});

$(".slider__inside-next").on("click", function () {
  $(".slider-inside").slick("slickNext");
});

$(".slider__inside-prev").on("click", function () {
  $(".slider-inside").slick("slickPrev");
});

$(".slider-inside").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    if (nextSlide === 0) {
      $(".slider__inside-prev").addClass("inside-arrow--hidden");
    } else {
      $(".slider__inside-prev").removeClass("inside-arrow--hidden");
    }

    if (nextSlide === slick.slideCount - 1) {
      $(".slider__inside-next").addClass("inside-arrow--hidden");
    } else {
      $(".slider__inside-next").removeClass("inside-arrow--hidden");
    }
  }
);
