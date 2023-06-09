function toggleGetInTouch() {
    const getInTouch = document.querySelector('.get_in_touch');
    var elements = document.querySelectorAll('.get_in_touch__reaction');

    if (getInTouch.classList.contains('opened')) {
      getInTouch.classList.remove('opened');
      getInTouch.classList.add('closed');
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('get_in_touch__opened');
      }
    } else {

      getInTouch.classList.remove('closed');
      getInTouch.classList.add('opened');
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('get_in_touch__opened');
      }
    }
  }