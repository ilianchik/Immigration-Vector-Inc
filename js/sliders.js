// -------------------------------------------------------------------------------
// SLIDER(READ-MORE)
// -------------------------------------------------------------------------------
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

// -------------------------------------------------------------------------------
// SLIDER(TESTIMONIAL)
// -------------------------------------------------------------------------------
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
      breakpoint: 850,
      settings: {
        dots: false,
        arrows: true,
      },
    },
  ],
});

// -------------------------------------------------------------------------------
// MAIN SLIDER
// -------------------------------------------------------------------------------
let currentContent = 1;
let isAnimating = false; // Додаємо змінну для відстеження стану анімації
function changeContent(newContent) {
  if (newContent !== 1) {
    changeMenuMobileClasses("rolled-up");
  }

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
      toggleGetInTouch(); 
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
