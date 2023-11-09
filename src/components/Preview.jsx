import React from "react";
import Markdown from 'marked-react';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        
    }  
    render() {
        return (<div id="preview">
            <Markdown id="preview-markdown" gfm={true} breaks={true}>{this.props.markdown}</Markdown>
        </div>
        )

    }
}



export default Preview;