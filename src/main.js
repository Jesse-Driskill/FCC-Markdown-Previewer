import React from "react";
import ReactDOM from "react-dom";
import MainWrapper from "./components/MainWrapper";
import { createStore } from "redux";
import { connect } from "react-redux";


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="app">
            <MainWrapper>
            </MainWrapper>
        </div>)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App/>, document.getElementById("main"));
})