import Editor from "./Editor";
import React from "react";

class EditorContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div id="editor-container">
            <Editor/>
        </div>)
    }
}

export default EditorContainer;