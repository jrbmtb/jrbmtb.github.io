// Five-day forecast
const myDate = new Date();
const todayDayNumber = myDate.getDay();

const myWeekday = new Array(7);
myWeekday[0] = "Sunday";
myWeekday[1] = "Monday";
myWeekday[2] = "Tuesday";
myWeekday[3] = "Wednesday";
myWeekday[4] = "Thursday";
myWeekday[5] = "Friday";
myWeekday[6] = "Saturday";

// Path for weather API
const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=3cf0eab945c42bbfe8402cb85ae63443&units=imperial";

fetch(apiURL) 
  .then((response) => response.json())
  .then((weatherInfo) => {
       console.log(weatherInfo);

       let mylist = weatherInfo.list;
       let forecastDayNumber = todayDayNumber;

       // Loop through each day:
       for (i = 0; i < mylist.length; i++) {
    
          let time = mylist[i].dt_txt;
          if (time.includes('18:00:00')) {
              console.log("Found an entry with 18:00:00 in the time. It was report "+i+"from the mylist of 40");
              
              forecastDayNumber += 1;
              if (forecastDayNumber === 7) {forecastDayNumber = 0;}

              let dayName = document.createElement("span");
              dayName.textContent = myWeekday[forecastDayNumber];

              let theTemp = document.createElement("span");
              theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0" + "F";

              let iconcode = weatherInfo.list[i].weather[0].icon;
              let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
              let theIcon = document.createElement("img");
              theIcon.src = iconPath;

              let theDay = document.createElement("div");
              theDay.appendChild(dayName);
              theDay.appendChild(theIcon);
              theDay.appendChild(theTemp);

              document.getElementById('weatherforecast').appendChild(theDay);

              //Get the data for the weather summary on the top banner
              document.getElementById('current-condition').textContent = "Currently: " + weatherInfo.list[i].weather[i].description;
              document.getElementById('current-temp').textContent = "High: " + weatherInfo.list[i].main.temp + "\xB0" + "F";
              
              //-------------------------------------MATH FOR WINDCHILL-----------------------------------------//
              //------------------------------------------------------------------------------------------------//
              document.getElementById('wind-chill').textContent = "Wind Chill: " // Wind Chill
              
              let windChill = 35.74 + (0.6215 * theTemp) - (35.75 * Math.pow(weatherInfo.list[i].wind.speed, 0.16)) + 
              (0.4275 * theTemp * Math.pow(weatherInfo.list[i].wind.speed, 0.16));
              windChill = Math.round(windChill);
              
              if(theTemp <= 50 && weatherInfo.list[i].wind.speed > 3) {
                  document.getElementById("wind-chill").textContent = "Wind Chill: "+windChill+"\xB0F";
              } else {
                  document.getElementById("wind-chill").textContent = "No wind chill today!";
              };
              //------------------------------------------------------------------------------------------------//

              document.getElementById('humidity').textContent = "Humidity: " + weatherInfo.list[i].main.humidity + "%";
              document.getElementById('wind-speed').textContent  = "Wind Speed: " + weatherInfo.list[i].wind.speed + "mph";
              
            }
        }
});