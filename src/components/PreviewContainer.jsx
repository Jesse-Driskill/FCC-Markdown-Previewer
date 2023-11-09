import React from "react";
import Preview from "./Preview";
import { connect } from "react-redux";
import PreviewToolBox from "./PreviewToolBox";


const mapStateToProps = (state) => {
    return {markdown: state.markdown}
}



class PreviewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }


    render() {
        return (<div id="preview-container">
            <PreviewToolBox hideEditor={this.props.hideEditor}/>
            <Preview markdown={this.props.markdown}/>
            
        </div>)
    }
}

export default connect(mapStateToProps, null)(PreviewContainer);