"use client"

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Code({ children, language }: any) {
  return (
    <SyntaxHighlighter
      language={language}
      style={materialDark}
    >
      {children}
    </SyntaxHighlighter>
  )
}