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
  let lyonTime = moment().tz("Europe/paris");

  lyonDateElement.innerHTML = lyonTime.format("MMMM, dddd Do");
  lyonTimeElement.innerHTML = lyonTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
