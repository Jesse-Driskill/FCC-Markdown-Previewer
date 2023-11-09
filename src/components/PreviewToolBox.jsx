import React from "react";

class PreviewToolBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="preview-tool-box">
        <div>Preview</div>
        <img onClick={this.props.hideEditor} className="tool-box-item tool-box-enlarge" id="enlarge-editor" src="../assets/expandIcon.png"></img>
        </div>
    }
}

export default PreviewToolBox;