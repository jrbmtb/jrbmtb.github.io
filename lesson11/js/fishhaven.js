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
        let townEvents = document.createElement('section');
        let h1 = document.createElement('h1');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');

        h1.textContent = "Main Events";
        p1.textContent = towns[1].events[0];
        p2.textContent = towns[1].events[1]; 
        p3.textContent = towns[1].events[2]; 
        p4.textContent = towns[1].events[3];  

        if (towns[i].name == "Fish Haven") {
        townEvents.appendChild(h1);
        townEvents.appendChild(p1);
        townEvents.appendChild(p2);
        townEvents.appendChild(p3);
        townEvents.appendChild(p4);

        document.querySelector('div.events').appendChild(townEvents);}
     }
});