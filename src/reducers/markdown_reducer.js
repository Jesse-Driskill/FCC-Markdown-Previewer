const CHANGE = 'CHANGE';

const markdownReducer = (state={ markdown: ""}, action) => {
    switch (action.type) {
        case CHANGE:
        return {
            markdown: action.markdown
        }
        break;
        default:
        return state;
    }
}

export default markdownReducer;