import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import snow from "../assets/images/snow.svg";
import "../assets/stylesheet/Full.css";

class Full extends Component {
    constructor() {
        super();
        this.state = {
            previsao: false
        };
    }
    render() {
        const { previsao } = this.state;
        if (previsao) {
            return <Redirect to="/previsao" />;
        }
        return (
            <div className="body-content">
                <button
                    type="button"
                    className="btn button-previsao"
                    onClick={() => {
                        this.setState({ previsao: true });
                    }}
                >
                    <div className="col-md-12">
                        <img
                            src={snow}
                            alt=""
                            id="imageButton"
                            className="col-md-6"
                        />
                        <div className="col-md-6">
                            <p id="titleButton">Previsão do tempo!</p>
                            <p id="textIntro">Consulte a previsão do tempo!</p>
                        </div>
                    </div>
                </button>
            </div>
        );
    }
}

export default Full;
