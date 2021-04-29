import React from 'react';
import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

export const Code = ({ children, inline }) => {
  let lines = children.split('\n');

  // find first and last non-empty lines, and slice
  if (lines.length > 1) {
    const firstLine = lines.findIndex(l => l.trim().length > 0);
    const lastLine = [...lines].reverse().findIndex(l => l.trim().length > 0);
    lines = lines.slice(firstLine, -lastLine);
  }

  // find number of leading spaces to trim
  const leadingSpaces = Math.min(
    ...lines
      .filter(l => l.trim().length > 0)
      .map(l => l.slice(0, l.search(/[^\s]/)).length),
  );

  lines = lines.map(l => l.slice(leadingSpaces));

  const code = lines.join('\n');

  return (
    <SyntaxHighlighter
      language='jsx'
      style={prism}
      wrapLongLines
      customStyle={{ display: inline ? 'inline-block' : 'block' }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

Code.propTypes = {
  children: PropTypes.string,
  inline: PropTypes.bool,
};
