var SCROLL = 0;
let scrollPosition;

function toggleMenu() {
  const menuBtn = document.querySelector(".menu__btn");

  const menuBody = document.querySelector(".menu__nav");

  var logoContainer = document.querySelector(".logo");
  var logoImg = document.querySelector(".logo__img");

  if (menuBtn.classList.contains("closed")) { // open menu
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

        //change logo
        logoContainer.classList.add("moved");
        logoImg.src = "./sourse/img/logo2.png";

        setTimeout(function () {
          document.body.classList.add("noscroll");
        }, 2000);
        
  } else if (menuBtn.classList.contains("opened")) { //close menu

    // close menu
        menuBtn.classList.remove("opened");
        menuBtn.classList.add("closed");

        setTimeout(function () {
          menuBody.style.opacity = "0";
        }, 2000);

        menuBody.classList.remove("opened");
        menuBody.classList.add("closed");

        //logo change
        setTimeout(function () {
          logoContainer.classList.remove("moved");
          if (!logoContainer.classList.contains("scrolled")) {
            logoImg.src = "./sourse/img/logo.png";
          }
        }, 500);

        //scroll to
        document.body.classList.remove("noscroll");
        window.scrollTo(0, SCROLL);
      }
}
