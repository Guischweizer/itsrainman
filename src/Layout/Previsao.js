import React, { Component } from "react";
import '../assets/stylesheet/Previsao.css'
import { WeatherRequest } from "../Requests/WeatherRequest";

class Previsao extends Component {
    constructor() {
        super();
        this.state = {
            city: ''
        }
    }
    componentDidMount() {
        // this.getDataWeather();
    }
    handleChange(event) {
        let userInput = event.target.value;
        this.setState({ city: userInput })
    }
    handleSubmit() {
        const { city } = this.state
        if (city !== '') {
            WeatherRequest(city)
        }else{
            alert("Preencha o campo!")
        }
    }

    getDataWeather = () => {

    };
    render() {
        return (
            <div className="weather-container">
                <input placeholder="Cidade" onChange={(event) => { this.handleChange(event) }} />
                <button type="button" onClick={() => { this.handleSubmit() }}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        );
    }
}

export default Previsao;
