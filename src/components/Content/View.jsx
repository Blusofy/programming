import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import gfm from 'remark-gfm';
import { dracula } from '../../../node_modules/react-syntax-highlighter/dist/esm/styles/prism';

const renderers = {
    code: ({ language, value }) => (
        <SyntaxHighlighter style={dracula} language={language}>
            {value}
        </SyntaxHighlighter>
    ),
};
function View({ content }) {
    return (
        <ReactMarkdown plugins={[gfm]} renderers={renderers}>
            {content}
        </ReactMarkdown>
    );
}

export default View;
