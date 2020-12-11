// Function for hamburguer menu
function myFunction(x) {
    x.classList.toggle("change");
     document.getElementById("navigation").classList.toggle("hide");
}

// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Rental cards from JSON file
const requestURL = "https://jrbmtb.github.io/scoots-final/data/prices.json";

// fecth() method
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const rentals = jsonObject['rentals'];

    for (let i = 0; i < rentals.length; i++ ) {
      let card = document.createElement('section');
      let img = document.createElement('img'); //Rental image
      let h2 = document.createElement('h2'); //Rental name
      let p1 = document.createElement('p'); //Max persons
      let h3 = document.createElement('h3'); //Reservation $
      let p2 = document.createElement('p'); //Half day
      let p3 = document.createElement('p'); //Full day
      let h3s = document.createElement('h3'); //Walk-In $
      let p4 = document.createElement('p'); //Half day
      let p5 = document.createElement('p'); //Full day

      img.setAttribute('src', "images/" + rentals[i].picture); //Rental image
      h2.textContent = rentals[i].rentalType; //Rental name
      p1.textContent = 'Max. Persons: ' + rentals[i].maxPersons; //Max persons
      h3.textContent = 'Reservation Price:'; //Reservation $
      p2.textContent = 'Half day: ' + rentals[i].reservation.halfDay;
      p3.textContent = 'Full day: ' + rentals[i].reservation.fullDay;

      card.appendChild(img); //Rental image
      card.appendChild(h2); //Rental name

      document.querySelector('div.rental-info').appendChild(card);

    }
  });
