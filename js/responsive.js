function updateImageSrc() {
  const imageLogo = document.getElementById("responsive-image");
  const imageArrow = document.getElementById("responsive-image2");
  const screenWidth = window.innerWidth;

  if (screenWidth <= 850) {
    imageLogo.src = "sourse/img/logo2.png";
    imageArrow.src = "sourse/img/arrow-down2.png";
  } else {
    imageLogo.src = "sourse/img/logo.png";
    imageArrow.src = "sourse/img/arrow-down.svg";
  }
}

// Виклик функції при завантаженні сторінки
updateImageSrc();

// Виклик функції при зміні розміру вікна
window.addEventListener("resize", updateImageSrc);
