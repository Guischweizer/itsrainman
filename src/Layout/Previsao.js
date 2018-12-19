import React, { Component } from "react";

class Previsao extends Component {
    componentDidMount() {
        this.getDataWeather();
    }
    getDataWeather = () => {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=Erechim,br&APPID=cf2e31a47b54972f5f7f373337350593"
        ).then(function(response) {
            console.log("response", response);
        });
    };
    render() {
        return (
            <div>
                <h1>Previsao</h1>
            </div>
        );
    }
}

export default Previsao;
