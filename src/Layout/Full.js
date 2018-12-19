import React, { Component } from "react";
import snow from "../assets/images/snow.svg";
import "../assets/stylesheet/Full.css";

class Full extends Component {
    render() {
        return (
            <div className="body-content">
                <button type="button" className="btn button-documentsMenu ">
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
