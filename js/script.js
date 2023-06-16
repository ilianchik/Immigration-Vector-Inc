// window.addEventListener("scroll", function () {
//   var logoContainer = document.querySelector(".logo");
//   var logoImg = document.querySelector(".logo__img");

//   const menuBtn = document.querySelector(".menu__btn");

//   if (window.scrollY > 0) {
//     logoContainer.classList.add("scrolled");
//     logoImg.src = "sourse/img/logo2.png";
//   } else {
//     logoContainer.classList.remove("scrolled");

//     if (!menuBtn.classList.contains("opened")) {
//       logoImg.src = "sourse/img/logo.png";
//     }
//   }
// });
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

// $(".slider").slick({
//   arrows: false,
//   swipe: true,
//   infinite: true,
//   swipe: false,
//   speed: 400,
//   ltr: true,

//   // cssEase: "linear",
//   // fade: true,
// });

var slide1 = document.querySelector(".slide1");

// $("#nextSlide").on("click", function () {
//   $(".slider").slick("slickNext");
//   setTimeout(function () {
//     slide1.style.display = "none";
//   }, 3000);
// });

// $(".go-to-slide").click(function () {
//   var slideIndex = $(this).data("slide");
//   $(".slider").slick("slickGoTo", slideIndex);
// });

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

let currentContent = 1;
let isAnimating = false; // Додаємо змінну для відстеження стану анімації

function changeContent(newContent) {
  changeMenuMobileClasses("rolled-up");

  if (currentContent === newContent || isAnimating) return; // Перевіряємо, чи триває анімація

  isAnimating = true; // Встановлюємо стан анімації в true

  const oldContentElement = document.getElementById(`content${currentContent}`);
  const newContentElement = document.getElementById(`content${newContent}`);

  oldContentElement.style.transform = "translateX(-100%)";
  newContentElement.style.transform = "translateX(0)";

  const getInTouch = document.querySelector(".get_in_touch");
  var elements = document.querySelectorAll(".get_in_touch__reaction");
  const btn = document.querySelector(".get_in_touch__btn");

  if (getInTouch.classList.contains("opened")) {
    btn.textContent = "Get in touch";

    getInTouch.classList.remove("opened");
    getInTouch.classList.add("closed");

    setTimeout(function () {
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("get_in_touch__opened");
      }
    }, 1500);
  }

  setTimeout(() => {
    // Видаляємо клас 'active' зі старого контенту
    oldContentElement.classList.remove("slide--active");
  }, 650);

  setTimeout(() => {
    // Додаємо клас 'active' до нового контенту
    newContentElement.classList.add("slide--active");
  }, 750);
  // Збільшено затримку перед переміщенням старого контенту назад вправо
  setTimeout(() => {
    oldContentElement.style.transition = "background-position 2s";
    oldContentElement.style.transform = "translateX(100%)";

    // Відновлюємо анімацію для наступного разу
    setTimeout(() => {
      oldContentElement.style.transition =
        "transform 1s, background-position 2s";
    }, 50);
  }, 1000);

  // Встановлюємо стан анімації в false після завершення анімації
  setTimeout(() => {
    isAnimating = false;
  }, 1000);

  currentContent = newContent;
}
$(".testimonial__slider").slick({
  arrows: false,
  swipe: true,
  infinite: true,
  speed: 400,
  autoplay: false,
  autoplaySpeed: 3000,
  dots: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        dots: false,
        arrows: true,
      },
    },
  ],
});

const allLinks = document.querySelectorAll("a");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      const rect = sectionEl.getBoundingClientRect();
      const yOffset = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const percentageOffset = windowHeight * 0.33; // Замініть 0.1 на потрібний відсоток
      const desiredOffset = yOffset + rect.top - percentageOffset;

      window.scrollTo({ top: desiredOffset, behavior: "smooth" });
    }
  });
});
if (window.innerWidth <= 848) {
  const sectionHeroEl = document.querySelector(".slider");
  const header = document.querySelector(".map-icon");
  const map = document.querySelector(".ph-light");
  const social = document.querySelector(".sotial_networks");
  const menuText = document.querySelector(".menu__mobile__btn");
  const menuLine = document.querySelectorAll(".btn__line");

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);

      if (ent.isIntersecting === false) {
        header.classList.add("header");
        map.style.color = "black";
        social.style.color = "black";
        social.classList.add("social_network--header");
        menuText.style.color = "black";
        for (var i = 0; i < menuLine.length; i++) {
          menuLine[i].style.backgroundColor = "black";
        }
      }

      if (ent.isIntersecting === true) {
        header.classList.remove("header");
        map.style.color = "white";
        social.style.color = "white";
        social.classList.remove("social_network--header");

        menuText.style.color = "white";
        for (var i = 0; i < menuLine.length; i++) {
          menuLine[i].style.backgroundColor = "white";
        }
      }
    },
    {
      // In the viewport
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );
  obs.observe(sectionHeroEl);
}

var accordionItems = document.getElementsByClassName("accordion-item");

// Додайте обробник події для кожного елемента акордеону
for (var i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener("click", function () {
    // Перевірте, чи вміст акордеону прихований або видимий
    var content = this.querySelector(".accordion-content");
    var isHidden = content.style.maxHeight === "0px";

    // Змініть висоту вмісту акордеону в залежності від його поточного стану
    if (isHidden) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0px";
    }
  });
  // Встановіть початкове значення `maxHeight` для вмісту акордеону
  var content = accordionItems[i].querySelector(".accordion-content");
  content.style.maxHeight = "0px";
}
$(document).ready(function () {
  $(".accordion-prev").click(function () {
    $(".slider-inside").slick("slickPrev");
  });

  $(".accordion-next").click(function () {
    $(".slider-inside").slick("slickNext");
  });
});

$(document).ready(function () {
  $(".accordion-prev").click(function (event) {
    event.stopPropagation();
  });
});
$(document).ready(function () {
  $(".accordion-next").click(function (event) {
    event.stopPropagation();
  });
});
