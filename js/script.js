// -------------------------------------------------------------------------------
// SMOOTHE SCROLL
// -------------------------------------------------------------------------------
const allLinks = document.querySelectorAll("a");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // If the link is an external link or a different page, let the browser handle it
    if (!href.startsWith("#")) {
      return;
    }

    // Prevent default behavior for in-page links
    e.preventDefault();

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

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

// -------------------------------------------------------------------------------
// HEADER
// -------------------------------------------------------------------------------
if (window.innerWidth <= 848) {
  const sectionHeroEl = document.querySelector(".slider");
  const header = document.querySelector(".map-icon");
  const social = document.querySelector(".sotial_networks");
  const menuBtn = document.querySelector(".menu__mobile__btn");
  const menuLine = document.querySelectorAll(".btn__line");
  const icons = document.querySelectorAll(".icon");
  const icons2 = document.querySelectorAll(".icon__link");
  const logoForm = document.querySelector(".logo__form");
  const form = document.querySelector(".get_in_touch__form");

  const getInTouchBtn = document.querySelector(".get_in_touch__btn");

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);

      if (ent.isIntersecting === false) {
        logoForm.style.display = "block";
        header.classList.add("header");
        social.classList.add("social_network--header");
        form.style.width = "85%";
        getInTouchBtn.style.marginRight = "3%";

        icons.forEach((icon) => {
          icon.classList.add("black");
        });
        icons2.forEach((icon) => {
          icon.classList.add("black");
        });
        menuBtn.classList.add("black");
      } else if (ent.isIntersecting === true) {
        logoForm.style.display = "none";
        header.classList.remove("header");
        social.classList.remove("social_network--header");
        menuBtn.classList.remove("black");
        form.style.width = "75%";
        getInTouchBtn.style.marginRight = "6.3%";

        icons.forEach((icon) => {
          icon.classList.remove("black");
        });
        icons2.forEach((icon) => {
          icon.classList.remove("black");
        });
        menuBtn.classList.remove("remove");
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
// -------------------------------------------------------------------------------
// ACCORDION
// -------------------------------------------------------------------------------
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
