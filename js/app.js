const API_KEY = `60e4be8d01b99c308a3d9a1817b752fb`;
const searchTemperature = () => {
    const searchCity = document.getElementById('city').value;
    if (searchCity == '') {
        alert('Plese type your city name');
    } else {
        // for celcious also add & units= metric 
        const url = ` https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;

        // clear searchCity 
        document.getElementById('city').value = '';
        fetch(url)
            .then(res => res.json())
            .then(data => displayWeather(data));
    }

}

// Define Weather Details 
const inputSearchText = (id, text) => {
    document.getElementById(id).innerText = text;
}

// Display Result 
const displayWeather = (temperature) => {
    inputSearchText('city-name', temperature.name);
    inputSearchText('temperature', temperature.main.temp);
    inputSearchText('weather-condition', temperature.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('imgIcon');
    imgIcon.setAttribute('src', url);

    console.log(temperature);
}