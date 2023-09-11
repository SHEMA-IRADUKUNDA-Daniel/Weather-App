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
const sunRise = document.querySelector(".rise")
const sunSet = document.querySelector(".set")

// HOURS 
const conditionH0 = document.querySelector(".conditionh0");
const conditionH1 = document.querySelector(".conditionh1");
const conditionH2 = document.querySelector(".conditionh2");
const conditionH3 = document.querySelector(".conditionh3");
const conditionH4 = document.querySelector(".conditionh4");
const conditionH5 = document.querySelector(".conditionh5");
const conditionH6 = document.querySelector(".conditionh6");
const conditionH7 = document.querySelector(".conditionh7");
const conditionH8 = document.querySelector(".conditionh8");
const conditionH9 = document.querySelector(".conditionh9");
const conditionH10 = document.querySelector(".conditionh10");
const conditionH11 = document.querySelector(".conditionh11");
const conditionH12 = document.querySelector(".conditionh12");
const conditionH13 = document.querySelector(".conditionh13");
const conditionH14 = document.querySelector(".conditionh14");
const conditionH15 = document.querySelector(".conditionh15");
const conditionH16 = document.querySelector(".conditionh16");
const conditionH17 = document.querySelector(".conditionh17");
const conditionH18 = document.querySelector(".conditionh18");
const conditionH19 = document.querySelector(".conditionh19");
const conditionH20 = document.querySelector(".conditionh20");
const conditionH21 = document.querySelector(".conditionh21");
const conditionH22 = document.querySelector(".conditionh22");
const conditionH23 = document.querySelector(".conditionh23");

// Days 

const conditionM = document.querySelector(".conditionM");
const conditionT = document.querySelector(".conditionT");
const conditionW = document.querySelector(".conditionW");
const conditionTh = document.querySelector(".conditionTh");
const conditionF = document.querySelector(".conditionF");
const conditionS = document.querySelector(".conditionS");
const conditionSu = document.querySelector(".conditionSu");
// const conditionDays = document.querySelectorAll('.conditionD' + (i+1) + "");
// const weekDays = document.querySelectorAll(".day");



// IMAGE 
const img0 = document.querySelector(".img0");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const img6 = document.querySelector(".img6");
const img7 = document.querySelector(".img7");
const img8 = document.querySelector(".img8");
const img9 = document.querySelector(".img9");
const img10 = document.querySelector(".img10");
const img11 = document.querySelector(".img11");
const img12 = document.querySelector(".img12");
const img13 = document.querySelector(".img13");
const img14 = document.querySelector(".img14");
const img15 = document.querySelector(".img15");
const img16 = document.querySelector(".img16");
const img17 = document.querySelector(".img17");
const img18 = document.querySelector(".img18");
const img19 = document.querySelector(".img19");
const img20 = document.querySelector(".img20");
const img21 = document.querySelector(".img21");
const img22 = document.querySelector(".img22");
const img23 = document.querySelector(".img23");

// TEMPERATURE 
const temp0 = document.querySelector(".temp0");
const temp1 = document.querySelector(".temp1");
const temp2 = document.querySelector(".temp2");
const temp3 = document.querySelector(".temp3");
const temp4 = document.querySelector(".temp4");
const temp5 = document.querySelector(".temp5");
const temp6 = document.querySelector(".temp6");
const temp7 = document.querySelector(".temp7");
const temp8 = document.querySelector(".temp8");
const temp9 = document.querySelector(".temp9");
const temp10 = document.querySelector(".temp10");
const temp11 = document.querySelector(".temp11");
const temp12 = document.querySelector(".temp12");
const temp13 = document.querySelector(".temp13");
const temp14 = document.querySelector(".temp14");
const temp15 = document.querySelector(".temp15");
const temp16 = document.querySelector(".temp16");
const temp17 = document.querySelector(".temp17");
const temp18 = document.querySelector(".temp18");
const temp19 = document.querySelector(".temp19");
const temp20 = document.querySelector(".temp20");
const temp21 = document.querySelector(".temp21");
const temp22 = document.querySelector(".temp22");
const temp23 = document.querySelector(".temp23");


