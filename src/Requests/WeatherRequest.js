export const WeatherRequest = (city) => {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},br&APPID=cf2e31a47b54972f5f7f373337350593`
    ).then(function (response) {
        console.log("response", response);
    });
}
