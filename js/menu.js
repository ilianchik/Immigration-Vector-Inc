function toggleMenu() {
    alert('works!');
    const menuBtn = document.querySelector('.menu__btn');
    
    if (menuBtn.classList.contains('closed')) {
      menuBtn.classList.remove('closed');
      menuBtn.classList.add('opened');
    } else if (menuBtn.classList.contains('opened')) {
      menuBtn.classList.remove('opened');
      menuBtn.classList.add('closed');
    }
  }