// API 

async function checkWeather (city){
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f8cd4c856eea494588795341230609&q=${city}&days=7&aqi=yes&alerts=yes, mode: "no-cors"`)
    const data = await response.json();
    console.log(data);

    currentCondition.textContent = `${data.current.condition.text} `;
    currentTemp.textContent = `${data.current.temp_c} °C `;
    currentImage.src = `${data.current.condition.icon} `;
    locationName.textContent = `${data.location.name}, ${data.location.country}`;
    sunRise.textContent =`${data.forecast.forecastday[0].astro.sunrise}`
    sunSet.textContent =`${data.forecast.forecastday[0].astro.sunset}`

    // currentDate.textContent = `${data.location.localtime} `;

    windSpeed.textContent = `${data.current.wind_kph} kph`;
    humidity.textContent = `${data.current.humidity}%`;
    uv.textContent = `${data.current.uv}`;
    visibility.textContent = `${data.current.vis_km} km`;

    // HOURS 
    
    conditionH0.textContent = data.forecast.forecastday[0].hour[0].condition.text
    conditionH1.textContent = data.forecast.forecastday[0].hour[1].condition.text
    conditionH2.textContent = data.forecast.forecastday[0].hour[2].condition.text
    conditionH3.textContent = data.forecast.forecastday[0].hour[3].condition.text
    conditionH4.textContent = data.forecast.forecastday[0].hour[4].condition.text
    conditionH5.textContent = data.forecast.forecastday[0].hour[5].condition.text
    conditionH6.textContent = data.forecast.forecastday[0].hour[6].condition.text
    conditionH7.textContent = data.forecast.forecastday[0].hour[7].condition.text
    conditionH8.textContent = data.forecast.forecastday[0].hour[8].condition.text
    conditionH9.textContent = data.forecast.forecastday[0].hour[9].condition.text
    conditionH10.textContent = data.forecast.forecastday[0].hour[10].condition.text
    conditionH11.textContent = data.forecast.forecastday[0].hour[11].condition.text
    conditionH12.textContent = data.forecast.forecastday[0].hour[12].condition.text
    conditionH13.textContent = data.forecast.forecastday[0].hour[13].condition.text
    conditionH14.textContent = data.forecast.forecastday[0].hour[14].condition.text
    conditionH15.textContent = data.forecast.forecastday[0].hour[15].condition.text
    conditionH16.textContent = data.forecast.forecastday[0].hour[16].condition.text
    conditionH17.textContent = data.forecast.forecastday[0].hour[17].condition.text
    conditionH18.textContent = data.forecast.forecastday[0].hour[18].condition.text
    conditionH19.textContent = data.forecast.forecastday[0].hour[19].condition.text
    conditionH20.textContent = data.forecast.forecastday[0].hour[20].condition.text
    conditionH21.textContent = data.forecast.forecastday[0].hour[21].condition.text
    conditionH22.textContent = data.forecast.forecastday[0].hour[22].condition.text
    conditionH23.textContent = data.forecast.forecastday[0].hour[23].condition.text
    // IMAGE 

    img0.src = data.forecast.forecastday[0].hour[0].condition.icon;
    img1.src = data.forecast.forecastday[0].hour[1].condition.icon;
    img2.src = data.forecast.forecastday[0].hour[2].condition.icon;
    img3.src = data.forecast.forecastday[0].hour[3].condition.icon;
    img4.src = data.forecast.forecastday[0].hour[4].condition.icon;
    img5.src = data.forecast.forecastday[0].hour[5].condition.icon;
    img6.src = data.forecast.forecastday[0].hour[6].condition.icon;
    img7.src = data.forecast.forecastday[0].hour[7].condition.icon;
    img8.src = data.forecast.forecastday[0].hour[8].condition.icon;
    img9.src = data.forecast.forecastday[0].hour[9].condition.icon;
    img10.src = data.forecast.forecastday[0].hour[10].condition.icon;
    img11.src = data.forecast.forecastday[0].hour[11].condition.icon;
    img12.src = data.forecast.forecastday[0].hour[12].condition.icon;
    img13.src = data.forecast.forecastday[0].hour[13].condition.icon;
    img14.src = data.forecast.forecastday[0].hour[14].condition.icon;
    img15.src = data.forecast.forecastday[0].hour[15].condition.icon;
    img16.src = data.forecast.forecastday[0].hour[16].condition.icon;
    img17.src = data.forecast.forecastday[0].hour[17].condition.icon;
    img18.src = data.forecast.forecastday[0].hour[18].condition.icon;
    img19.src = data.forecast.forecastday[0].hour[19].condition.icon;
    img20.src = data.forecast.forecastday[0].hour[20].condition.icon;
    img21.src = data.forecast.forecastday[0].hour[21].condition.icon;
    img22.src = data.forecast.forecastday[0].hour[22].condition.icon;
    img23.src = data.forecast.forecastday[0].hour[23].condition.icon;

    // TEMPERATURE 

    temp0.textContent = `${ data.forecast.forecastday[0].hour[0].temp_c} °C`
    temp1.textContent = `${ data.forecast.forecastday[0].hour[1].temp_c} °C`
    temp2.textContent = `${ data.forecast.forecastday[0].hour[2].temp_c} °C`;
    temp3.textContent = `${ data.forecast.forecastday[0].hour[3].temp_c} °C`;
    temp4.textContent = `${ data.forecast.forecastday[0].hour[4].temp_c} °C`
    temp5.textContent = `${ data.forecast.forecastday[0].hour[5].temp_c} °C`
    temp6.textContent = `${ data.forecast.forecastday[0].hour[6].temp_c} °C`
    temp7.textContent = `${ data.forecast.forecastday[0].hour[7].temp_c} °C`
    temp8.textContent = `${ data.forecast.forecastday[0].hour[8].temp_c} °C`
    temp9.textContent = `${ data.forecast.forecastday[0].hour[9].temp_c} °C`
    temp10.textContent =  `${data.forecast.forecastday[0].hour[10].temp_c} °C`
    temp11.textContent =  `${data.forecast.forecastday[0].hour[11].temp_c} °C`
    temp12.textContent =  `${data.forecast.forecastday[0].hour[12].temp_c} °C`
    temp13.textContent =  `${data.forecast.forecastday[0].hour[13].temp_c} °C`
    temp14.textContent =  `${data.forecast.forecastday[0].hour[14].temp_c} °C`
    temp15.textContent =  `${data.forecast.forecastday[0].hour[15].temp_c} °C`
    temp16.textContent =  `${data.forecast.forecastday[0].hour[16].temp_c} °C`
    temp17.textContent =  `${data.forecast.forecastday[0].hour[17].temp_c} °C`
    temp18.textContent =  `${data.forecast.forecastday[0].hour[18].temp_c} °C`
    temp19.textContent =  `${data.forecast.forecastday[0].hour[19].temp_c} °C`
    temp20.textContent =  `${data.forecast.forecastday[0].hour[20].temp_c} °C`
    temp21.textContent =  `${data.forecast.forecastday[0].hour[21].temp_c} °C`
    temp22.textContent =  `${data.forecast.forecastday[0].hour[22].temp_c} °C`
    temp23.textContent =  `${data.forecast.forecastday[0].hour[23].temp_c} °C`

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
                // hour temp 
                temp0.textContent = `${data.forecast.forecastday[0].hour[0].temp_f} °F`;
                temp1.textContent = `${data.forecast.forecastday[0].hour[1].temp_f} °F`;
                temp2.textContent = `${data.forecast.forecastday[0].hour[2].temp_f} °F`;
                temp3.textContent = `${data.forecast.forecastday[0].hour[3].temp_f} °F`;
                temp4.textContent = `${data.forecast.forecastday[0].hour[4].temp_f} °F`;
                temp5.textContent = `${data.forecast.forecastday[0].hour[5].temp_f} °F`;
                temp6.textContent = `${data.forecast.forecastday[0].hour[6].temp_f} °F`;
                temp7.textContent = `${data.forecast.forecastday[0].hour[7].temp_f} °F`;
                temp8.textContent = `${data.forecast.forecastday[0].hour[8].temp_f} °F`;
                temp9.textContent = `${data.forecast.forecastday[0].hour[9].temp_f} °F`;
                temp10.textContent = `${data.forecast.forecastday[0].hour[10].temp_f} °F`;
                temp11.textContent = `${data.forecast.forecastday[0].hour[11].temp_f} °F`;
                temp12.textContent = `${data.forecast.forecastday[0].hour[12].temp_f} °F`;
                temp13.textContent = `${data.forecast.forecastday[0].hour[13].temp_f} °F`;
                temp14.textContent = `${data.forecast.forecastday[0].hour[14].temp_f} °F`;
                temp15.textContent = `${data.forecast.forecastday[0].hour[15].temp_f} °F`;
                temp16.textContent = `${data.forecast.forecastday[0].hour[16].temp_f} °F`;
                temp17.textContent = `${data.forecast.forecastday[0].hour[17].temp_f} °F`;
                temp18.textContent = `${data.forecast.forecastday[0].hour[18].temp_f} °F`;
                temp19.textContent = `${data.forecast.forecastday[0].hour[19].temp_f} °F`;
                temp20.textContent = `${data.forecast.forecastday[0].hour[20].temp_f} °F`;
                temp21.textContent = `${data.forecast.forecastday[0].hour[21].temp_f} °F`;
                temp22.textContent = `${data.forecast.forecastday[0].hour[22].temp_f} °F`;
                temp23.textContent = `${data.forecast.forecastday[0].hour[23].temp_f} °F`;
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
checkWeather("kigali");

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = checkDay();

function checkDay() {
const d = new Date();
const today = weekDays[d.getDay()];

for (day of weekDays){
    if (day === today) {        
        console.log(today);
    }
}
}checkDay()

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

            //  DAYS IMAGE
            // img17.src = data.forecast.forecastday[0].hour[17].condition.icon;
            // img18.src = data.forecast.forecastday[0].hour[18].condition.icon;
            // img19.src = data.forecast.forecastday[0].hour[19].condition.icon;
            // img20.src = data.forecast.forecastday[0].hour[20].condition.icon;
            // img21.src = data.forecast.forecastday[0].hour[21].condition.icon;
            // img22.src = data.forecast.forecastday[0].hour[22].condition.icon;
            // img23.src = data.forecast.forecastday[0].hour[23].condition.icon;
    
            
            //  DAYS CONDITION

            // conditionM.textContent = data.forecast.forecastday[0].Day[17].condition.text
            // conditionT.textContent = data.forecast.forecastday[0].Day[18].condition.text
            // conditionW.textContent = data.forecast.forecastday[0].Day[19].condition.text
            // conditionTh.textContent = data.forecast.forecastday[0].Day[20].condition.text
            // conditionF.textContent = data.forecast.forecastday[0].Day[21].condition.text
            // conditionS.textContent = data.forecast.forecastday[0].Day[22].condition.text
            // conditionSu.textContent = data.forecast.forecastday[0].Day[23].condition.text


            // DAYS NAME 
    

    for (let i = 0; i < weekDays.length; i++) {
        const divDay = document.createElement("div");
        divDay.classList.add("days");
        const h4day = document.createElement("h4");
        h4day.classList.add("day");
        const imgDay = document.createElement("img");
        imgDay.classList.add("imageClimate");
        const h6Day = document.createElement("h6");
        h6Day.classList.add("conditionD");
        const parDay = document.createElement("p");
        parDay.classList.add("tempD");

        divDay.appendChild(h4day);
        divDay.appendChild(imgDay);
        divDay.appendChild(h6Day)
        divDay.appendChild(parDay);
        daysContainer.appendChild(divDay)
    }
}
})
    checkDay();
} switchSide();
// SWITCH TEMPERATURE FUNCTION 





