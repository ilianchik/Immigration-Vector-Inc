function toggleMenu() {

    const menuBtn = document.querySelector('.menu__btn');

    const menuBody = document.querySelector('.menu__nav');

    var logoContainer = document.querySelector(".logo");
    var logoImg = document.querySelector(".logo__img");

    if (menuBtn.classList.contains('closed')) {
      setTimeout(function() {
      menuBtn.classList.remove('closed');
      menuBtn.classList.add('opened');
      
      menuBody.classList.remove('closed');
      menuBody.classList.add('opened');
      }, 700);
      
      logoContainer.classList.add("scrolled");
      logoImg.src = "../sourse/img/logo2.png";

      document.body.style.overflow = 'hidden';

    } else if (menuBtn.classList.contains('opened')) {
      menuBtn.classList.remove('opened');
      menuBtn.classList.add('closed');

      menuBody.classList.remove('opened');
      menuBody.classList.add('closed');

      setTimeout(function() {
        logoContainer.classList.remove("scrolled");
        logoImg.src = "../sourse/img/logo.png";
      }, 700); 


      document.body.style.overflow = 'auto';
    }
  }