import React from "react";

class Editor extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.dispatchChange = this.dispatchChange.bind(this);
        
    }

    dispatchChange(e) {
        console.log(e.target.value);
        this.props.changeMarkdown(e.target.value);
    }

    render() {
        return <textarea id="editor"  onChange={(e) => {this.dispatchChange(e)}}></textarea>
    }
}

export default Editor;