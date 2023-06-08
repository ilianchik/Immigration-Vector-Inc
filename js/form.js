function toggleGetInTouch() {
    const getInTouch = document.querySelector('.get_in_touch');
    if (getInTouch.classList.contains('opened')) {
      getInTouch.classList.remove('opened');
    } else {
      getInTouch.classList.add('opened');
    }
  }