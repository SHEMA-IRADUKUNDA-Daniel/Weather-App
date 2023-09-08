const currentDate = document.querySelector(".date");
const daysContainer = document.querySelector(".daysContainer")
const hoursContainer = document.querySelector(".hoursContainer")
const forecastDiv = document.querySelector(".forecast");
const tenDaysText = document.querySelector(".ten")
const hoursText = document.querySelector(".twentyFour");
const toggleForecast = document.querySelector(".switchForecast");


const newDate  = new Date();
currentDate.append(newDate);
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



