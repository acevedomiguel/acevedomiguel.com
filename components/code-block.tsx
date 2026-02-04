import { useEffect, useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  content: string;
}

const CodeBlock = ({ content }: CodeBlockProps) => {
  const [codeBlocks, setCodeBlocks] = useState<Array<{
    language: string;
    code: string;
    index: number;
  }>>([]);

  useEffect(() => {
    const blocks: Array<{ language: string; code: string; index: number }> = [];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    const codeElements = tempDiv.querySelectorAll('[data-code-block]');
    
    codeElements.forEach((element, index) => {
      const language = element.getAttribute('data-language') || 'text';
      const code = element.textContent || '';
      blocks.push({ language, code, index });
    });
    
    setCodeBlocks(blocks);
  }, [content]);

  if (codeBlocks.length === 0) {
    return null;
  }

  return (
    <>
      {codeBlocks.map((block) => (
        <div key={block.index} className="my-6">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
              <span className="text-gray-300 text-sm font-medium">
                {block.language}
              </span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(block.code);
                }}
                className="text-gray-400 hover:text-white text-sm px-2 py-1 rounded transition-colors"
                aria-label="Copy code"
              >
                Copy
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <Highlight
                theme={themes.vsDark}
                code={block.code}
                language={block.language}
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} text-sm`} style={style}>
                    {tokens.map((line, lineIndex) => (
                      <div key={`line-${lineIndex}`} {...getLineProps({ line })}>
                        {line.map((token, tokenIndex) => (
                          <span key={`token-${tokenIndex}`} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CodeBlock;