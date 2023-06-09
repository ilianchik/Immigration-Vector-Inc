function toggleGetInTouch() {
    const getInTouch = document.querySelector('.get_in_touch');
    if (getInTouch.classList.contains('opened')) {
      getInTouch.classList.remove('opened');
      getInTouch.classList.add('closed');
    } else {
      getInTouch.classList.remove('closed');
      getInTouch.classList.add('opened');
    }
  }