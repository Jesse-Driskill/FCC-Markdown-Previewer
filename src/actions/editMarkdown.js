const CHANGE = 'CHANGE';

const changeMarkdown = (markdown) => {
    return {
        type: CHANGE, markdown: markdown
    }
}

export default changeMarkdown;