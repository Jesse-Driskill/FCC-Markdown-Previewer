import React from "react";
let defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:` + `
Heres some code, \`<div></div>\`, between 2 backticks.` + `
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
` + `You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.` + `There's also [links](https://www.freecodecamp.org), and
> Block Quotes!` + `
And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

Test | Test | Test |
---- | ---- | ---- |
hello | world | world |


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Psy](./assets/gangnam-style.webp)
`;

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.dispatchChange = this.dispatchChange.bind(this);
    }

    dispatchChange(e) {
        console.log(e.target.value);
        this.props.changeMarkdown(e.target.value);
    }

    componentDidMount() {
        this.props.changeMarkdown(defaultMarkdown);
    }

    render() {
        if (!this.props.expanded) {
            return <textarea id="editor" style={{minHeight: "380px"}}defaultValue={defaultMarkdown} onChange={(e) => {this.dispatchChange(e)}}></textarea>
        } else {
            return <textarea id="editor" style={{minHeight: "800px"}} defaultValue={defaultMarkdown} onChange={(e) => {this.dispatchChange(e)}}></textarea>
        }
    }
}

export default Editor;