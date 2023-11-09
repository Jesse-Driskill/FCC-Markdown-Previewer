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
        super(props);
        this.changeView = this.changeView.bind(this);
        this.state = {
            expanded: false
        }
    }

    changeView() {
        let e = this.state.expanded;
        this.setState({expanded: !e});
    }

    render() {
        if (this.props.hidden) {
            return;
        } else {

            return (<div id="editor-container">
                <EditorToolBox changeView={this.changeView}/>
                <Editor expanded={this.state.expanded} changeMarkdown={this.props.changeMarkdown}/>
            </div>)
        }
    }
}

export default connect(null, mapDispatchToProps)(EditorContainer);