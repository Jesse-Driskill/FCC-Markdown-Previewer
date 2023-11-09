import React from "react";
import Editor from "./Editor";
import EditorContainer from "./EditorContainer";
import PreviewContainer from "./PreviewContainer";

import markdownReducer from "../reducers/markdown_reducer";
import changeMarkdown from "../actions/editMarkdown";


class MainWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorHidden: false
        }
        this.hideEditor = this.hideEditor.bind(this);
    }

    hideEditor() {
        this.setState({editorHidden: !this.state.editorHidden});
    }

    render() {
        return <div className="poop">
            <EditorContainer hidden={this.state.editorHidden}></EditorContainer>
            <PreviewContainer hideEditor={this.hideEditor}></PreviewContainer>
        </div>
    }
}



export default MainWrapper;