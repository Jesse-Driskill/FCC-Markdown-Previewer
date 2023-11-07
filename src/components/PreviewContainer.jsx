import React from "react";
import Preview from "./Preview";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {markdown: state.markdown}
}



class PreviewContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div id="preview-container">
            <Preview markdown={this.props.markdown}/>
            
        </div>)
    }
}

export default connect(mapStateToProps, null)(PreviewContainer);