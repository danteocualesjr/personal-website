import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="font-display text-4xl font-semibold mt-12 mb-6 text-foreground" {...props} />
    ),
    h2: (props) => (
      <h2 className="font-display text-3xl font-semibold mt-10 mb-4 text-foreground" {...props} />
    ),
    h3: (props) => (
      <h3 className="font-display text-2xl font-semibold mt-8 mb-3 text-foreground" {...props} />
    ),
    h4: (props) => (
      <h4 className="font-display text-xl font-semibold mt-6 mb-2 text-foreground" {...props} />
    ),
    p: (props) => (
      <p className="mb-6 leading-relaxed text-foreground/80" {...props} />
    ),
    a: (props) => (
      <a className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors" {...props} />
    ),
    ul: (props) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-foreground/80" {...props} />
    ),
    li: (props) => (
      <li className="leading-relaxed" {...props} />
    ),
    code: (props) => (
      <code className="bg-card border border-card-border px-1.5 py-0.5 rounded text-sm font-mono text-accent" {...props} />
    ),
    pre: (props) => (
      <pre className="bg-card border border-card-border p-5 rounded-xl overflow-x-auto mb-6 text-sm" {...props} />
    ),
    blockquote: (props) => (
      <blockquote className="border-l-4 border-accent pl-6 my-6 italic text-muted" {...props} />
    ),
    hr: (props) => (
      <hr className="my-12 border-card-border" {...props} />
    ),
    img: (props) => (
      <img className="rounded-xl my-8 w-full" {...props} />
    ),
    strong: (props) => (
      <strong className="font-semibold text-foreground" {...props} />
    ),
    em: (props) => (
      <em className="italic" {...props} />
    ),
    table: (props) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse" {...props} />
      </div>
    ),
    th: (props) => (
      <th className="bg-card border border-card-border px-4 py-2 text-left font-semibold" {...props} />
    ),
    td: (props) => (
      <td className="border border-card-border px-4 py-2" {...props} />
    ),
    ...components,
  };
}
