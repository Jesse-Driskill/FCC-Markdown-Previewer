import Editor from "./Editor";
import React from "react";
import changeMarkdown from "../actions/editMarkdown";
import { connect } from "react-redux";
import EditorToolBox from "./EditorToolBox";

const mapDispatchToProps = (dispatch) => {
    return {
        changeMarkdown: (markdown) => {dispatch(changeMarkdown(markdown))}
    }
}

class EditorContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div id="editor-container">
            <EditorToolBox/>
            <Editor changeMarkdown={this.props.changeMarkdown}/>
        </div>)
    }
}

export default connect(null, mapDispatchToProps)(EditorContainer);