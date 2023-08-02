// alert("Hello");
function updateTime() {
  // Los Angeles
  let montrealElement = document.querySelector("#montreal");
  let montrealDateElement = montrealElement.querySelector("span.date");
  let montrealTimeElement = montrealElement.querySelector(".time");
  let montrealTime = moment().tz("America/Toronto");

  montrealDateElement.innerHTML = montrealTime.format("MMMM, dddd Do");
  montrealTimeElement.innerHTML = montrealTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // lyon
  let lyonElement = document.querySelector("#lyon");
  let lyonDateElement = lyonElement.querySelector("span.date");
  let lyonTimeElement = lyonElement.querySelector(".time");
  let lyonTime = moment().tz("Europe/Paris");

  lyonDateElement.innerHTML = lyonTime.format("MMMM, dddd Do");
  lyonTimeElement.innerHTML = lyonTime.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  //   let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityName = event.target.options[event.target.selectedIndex].text;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="${cityName.toLowerCase().replace(" ", "-")}">
    <div>
        <h2>${cityName}</h2>
        <span class="date">${cityTime.format("MMMM, dddd Do")}</span>
    </div>
     <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div> `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
