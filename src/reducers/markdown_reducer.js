const CHANGE = 'CHANGE';
import {marked} from "marked";

const markdownReducer = (state={ markdown: ""}, action) => {
    switch (action.type) {
        case CHANGE:
        return {
            // markdown: marked(action.markdown)
            markdown: action.markdown
        }
        break;
        default:
        return state;
    }
}

export default markdownReducer;