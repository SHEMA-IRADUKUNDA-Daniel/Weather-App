// variables

const currentDate = document.querySelector(".date");
const daysContainer = document.querySelector(".daysContainer");
const hoursContainer = document.querySelector(".hoursContainer");
const forecastDiv = document.querySelector(".forecast");
const tenDaysText = document.querySelector(".ten");
const hoursText = document.querySelector(".twentyFour");
const toggleForecast = document.querySelector(".switchForecast");
const fahrenheit = document.querySelector(".f");
const celsius = document.querySelector(".c");
const toggleTemp = document.querySelector(".switch");
const input = document.querySelector(".input");
const searchBtn = document.querySelector(".searchBtn");
const windSpeed = document.querySelector(".windSpeed");
const uv = document.querySelector(".uvM");
const visibility = document.querySelector(".visibilityP");
const humidity = document.querySelector(".humidityM");
const currentCondition = document.querySelector(".currentCondition");
const currentTemp = document.querySelector(".currentTemp");
const currentImage = document.querySelector(".currentImage");
const locationName = document.querySelector(".locationName");
const sunRise = document.querySelector(".rise");
const sunSet = document.querySelector(".set");

// HOURS
const conditionAll = document.querySelectorAll(".conditionH");

// IMAGE HOURS
const hourImagesAll = document.querySelectorAll(".hoursClimate");

// TEMPERATURE
const tempAll = document.querySelectorAll(".temp");

// API
let data;
async function checkWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=f8cd4c856eea494588795341230609&q=${city}&days=7&aqi=yes&alerts=yes, mode: "no-cors"`
  );
  data = await response.json();
  console.log(data);
  currentCondition.textContent = `${data.current.condition.text} `;
  currentTemp.textContent = `${data.current.temp_c} °C `;
  currentImage.src = `${data.current.condition.icon} `;
  locationName.textContent = `${data.location.name}, ${data.location.country}`;
  sunRise.textContent = `${data.forecast.forecastday[0].astro.sunrise}`;
  sunSet.textContent = `${data.forecast.forecastday[0].astro.sunset}`;
  windSpeed.textContent = `${data.current.wind_kph} kph`;
  humidity.textContent = `${data.current.humidity}%`;
  uv.textContent = `${data.current.uv}`;
  visibility.textContent = `${data.current.vis_km} km`;

  // HOURS

  for (let i = 0; i < conditionAll.length; i++) {
    conditionAll[i].textContent =
      data.forecast.forecastday[0].hour[i].condition.text;
  }

  // IMAGE

  for (let i = 0; i < hourImagesAll.length; i++) {
    hourImagesAll[i].src = data.forecast.forecastday[0].hour[i].condition.icon;
  }

  // TEMPERATURE

  for (let i = 0; i < tempAll.length; i++) {
    tempAll[
      i
    ].textContent = `${data.forecast.forecastday[0].hour[i].temp_c} °C`;
  }
}
checkWeather("kigali");

// SWITCH TEMPERATURE
let dayIndex;
let parDay;
let isFahrenheit = false;
function switchTemp(data) {
  if (isFahrenheit) {
    isFahrenheit = false;
    currentTemp.textContent = `${data.current.temp_c} °C `;
    windSpeed.textContent = `${data.current.wind_kph} kph`;
    visibility.textContent = `${data.current.vis_km} km`;
    fahrenheit.style.textDecoration = "line-through";
    fahrenheit.style.color = "rgb(143, 145, 140)";
    celsius.style.color = "greenYellow";
    celsius.style.textDecoration = "none";

    for (let i = 0; i < tempAll.length; i++) {
      tempAll[
        i
      ].textContent = `${data.forecast.forecastday[0].hour[i].temp_c} °C`;
    }
  } else {
    // hour temp
    isFahrenheit = true;

    for (let i = 0; i < tempAll.length; i++) {
      tempAll[
        i
      ].textContent = `${data.forecast.forecastday[0].hour[i].temp_f} °F`;
    }
    currentTemp.textContent = `${data.current.temp_f} °F `;
    windSpeed.textContent = `${data.current.wind_mph} mph`;
    visibility.textContent = `${data.current.vis_miles} m`;
    celsius.style.color = "rgb(143, 145, 140)";
    celsius.style.textDecoration = "line-through";
    fahrenheit.style.textDecoration = "none";
    fahrenheit.style.color = "greenYellow";
  }
  console.log(isFahrenheit);
}
toggleTemp.addEventListener("change", () => switchTemp(data));

searchBtn.addEventListener("click", () => {
  checkWeather(input.value);
});

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// SWITCH SIDES FUNCTION
const d = new Date();
const todayIndex = d.getDay();
let isSevenDays = false;
function switchSide() {
  if (isSevenDays) {
    isSevenDays = false;
    tenDaysText.style.textDecoration = "line-through";
    tenDaysText.style.color = "rgb(143, 145, 140)";
    hoursText.style.color = "greenYellow";
    hoursText.style.textDecoration = "none";
    forecastDiv.removeChild(daysContainer);
    forecastDiv.appendChild(hoursContainer);
  } else {
    isSevenDays = true;
    daysContainer.innerHTML = "";
    daysContainer.style.visibility = "visible";
    forecastDiv.removeChild(hoursContainer);
    forecastDiv.appendChild(daysContainer);
    hoursText.style.color = "rgb(143, 145, 140)";
    hoursText.style.textDecoration = "line-through";
    tenDaysText.style.textDecoration = "none";
    tenDaysText.style.color = "greenYellow";

    // DAYS

    for (let i = todayIndex; i < weekDays.length + todayIndex; i++) {
      dayIndex = i % weekDays.length;

      const divDay = document.createElement("div");
      divDay.classList.add("days");
      const h4day = document.createElement("h4");
      h4day.classList.add("day");
      const imgDay = document.createElement("img");
      imgDay.classList.add("imageClimate");
      const h6Day = document.createElement("h6");
      h6Day.classList.add("conditionD");
      parDay = document.createElement("p");
      parDay.classList.add("tempD");

      h4day.textContent = weekDays[dayIndex];
      h6Day.textContent =
        data.forecast.forecastday[dayIndex].day.condition.text;
      h6Day.style.fontSize = "16px";
      imgDay.src = data.forecast.forecastday[dayIndex].day.condition.icon;

      if (i === todayIndex) {
        h4day.textContent = "Today";
      }

      if (isFahrenheit) {
        parDay.textContent = `Min: ${data.forecast.forecastday[dayIndex].day.mintemp_f}°F Max: ${data.forecast.forecastday[dayIndex].day.mintemp_f}°F`;
      } else {
        parDay.textContent = `Min: ${data.forecast.forecastday[dayIndex].day.mintemp_c}°C Max: ${data.forecast.forecastday[dayIndex].day.mintemp_c}°C`;
      }

      divDay.appendChild(h4day);
      divDay.appendChild(imgDay);
      divDay.appendChild(h6Day);
      divDay.appendChild(parDay);
      daysContainer.appendChild(divDay);
    }
  }
  console.log(isSevenDays);
}
toggleForecast.addEventListener("change", switchSide);
