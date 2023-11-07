import React from "react";
import Editor from "./Editor";
import EditorContainer from "./EditorContainer";
import PreviewContainer from "./PreviewContainer";


class MainWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="poop">
            <EditorContainer></EditorContainer>
            <PreviewContainer></PreviewContainer>
        </div>
    }
}

export default MainWrapper;