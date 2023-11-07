import React from "react";

class Preview extends React.Component {
    constructor(props) {
        super(props);
        
    }  
    render() {
        return (<div id="preview">{this.props.markdown}</div>)
    }
}

export default Preview;