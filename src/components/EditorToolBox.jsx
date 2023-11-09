import React from "react";

class EditorToolBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="editor-tool-box">
            <div className="tool-box-item" id="editor-title">Editor</div>
            <img onClick={this.props.changeView} className="tool-box-item tool-box-enlarge" id="enlarge-editor" src="../assets/expandIcon.png"></img>
        </div>)
    }
}

export default EditorToolBox;