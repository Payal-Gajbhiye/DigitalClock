window.addEventListener("load", calculateTime);

function calculateTime() {
  let date = new Date();
  let getNumber = date.getDay();
  let getHours = date.getHours();
  let getMinutes = date.getMinutes();
  let ampm = getHours >= 12 ? "PM" : "AM";
  let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  getHours = getHours % 12;
  getHours = getHours ? getHours : "12";
  getHours = getHours < 10 ? "0" + getHours : getHours;
  getMinutes = getMinutes < 10 ? "0" + getMinutes : getMinutes;
  document.getElementById("day").innerHTML = dayNames[getNumber];
  document.getElementById("hour").innerHTML = getHours;
  document.getElementById("min").innerHTML = getMinutes;
  document.getElementById("ampm").innerHTML = ampm;

  setTimeout(calculateTime, 200);
}
calculateTime();
