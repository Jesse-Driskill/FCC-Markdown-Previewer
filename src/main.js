import React from "react";
import ReactDOM from "react-dom";
import MainWrapper from "./components/MainWrapper";
import { marked } from "marked";
import {createStore} from "redux";
import {connect} from "react-redux";
import { Provider } from "react-redux";
import markdownReducer from "./reducers/markdown_reducer";
import changeMarkdown from "./actions/editMarkdown";



const store = createStore(markdownReducer);
const test = store.subscribe(() => {
    let s = store.getState();
    console.log("State change", s);
})


// var markdownText = '# Example Markdown\n\nThis is **Markdown** rendered by Marked.';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        console.log(store.getState(), 'asdhuisda')
        return (<div id="app">
            <div id="test"></div>
            <MainWrapper>
            </MainWrapper>
        </div>)
    }
}



document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render( 

    <Provider store={store}>
        <App></App>
    </Provider>, 
    
    document.getElementById("main"));
    // document.getElementById("test").innerHTML = marked(markdownText);
})