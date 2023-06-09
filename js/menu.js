var SCROLL = 0;
let scrollPosition;
let isAnimatingMenu = false; // Add this variable to track the animation state
const menuBtn = document.querySelector(".menu__btn");
const menuBody = document.querySelector(".menu__nav");
var logoContainer = document.querySelector(".logo");
var logoImg = document.querySelector(".logo__img");
var menuItems = document.querySelectorAll(".menu__nav__item");
function toggleMenu() {
  if (isAnimatingMenu) return; // If the menu is animating, don't run the function

  isAnimatingMenu = true; // Set the animation state to true when the function starts

  const menuBtn = document.querySelector(".menu__btn");
  const menuBody = document.querySelector(".menu__nav");
  var logoContainer = document.querySelector(".logo");
  var logoImg = document.querySelector(".logo__img");
  var menuItems = document.querySelectorAll(".menu__nav__item");

  if (menuBtn.classList.contains("closed")) {
    // open menu
    //set scroll var
    SCROLL = window.scrollY;
    console.log(SCROLL);

    //set time if logo isn`t moved
    if (!logoContainer.classList.contains(".scrolled")) {
      setTimeout(function () {
        menuBtn.classList.remove("closed");
        menuBtn.classList.add("opened");
        menuBody.style.opacity = "1";

        menuBody.classList.remove("closed");
        menuBody.classList.add("opened");
      }, 500);
    } else {
      //same code without timeset
      menuBtn.classList.remove("closed");
      menuBtn.classList.add("opened");
      menuBody.style.opacity = "1";

      menuBody.classList.remove("closed");
      menuBody.classList.add("opened");
    }

    setTimeout(function () {
      menuItems.forEach(function (menuItem) {
        menuItem.classList.add("opened");
      });
    }, 1000);

    //change logo
    if (window.innerWidth >= 848) {
      logoContainer.classList.add("moved");
      logoImg.src = "./sourse/img/logo2.png";
    }
    setTimeout(function () {
      document.body.classList.add("noscroll");
      isAnimatingMenu = false; // Set the animation state to false when the animation is complete
    }, 2500);
  } else if (menuBtn.classList.contains("opened")) {
    //close menu

    // close menu
    menuBtn.classList.remove("opened");
    menuBtn.classList.add("closed");

    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove("opened");
    });

    setTimeout(function () {
      menuBody.style.opacity = "0";
    }, 2000);

    menuBody.classList.remove("opened");
    menuBody.classList.add("closed");

    //logo change
    if (window.innerWidth >= 848) {
      setTimeout(function () {
        logoContainer.classList.remove("moved");
        if (!logoContainer.classList.contains("scrolled")) {
          logoImg.src = "./sourse/img/logo.png";
        }
      }, 500);
    }

    //scroll to
    document.body.classList.remove("noscroll");
    window.scrollTo(0, SCROLL);
    setTimeout(function () {
      isAnimatingMenu = false; // Set the animation state to false when the animation is complete
    }, 1500);
  }
}
const scrollToTop = function () {
  if ("scrollBehavior" in document.documentElement.style) {
    document.documentElement.scrollTo(0, 0);
  } else {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }
};
function changeMenuMobileClasses(type = "closed") {
  const menuBtn = document.querySelector(".menu__mobile__btn");
  const menuBody = document.querySelector(".menu__mobile__nav");
  var menuItems = document.querySelectorAll(".menu__mobile__nav__item");
  const menuContact = document.querySelector(".menu__mobile__nav__contact-us");
  const map = document.querySelector(".map-icon");
  const social = document.querySelector(".sotial_networks");
  var logoContainer = document.querySelector(".logo");
  const icons = document.querySelectorAll(".icon");

  if (window.innerWidth < 850) {
    //margin and oth
    if (type === "rolled-up") {
      document.body.style.marginLeft = "10%";
      // window.scroll(0, 0);
      scrollToTop();
      setTimeout(() => {
        document.body.style.overflowY = "hidden";
        document.documentElement.style.overflowY = "hidden";
      }, 1000);
    } else {
      document.body.style.overflowY = "";
      document.documentElement.style.overflowY = "";

      document.body.style.marginLeft = "";
    }

    let needBeClosed = false; //variable to set true if menu musr be rolled down before closing
    if (type === "closed") {
      logoContainer.style.display = "block";
      changeContent(1);

      if (menuBtn.classList.contains("rolled-up")) {
        needBeClosed = true;
        type = "rolled-down";
      }
    } else {
      setTimeout(() => {
        logoContainer.style.display = "none";
      }, 2000);
    }

    // btn
    menuBtn.classList.remove("closed", "rolled-up", "rolled-down", "opened");
    menuBtn.classList.add(type);
    // nav
    menuBody.classList.remove("closed", "rolled-up", "rolled-down", "opened");
    menuBody.classList.add(type);
    // items with waiting

    setTimeout(function () {
      menuItems.forEach(function (menuItem) {
        menuItem.classList.remove(
          "closed",
          "rolled-up",
          "rolled-down",
          "opened"
        );
        if (type === "rolled-up" || type === "opened") {
          menuItem.classList.add("opened");
        }
      });
      //contact us
      menuContact.classList.remove(
        "closed",
        "rolled-up",
        "rolled-down",
        "opened"
      );
      if (type === "rolled-up" || type === "opened") {
        menuContact.classList.add("opened");
      }
    }, 3000);

    if (needBeClosed) {
      setTimeout(function () {
        changeMenuMobileClasses("closed");
      }, 1000);
    }
  }
}

function contactUs() {
  if (window.innerWidth < 850) {
    window.scrollTo({ top: document.body.scrollHeight });
    changeMenuMobileClasses();
  } else {
    // toggleMenu();

    //close menu

    // close menu
    menuBtn.classList.remove("opened");
    menuBtn.classList.add("closed");

    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove("opened");
    });

    setTimeout(function () {
      menuBody.style.opacity = "0";
    }, 2000);

    menuBody.classList.remove("opened");
    menuBody.classList.add("closed");

    //logo change
    if (window.innerWidth >= 848) {
      setTimeout(function () {
        logoContainer.classList.remove("moved");
        if (!logoContainer.classList.contains("scrolled")) {
          logoImg.src = "./sourse/img/logo.png";
        }
      }, 500);
    }

    //scroll to
    document.body.classList.remove("noscroll");
    window.scrollTo(0, SCROLL);
    setTimeout(function () {
      isAnimatingMenu = false; // Set the animation state to false when the animation is complete
    }, 1500);

    window.scrollTo({ top: document.body.scrollHeight });
  }
}
