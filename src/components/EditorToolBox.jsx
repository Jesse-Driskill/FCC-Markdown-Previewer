import React from "react";

class EditorToolBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="editor-tool-box">
            <div id="editor-title">Editor</div>
            <img id="enlarge-editor" src="../assets/Logo"></img>
        </div>)
    }
}

export default EditorToolBox;