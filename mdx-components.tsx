import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-2xl font-semibold mt-8 mb-4" {...props} />,
    h2: (props) => <h2 className="text-xl font-semibold mt-6 mb-3" {...props} />,
    h3: (props) => <h3 className="text-lg font-semibold mt-4 mb-2" {...props} />,
    p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
    a: (props) => <a className="hover:text-foreground transition-colors" {...props} />,
    ul: (props) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
    ol: (props) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
    li: (props) => <li className="leading-relaxed" {...props} />,
    code: (props) => (
      <code className="bg-gray-100 dark:bg-gray-900 px-1 py-0.5 rounded text-sm" {...props} />
    ),
    pre: (props) => (
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-x-auto mb-4 text-sm" {...props} />
    ),
    blockquote: (props) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 my-4 italic text-muted" {...props} />
    ),
    ...components,
  };
}
