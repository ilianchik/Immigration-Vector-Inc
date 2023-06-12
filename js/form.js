let COUNTIES = [];

fetch('https://restcountries.com/v3.1/all?fields=name')
  .then(response => response.json())
  .then(data => {
    COUNTIES = data.map(country => country.name.common);
    // Update the select element with the country options
    const selectElement = document.getElementById('input_usercountry');
    COUNTIES.forEach(country => {
      const option = document.createElement('option');
      option.value = country;
      option.textContent = country;
      selectElement.appendChild(option);
    });
  })
  .catch(error => {
    console.log('Error fetching countries:', error);
  });


function toggleGetInTouch() {
    const getInTouch = document.querySelector('.get_in_touch');
    var elements = document.querySelectorAll('.get_in_touch__reaction');

    if (getInTouch.classList.contains('opened')) {
      getInTouch.classList.remove('opened');
      getInTouch.classList.add('closed');

      setTimeout(function () {
              for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('get_in_touch__opened');
      }
      }, 1500);

    } else {

      getInTouch.classList.remove('closed');
      getInTouch.classList.add('opened');
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('get_in_touch__opened');
      }
    }
  }

function sendMassege() {
    var messegeWasSent = document.querySelector('.massege_was_sent');
    
    var messageSent = true;
  
    if (messageSent) {
      messegeWasSent.classList.add('opened');
      
      // Get form input values
      var name = document.getElementById('input_username').value;
      var phone = document.getElementById('input_userphone').value;
      var email = document.getElementById('input_useremail').value;
      var country = document.getElementById('input_usercountry').value;
      var message = document.querySelector('.get_in_touch__form textarea').value;
      
      // Create email subject and body
      var subject = 'Contact Form Submission';
      var body = 'Name: ' + name + '\n' +
                 'Phone: ' + phone + '\n' +
                 'Email: ' + email + '\n' +
                 'Country: ' + country + '\n' +
                 'Message: ' + message;
      
      // Create mailto URL with pre-filled information
      var mailtoUrl = 'mailto:toporovska.viktoriia@chnu.edu.ua' +
                      '?subject=' + encodeURIComponent(subject) +
                      '&body=' + encodeURIComponent(body);
      
      // Open user's email client
      window.location.href = mailtoUrl;
    }
  }
  

function sendMassegeClose(){
  var messegeWasSent = document.querySelector('.massege_was_sent');
  messegeWasSent.classList.remove('opened');
}