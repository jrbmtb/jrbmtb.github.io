// JSON File for prophets cards
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// fecth() method
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2'); //Fullname
        let p = document.createElement('p'); //Birth date
        let p2 = document.createElement('p'); //Place of birth
        let img = document.createElement('img'); //Prophet img

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname; //Fullname
        p.textContent = 'Date of Birth: ' + prophets[i].birthdate; //Birth date
        p2.textContent = 'Place of Birth: ' + prophets[i].birthplace; //Place of birth
        img.setAttribute('src', prophets[i].imageurl, alt = prophets[i].name + ' ' + 
        prophets[i].lastname + prophets[i].order); //Prophet img

        card.appendChild(h2); //Fullname
        card.appendChild(p); //Birth date
        card.appendChild(p2); //Place of birth
        card.appendChild(img); //Prophet img

        document.querySelector('div.cards').appendChild(card);
    }
});


