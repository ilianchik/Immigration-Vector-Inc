function toggleMenu() {
  const menuBtn = document.querySelector(".menu__btn");

  const menuBody = document.querySelector(".menu__nav");

  var logoContainer = document.querySelector(".logo");
  var logoImg = document.querySelector(".logo__img");

  if (menuBtn.classList.contains("closed")) {
    setTimeout(function () {
      menuBtn.classList.remove("closed");
      menuBtn.classList.add("opened");
      menuBody.style.opacity = "1";

      menuBody.classList.remove("closed");
      menuBody.classList.add("opened");
    }, 500);

    logoContainer.classList.add("moved");
    logoImg.src = "./sourse/img/logo2.png";

    document.body.style.overflow = "hidden";
  } else if (menuBtn.classList.contains("opened")) {
    menuBtn.classList.remove("opened");
    menuBtn.classList.add("closed");
    setTimeout(function () {
      menuBody.style.opacity = "0";
    }, 2000);
    menuBody.classList.remove("opened");
    menuBody.classList.add("closed");

    setTimeout(function () {
      logoContainer.classList.remove("moved");
      if (!logoContainer.classList.contains("scrolled")) {
        logoImg.src = "./sourse/img/logo.png";
      }
    }, 500);

    document.body.style.overflow = "auto";
  }
}
