function toggleMenu() {

    const menuBtn = document.querySelector('.menu__btn');
    var logoContainer = document.querySelector(".logo");
    var logoImg = document.querySelector(".logo__img");
    const menuBody = document.querySelector('.menu__nav');
    
    if (menuBtn.classList.contains('closed')) {
      menuBtn.classList.remove('closed');
      menuBtn.classList.add('opened');

      logoContainer.classList.add("scrolled");
      logoImg.src = "../sourse/img/logo2.png";
      
      menuBody.classList.remove('closed');
      menuBody.classList.add('opened');

    } else if (menuBtn.classList.contains('opened')) {
      menuBtn.classList.remove('opened');
      menuBtn.classList.add('closed');

      logoContainer.classList.remove("scrolled");
      logoImg.src = "../sourse/img/logo.png";

      menuBody.classList.remove('opened');
      menuBody.classList.add('closed');
    }
  }