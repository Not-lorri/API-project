fetch('https://api.openweathermap.org/data/2.5/weather?lat=10.9&lon=123.0778&appid=04a4cc2e9e6d8cae63f542f2895fcd96')
.then(res => res.json())
.then(data => console.log(data.dt));


// Weather API
const getWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=10.9&lon=123.0778&appid=0094fb72b0e28e2655231d0419b65c88&units=metric')
    .then(res => res.json())
    .then(data => weather(data));
}

const weather = (data) => {
   document.getElementById('weatherInfo').innerHTML += 
   `<h1 id="landHeader">${data.name}-${data.sys.country}</h1>
    <h2 id="mainTemp">${Math.floor(data.main.temp)+ "C"+ "&deg;"}</h2>
    <p id="type">${data.weather[0].main}</p>
    <p id ="feelLikeTemp">Feels like <span id="feel_grad">${Math.floor(data.main.feels_like) + "C" + "&deg;"}</span></p>
   `;

   document.getElementById('weatherInfo').innerHTML += 
   `<div class="card-body d-flex justify-content-center gap-3" id="otherTempAlign">
    <p class="otherTemp"><i class='fa-solid fa-droplet'></i><span id="humidity_grad">${data.main.humidity + "&#37;"}</span></p>
    <p class="otherTemp"><i class="fa-solid fa-wind"></i><span id="wind_grad">${data.wind.speed}</span> km/h</p>
    <p class="otherTemp"><i class="fa-solid fa-gauge-high"></i><span id="gust_grad">${data.wind.gust}</span> mbar</p>
    </div>
   `;

}

getWeather()


// Weather Forecast for 8 days
const getWeatherForecast = () => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=10.9&lon=123.0778&cnt=5&appid=04a4cc2e9e6d8cae63f542f2895fcd96&units=metric')
    .then(res => res.json())
    .then(days => forecast(days))
}


const forecast = (days) => {
    console.log(days)
    days.list.forEach(element => {
        document.getElementById('weatherDaysTable').innerHTML += 
       `<td>${element.dt_txt}</td>
        <td>${Math.floor(element.main.temp) + "C" + "&deg;"}</td>
        <td>${element.weather[0].description}</td>`;
    });
}


getWeatherForecast()
