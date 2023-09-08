// variables 

const currentDate = document.querySelector(".date");
const daysContainer = document.querySelector(".daysContainer")
const hoursContainer = document.querySelector(".hoursContainer")
const forecastDiv = document.querySelector(".forecast");
const tenDaysText = document.querySelector(".ten")
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

// API 

async function checkWeather (city){
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=f8cd4c856eea494588795341230609&q=kigali &aqi=yes, mode:{no-cors}" + city)
    const data = await response.json();
    console.log(data);

    currentCondition.textContent = `${data.current.condition.text} `;
    currentTemp.textContent = `${data.current.temp_c} °C `;
    currentImage.src = `${data.current.condition.icon} `;
    locationName.textContent = `${data.location.name}, ${data.location.country}`;
    // currentDate.textContent = `${data.location.localtime} `;

    windSpeed.textContent = `${data.current.wind_kph} kph`;
    humidity.textContent = `${data.current.humidity}%`;
    uv.textContent = `${data.current.uv}`;
    visibility.textContent = `${data.current.vis_km} km`;

    function switchTemp (){
    let isFahrenheit = false;
    toggleTemp.addEventListener("change", ()=>{
        console.log(isFahrenheit);
        if (isFahrenheit) {
                isFahrenheit = false;
                currentTemp.textContent = `${data.current.temp_c} °C `;
                windSpeed.textContent = `${data.current.wind_kph} kph`;
                visibility.textContent = `${data.current.vis_km} km`;
                fahrenheit.style.textDecoration = "line-through";
                fahrenheit.style.color = "rgb(143, 145, 140)";
                celsius.style.color = "greenYellow";
                celsius.style.textDecoration = "none";
            }else{
                currentTemp.textContent = `${data.current.temp_f} °F `;
                windSpeed.textContent = `${data.current.wind_mph} mph`;
                visibility.textContent = `${data.current.vis_miles} m`;
                isFahrenheit = true;
                celsius.style.color = "rgb(143, 145, 140)";
                celsius.style.textDecoration = "line-through";
                fahrenheit.style.textDecoration = "none";
                fahrenheit.style.color = "greenYellow";
            }
    })       
}
switchTemp();
    
}

searchBtn.addEventListener("click", () =>{
    checkWeather(input.value);
    
})
checkWeather();




// const newDate  = new Date();
// currentDate.append(newDate);

// SWITCH SIDES FUNCTION 

function switchSide () {
    
    let isTenDays = false;
    toggleForecast.addEventListener("change", () =>{
        console.log(isTenDays);
        if (isTenDays) {
            isTenDays = false
            tenDaysText.style.textDecoration = "line-through";
            tenDaysText.style.color = "rgb(143, 145, 140)";
            hoursText.style.color = "greenYellow";
            hoursText.style.textDecoration = "none";
            forecastDiv.removeChild(daysContainer);
            forecastDiv.appendChild(hoursContainer);
        }else{
            isTenDays = true;
            daysContainer.style.visibility = "visible";
            forecastDiv.removeChild(hoursContainer);
            forecastDiv.appendChild(daysContainer);
            hoursText.style.color = "rgb(143, 145, 140)";
            hoursText.style.textDecoration = "line-through";
            tenDaysText.style.textDecoration = "none";
            tenDaysText.style.color = "greenYellow";
    
            
        }
    })
} switchSide();

// SWITCH TEMPERATURE FUNCTION 





