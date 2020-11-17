// JSON File for cities info
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

// fecth() method
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2'); //Town name
        let p = document.createElement('p'); //Motto
        let p2 = document.createElement('p'); //Year founded
        let p3 = document.createElement('p'); //Population
        let p4 = document.createElement('p'); //Avg rainfall
        let img = document.createElement('img'); //Town photo

        h2.textContent = towns[i].name; //Town name
        p.textContent = towns[i].motto; //Motto
        p2.textContent = 'Year Founded: ' + towns[i].yearFounded; //Year founded
        p3.textContent = 'Population: ' + towns[i].currentPopulation; //Population
        p4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall; //Avg rainfall
        img.setAttribute('src', towns[i].photo, alt = towns[i].name); //Town photo

        card.appendChild(h2); //Town name
        card.appendChild(p); //Motto
        card.appendChild(p2); //Year founded
        card.appendChild(p3); //Population
        card.appendChild(p4); //Avg rainfall
        card.appendChild(img); //Town photo

        document.querySelector('div.cards').appendChild(card);
     }
});