import { API_KEY } from "../GlobalConfig";
export const WeatherRequest = city => {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},br&APPID=${API_KEY}`
    ).then(function(response) {
        console.log("response", response);
    });
};
