import React from "react";
import Logo from "./Logo";

class LogoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="logo-container">
            <Logo/>
        </div>)
    }

}

export default LogoContainer;