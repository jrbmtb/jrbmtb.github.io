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
      img.setAttribute('alt', "Picture of " + rentals[i].rentalType);
      h2.textContent = rentals[i].rentalType; //Rental name
      p1.textContent = 'Max. Persons: ' + rentals[i].maxPersons; //Max persons
      h3.textContent = 'Reservation Price:'; //Reservation $
      p2.textContent = 'Half day: ' + rentals[i].reservation.halfDay; //Half day
      p3.textContent = 'Full day: ' + rentals[i].reservation.fullDay; //Full day
      h3s.textContent = 'Walk-In Price: '; //Walk-In $
      p4.textContent = 'Half day: ' + rentals[i].walkIn.halfDay; //Half day
      p5.textContent = 'Full day: ' + rentals[i].walkIn.fullDay; //Full day

      card.appendChild(img); //Rental image
      card.appendChild(h2); //Rental name
      card.appendChild(p1); //Max persons
      card.appendChild(h3); //Reservation $
      card.appendChild(p2); //Half day
      card.appendChild(p3); //Full day
      card.appendChild(h3s); //Walk-In $
      card.appendChild(p4); //Half day
      card.appendChild(p5); //Full day

      document.querySelector('div.rental-info').appendChild(card);

    }
  });
