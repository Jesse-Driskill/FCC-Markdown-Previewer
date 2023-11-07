import React from "react";
import Preview from "./Preview";

class PreviewContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="preview-container">
            <Preview/>
        </div>)
    }
}

export default PreviewContainer;