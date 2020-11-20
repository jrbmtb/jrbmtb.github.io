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

              let highTemp

              let theDay = document.createElement("div");
              theDay.appendChild(dayName);
              theDay.appendChild(theIcon);
              theDay.appendChild(theTemp);

              let theSummary = document.createElement("section");


              document.getElementById('weatherforecast').appendChild(theDay);
            }
        }
});