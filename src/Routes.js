import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Full from "./Layout/Full";
import Previsao from "./Layout/Previsao";

class Routes extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route path="/" exact component={Full} />
                        <Route path="/previsao" component={Previsao} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Routes;
