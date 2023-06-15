var SCROLL = 0;
let scrollPosition;
let isAnimatingMenu = false; // Add this variable to track the animation state

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


function toggleMenuMobile() {
  if (isAnimatingMenu) return;
  
  const menuBtn = document.querySelector(".menu__mobile__btn");

  if (menuBtn.classList.contains("closed")){
    menuBtn.classList.remove("closed");
    menuBtn.classList.add("opened");
    
  }else{
    menuBtn.classList.remove("opened");
    menuBtn.classList.add("closed");

  }

}