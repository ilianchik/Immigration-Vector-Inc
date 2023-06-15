let COUNTIES = [];

fetch("https://restcountries.com/v3.1/all?fields=name")
  .then((response) => response.json())
  .then((data) => {
    COUNTIES = data.map((country) => country.name.common);
    COUNTIES.sort(); // Sort the countries alphabetically by name

    // Update the select element with the sorted country options
    const selectElement = document.getElementById("input_usercountry");
    COUNTIES.forEach((country) => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      selectElement.appendChild(option);
    });
  })
  .catch((error) => {
    console.log("Error fetching countries:", error);
  });

function toggleGetInTouch() {
  const getInTouch = document.querySelector(".get_in_touch");
  var elements = document.querySelectorAll(".get_in_touch__reaction");
  const btn = document.querySelector(".get_in_touch__btn");
  var textContainer = document.querySelector(".hero__text");
  var arrowDown = document.querySelector(".hero__arrow-btn");
  if (getInTouch.classList.contains("opened")) {
    //close
    btn.textContent = "Get in touch";
    textContainer.classList.remove("scrolled");
    arrowDown.classList.remove("scrolled");
    getInTouch.classList.remove("opened");
    getInTouch.classList.add("closed");

    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove("bg-bottom");
    }

    setTimeout(function () {
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("get_in_touch__opened");
      }
    }, 1500);
  } else {
    //open

    btn.textContent = "Close";
    getInTouch.classList.remove("closed");
    getInTouch.classList.add("opened");
    arrowDown.classList.add("scrolled");
    textContainer.classList.add("scrolled");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("get_in_touch__opened");
    }

    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("bg-bottom");
    }
  }
}

function sendMassege() {
  var messegeWasSent = document.querySelector(".massege_was_sent");

  var messageSent = true;

  if (messageSent) {
    messegeWasSent.classList.add("opened");

    // Get form input values
    var name = document.getElementById("input_username").value;
    var phone = document.getElementById("input_userphone").value;
    var email = document.getElementById("input_useremail").value;
    var country = document.getElementById("input_usercountry").value;
    var message = document.querySelector(".get_in_touch__form textarea").value;

    // Create email subject and body
    var subject = "Contact Form Submission";
    var body =
      "Name: " +
      name +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Country: " +
      country +
      "\n" +
      "Message: " +
      message;

    // Create mailto URL with pre-filled information
    var mailtoUrl =
      "mailto:toporovska.viktoriia@chnu.edu.ua" +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    // Open user's email client
    window.location.href = mailtoUrl;
  }
}

function sendMassegeClose() {
  var messegeWasSent = document.querySelector(".massege_was_sent");
  messegeWasSent.classList.remove("opened");
}
