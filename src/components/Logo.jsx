import React from "react";


class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(__dirname)
        let path = __dirname + "assets" + "/PageLogo.png";
        return <img id="logo" src="../assets/PageLogo.png" width="600px" style={{position: 'absolute', top: 0, left: 0}}>
        </img>
    }
}

export default Logo;