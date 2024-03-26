async function getweather() {
    // const cityInput = document.getElementById("cityInput");

    const cityName = search.value;
    console.log(cityName);


    
    // const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key

    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={searchInput}&appid={API key}i`;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=be781045800379c15df32be0118f4e56`);
        const data = await response.json().then((data)=>{;
        
        // const weatherInfo = document.getElementById("weatherInfo");
        result.innerHTML = `
        <div class="weather" style=" color: aliceblue;" >
        
        <img class="weather-icon"  src="./image/rain.png"  >
        <h1   class="temp">${parseInt(data.main.temp-273)}°C</h1>
        <h2 class="city">

        </h2>
        <div class="details">
            <div class="col">
                <img   src="./image/humidity.png">
                <div><p class="humidity">${data.main.humidity}%</p>
                    <p>Humidity</p>
                </div>
            </div>
            <div class="col">
                <img    src="./image/wind.png">
                <div><p class="Wind">${data.wind.speed}Km/h</p>
                    <p>Wind speed</p>
                </div>
            </div>
        </div>
    </div>
        `;
    })
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

