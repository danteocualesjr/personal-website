import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white" {...props} />,
    h2: (props) => <h2 className="text-3xl font-bold mt-6 mb-3 text-gray-900 dark:text-white" {...props} />,
    h3: (props) => <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white" {...props} />,
    p: (props) => <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300" {...props} />,
    a: (props) => <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />,
    ul: (props) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300" {...props} />,
    li: (props) => <li className="ml-4" {...props} />,
    code: (props) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono" {...props} />
    ),
    pre: (props) => (
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
    ),
    blockquote: (props) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600 dark:text-gray-400" {...props} />
    ),
    ...components,
  };
}

