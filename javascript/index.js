function updateTime() {
  // Montreal
  let montrealElement = document.querySelector("#montreal");
  let montrealDateElement = montrealElement.querySelector("span.date");
  let montrealTimeElement = montrealElement.querySelector(".time");
  let montrealTime = moment().tz("America/Toronto");

  montrealDateElement.innerHTML = montrealTime.format("MMMM, dddd Do");
  montrealTimeElement.innerHTML = montrealTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Lyon
  let lyonElement = document.querySelector("#lyon");
  let lyonDateElement = lyonElement.querySelector("span.date");
  let lyonTimeElement = lyonElement.querySelector(".time");
  let lyonTime = moment().tz("Europe/Paris");

  lyonDateElement.innerHTML = lyonTime.format("MMMM, dddd Do");
  lyonTimeElement.innerHTML = lyonTime.format("h:mm:ss [<small>]A[</small>]");

  // Raccoon City
  let RaccoonCityElement = document.querySelector("#raccoon-city");
  let RaccoonCityDateElement = RaccoonCityElement.querySelector("span.date");
  let RaccoonCityTimeElement = RaccoonCityElement.querySelector(".time");
  let RaccoonCityTime = moment().tz("Australia/Perth");

  RaccoonCityDateElement.innerHTML = RaccoonCityTime.format("MMMM, dddd Do");
  RaccoonCityTimeElement.innerHTML = RaccoonCityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Harry Potter
  let hogsmeadeElement = document.querySelector("#hogsmeade");
  let hogsmeadeDateElement = hogsmeadeElement.querySelector("span.date");
  let hogsmeadeTimeElement = hogsmeadeElement.querySelector(".time");
  let hogsmeadeTime = moment().tz("Europe/Dublin");

  hogsmeadeDateElement.innerHTML = hogsmeadeTime.format("MMMM, dddd Do");
  hogsmeadeTimeElement.innerHTML = hogsmeadeTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // LavenderTown
  let lavenderTownElement = document.querySelector("#lavender-town");
  let lavenderTownDateElement = lavenderTownElement.querySelector("span.date");
  let lavenderTownTimeElement = lavenderTownElement.querySelector(".time");
  let lavenderTownTime = moment().tz("Asia/Sakhalin");

  lavenderTownDateElement.innerHTML = lavenderTownTime.format("MMMM, dddd Do");
  lavenderTownTimeElement.innerHTML = lavenderTownTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  //   let cityName = event.target.options[event.target.selectedIndex].text;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="${cityName.toLowerCase().replace(" ", "-")}">
    <div>
        <h2>${cityName}</h2>
        <span class="date">${cityTime.format("MMMM, dddd Do")}</span>
    </div>
     <div class="time">${cityTime.format("h:mm")} <small>${cityTime.format(
    "A"
  )}</small></div>
    </div>
    <br>
    <div class="back"><strong><a href="index.html">Back</a></strong></div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
